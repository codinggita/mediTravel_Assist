import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TreatmentSelector from '../components/TreatmentSelector';
import CostComparison from '../components/CostComparison';
import CostBreakdown from '../components/CostBreakdown';
import BudgetPlanner from '../components/BudgetPlanner';
import TipsSection from '../components/TipsSection';
import { costData, treatments, hospitalTypes } from '../utils/costData';

const CostExplorer = () => {
  const navigate = useNavigate();
  
  // State
  const [selectedTreatment, setSelectedTreatment] = useState(treatments[0]);
  const [selectedCity, setSelectedCity] = useState('');
  const [hospitalType, setHospitalType] = useState('Private');
  const [budget, setBudget] = useState('');

  // Filtered data for selected treatment
  const cityWiseData = useMemo(() => {
    return costData.filter(d => d.treatment === selectedTreatment && d.hospitalType === hospitalType);
  }, [selectedTreatment, hospitalType]);

  // Set initial city when treatment or hospital type changes
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

  // Saving Tip Logic
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
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Cost <span className="text-teal-600">Explorer</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
            Plan your medical journey with transparency. Compare treatment costs across top cities and hospital categories.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Selection & Comparison */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Controls Section */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <TreatmentSelector 
                  treatments={treatments} 
                  selectedTreatment={selectedTreatment} 
                  onSelect={setSelectedTreatment} 
                />
              </div>
              <div className="md:w-64">
                <label className="block text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">
                  Hospital Type
                </label>
                <div className="flex p-1.5 bg-slate-100 rounded-2xl">
                  {hospitalTypes.map(type => (
                    <button
                      key={type}
                      onClick={() => setHospitalType(type)}
                      className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        hospitalType === type 
                          ? 'bg-white text-teal-600 shadow-sm' 
                          : 'text-slate-500 hover:text-slate-700'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Comparison Grid */}
            <section>
              <div className="flex justify-between items-end mb-6 px-4">
                <h2 className="text-xl font-bold text-slate-900">City-wise Comparison</h2>
                <p className="text-sm text-slate-500">Showing {cityWiseData.length} cities</p>
              </div>
              <CostComparison 
                cityData={cityWiseData} 
                selectedCity={selectedCity} 
                onSelectCity={setSelectedCity}
                budget={budget}
              />
            </section>

            {/* Detailed Breakdown (shown if city selected) */}
            {currentDetail ? (
              <CostBreakdown 
                breakdown={currentDetail.breakdown} 
                total={currentDetail.maxCost} 
                confidence="High" 
              />
            ) : (
              <div className="bg-white rounded-[2.5rem] p-12 border border-slate-200 border-dashed text-center">
                <p className="text-slate-400 font-medium">Select a city to view detailed cost breakdown</p>
              </div>
            )}

            {/* CTA Button */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm text-center">
              <h3 className="text-2xl font-bold mb-3">Found a location that fits?</h3>
              <p className="text-slate-500 mb-8 max-w-md mx-auto">
                Discover top-rated specialists and hospitals in {selectedCity} within your planned budget.
              </p>
              <button 
                onClick={() => navigate(`/specialists?location=${selectedCity}&budget=${budget || currentDetail?.maxCost}`)}
                className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-3xl font-black hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 group"
              >
                View Doctors in This Budget
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column: Planner & Tips */}
          <div className="lg:col-span-4 space-y-8">
            <BudgetPlanner budget={budget} onChange={setBudget} />
            
            <TipsSection 
              selectedTreatment={selectedTreatment}
              bestDealCity={bestDeal?.city}
              currentCity={selectedCity}
              savingAmount={bestDeal?.savings}
            />

            {/* Warning Section */}
            <section className="bg-amber-50 rounded-[2.5rem] p-8 border border-amber-100 relative overflow-hidden">
               <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200/20 blur-2xl rounded-full"></div>
               <div className="relative z-10">
                 <h3 className="text-amber-900 font-bold flex items-center gap-2 mb-6">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                   </svg>
                   Hidden Cost Awareness
                 </h3>
                 <ul className="space-y-4">
                   {[
                     'ICU charges (if required)',
                     'Emergency fees',
                     'Follow-up consultations',
                     'Extra diagnostic tests'
                   ].map((item, idx) => (
                     <li key={idx} className="flex items-start gap-3 text-sm text-amber-800/80 leading-relaxed">
                       <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                       {item}
                     </li>
                   ))}
                 </ul>
                 <p className="mt-6 text-[11px] text-amber-700/60 italic font-medium leading-relaxed">
                   *Estimates are based on standard procedure protocols. Complications may incur additional costs.
                 </p>
               </div>
            </section>

            {/* Confidence Widget */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Data Accuracy</span>
                <span className="px-2.5 py-1 rounded-lg bg-green-50 text-green-600 text-[10px] font-black uppercase">Verified</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">92% Precision Level</p>
                  <p className="text-[10px] text-slate-500">Based on 2,400+ historical records</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CostExplorer;
