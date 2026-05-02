import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TreatmentSelector from '../components/TreatmentSelector';
import CityComparison from '../components/CityComparison';
import CostBreakdown from '../components/CostBreakdown';
import BudgetPlanner from '../components/BudgetPlanner';
import TipsSection from '../components/TipsSection';
import TimelineCost from '../components/TimelineCost';
import TravelCost from '../components/TravelCost';
import RecommendationBox from '../components/RecommendationBox';
import ChartComponent from '../components/ChartComponent';
import { costData, treatments } from '../utils/costData';

const CostExplorer = () => {
  const navigate = useNavigate();
  
  // State
  const [selectedTreatment, setSelectedTreatment] = useState(treatments[0]);
  const [selectedCity, setSelectedCity] = useState('');
  const [budget, setBudget] = useState('');
  const [stayDays, setStayDays] = useState(5);

  // Filtered data for selected treatment
  const cityWiseData = useMemo(() => {
    return costData.filter(d => d.treatment === selectedTreatment);
  }, [selectedTreatment]);

  // Set initial city when treatment changes
  useEffect(() => {
    if (cityWiseData.length > 0) {
      if (!cityWiseData.find(c => c.city === selectedCity)) {
        setSelectedCity(cityWiseData[0].city);
      }
    } else {
      setSelectedCity('');
    }
  }, [cityWiseData, selectedTreatment]);

  // Current selected detail
  const currentDetail = useMemo(() => {
    return cityWiseData.find(d => d.city === selectedCity);
  }, [cityWiseData, selectedCity]);

  // Total Trip Cost Calculation
  const totalTripCost = useMemo(() => {
    if (!currentDetail) return 0;
    const treatmentCost = currentDetail.maxCost;
    const logisticsCost = currentDetail.travel + (currentDetail.stayPerDay * stayDays) + (currentDetail.foodPerDay * stayDays);
    return treatmentCost + logisticsCost;
  }, [currentDetail, stayDays]);

  // Best Deal for TipsSection
  const bestDeal = useMemo(() => {
    if (cityWiseData.length < 2) return null;
    const sorted = [...cityWiseData].sort((a, b) => a.maxCost - b.maxCost);
    const best = sorted[0];
    const current = cityWiseData.find(c => c.city === selectedCity);
    
    if (best && current && best.city !== current.city) {
      return {
        city: best.city,
        savings: current.maxCost - best.maxCost
      };
    }
    return null;
  }, [cityWiseData, selectedCity]);

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans text-slate-900">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Advanced Header Section */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-[10px] font-black uppercase tracking-[0.2em]">Decision Tool</span>
              <div className="h-px w-12 bg-slate-200"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter leading-none">
              Medical <span className="text-teal-600">Journey</span> Cost
            </h1>
            <p className="text-slate-500 text-lg max-w-xl leading-relaxed font-medium">
              We've calculated treatment, travel, and recovery costs to give you the <span className="text-slate-900 font-bold underline decoration-teal-500/30">Total Trip Estimate</span>.
            </p>
          </div>
          
          <div className="w-full md:w-80">
            <TreatmentSelector 
              treatments={treatments} 
              selectedTreatment={selectedTreatment} 
              onSelect={setSelectedTreatment} 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content: Left Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1. City Comparison */}
            <section>
              <div className="flex justify-between items-end mb-8 px-2">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Step 1: Compare Cities</h2>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Across {cityWiseData.length} Locations</span>
              </div>
              <CityComparison 
                cityData={cityWiseData} 
                selectedCity={selectedCity} 
                onSelectCity={setSelectedCity}
                budget={budget}
              />
            </section>

            {/* 2. Visual Comparison Chart */}
            <ChartComponent cityData={cityWiseData} />

            {/* 3. Detailed Journey Breakdown */}
            {currentDetail ? (
              <div className="space-y-12">
                <div className="flex items-center gap-4 px-2">
                  <div className="h-px flex-1 bg-slate-200"></div>
                  <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.3em]">Analysis for {selectedCity}</h2>
                  <div className="h-px flex-1 bg-slate-200"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <CostBreakdown 
                    breakdown={currentDetail.breakdown} 
                    total={currentDetail.maxCost} 
                    confidence="High" 
                  />
                  <TravelCost 
                    travelBase={currentDetail.travel}
                    stayPerDay={currentDetail.stayPerDay}
                    foodPerDay={currentDetail.foodPerDay}
                    stayDays={stayDays}
                    onStayChange={setStayDays}
                  />
                </div>

                {/* Total Trip Summary Card */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 blur-[100px] -mr-32 -mt-32"></div>
                  <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div>
                      <p className="text-teal-400 text-xs font-black uppercase tracking-[0.2em] mb-4">Final Estimate for Your Journey</p>
                      <h3 className="text-6xl font-black tracking-tighter">₹{totalTripCost.toLocaleString()}</h3>
                      <p className="text-slate-400 mt-2 font-medium">Treatment + Logistics for {stayDays} Days</p>
                    </div>
                    <div className="w-full md:w-auto">
                      <button 
                        onClick={() => navigate(`/specialists?location=${selectedCity}&budget=${totalTripCost}`)}
                        className="w-full md:w-auto bg-teal-500 text-white px-12 py-6 rounded-[2rem] font-black text-xl hover:bg-teal-400 transition-all shadow-xl shadow-teal-500/20 hover:-translate-y-1 group flex items-center justify-center gap-4"
                      >
                        Find Specialists
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Timeline Flow */}
                <TimelineCost timeline={currentDetail.timeline} />
              </div>
            ) : (
              <div className="p-20 text-center bg-white rounded-[3rem] border-4 border-dashed border-slate-100">
                <p className="text-slate-400 font-bold text-xl italic">Select a city to unlock the full journey breakdown...</p>
              </div>
            )}
          </div>

          {/* Sidebar Content: Right Column */}
          <div className="lg:col-span-4 space-y-10">
            <RecommendationBox cityData={cityWiseData} selectedTreatment={selectedTreatment} />
            
            <BudgetPlanner budget={budget} onChange={setBudget} />
            
            <TipsSection 
              selectedTreatment={selectedTreatment}
              bestDealCity={bestDeal?.city}
              currentCity={selectedCity}
              savingAmount={bestDeal?.savings}
            />

            {/* Nearby Hospitals Preview (Lite) */}
            {currentDetail && (
              <section className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center text-sm">🏥</span>
                  Hospitals in {selectedCity}
                </h3>
                <div className="space-y-4">
                  {currentDetail.hospitals.map((h, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-teal-50/50 hover:border-teal-100 transition-all cursor-pointer group">
                      <span className="font-bold text-slate-700 text-sm group-hover:text-teal-900 transition-colors">{h}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-300 group-hover:text-teal-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Warning Section */}
            <section className="bg-amber-50 rounded-[2.5rem] p-8 border border-amber-100">
               <h3 className="text-amber-900 font-bold flex items-center gap-2 mb-6">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                 </svg>
                 Hidden Costs Awareness
               </h3>
               <div className="space-y-4">
                  {[
                    'ICU charges & Emergency fees',
                    'Follow-up consultations',
                    'Extra diagnostic tests',
                    'International transaction fees'
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs text-amber-800/80 leading-relaxed font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1 shrink-0"></span>
                      {text}
                    </div>
                  ))}
               </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CostExplorer;
