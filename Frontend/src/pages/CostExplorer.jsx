import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CostExplorer = () => {
  const [searchParams] = useSearchParams();
  const treatment = searchParams.get('treatment') || 'Cardiology';
  const location = searchParams.get('location') || 'Delhi';

  // Dummy data for the selected context
  const overviewData = {
    avgRange: '₹20k – ₹30k',
    minCost: '₹18,500',
    maxCost: '₹45,000',
    status: 'Verified'
  };

  const breakdownItems = [
    { label: 'Consultation Fee', cost: '₹1,500' },
    { label: 'Tests Cost', cost: '₹5,000' },
    { label: 'Procedure Cost', cost: '₹18,000' },
    { label: 'Medicines Cost', cost: '₹2,500' },
  ];

  const hospitals = [
    { name: 'Apollo Hospital', location: 'Sarita Vihar, Delhi', cost: '₹25,000', rating: 4.8, cheapest: false },
    { name: 'Max Super Speciality', location: 'Saket, Delhi', cost: '₹28,500', rating: 4.9, cheapest: false },
    { name: 'Fortis Escorts', location: 'Okhla, Delhi', cost: '₹22,000', rating: 4.7, cheapest: true },
    { name: 'BLK-Max Hospital', location: 'Pusa Road, Delhi', cost: '₹26,000', rating: 4.6, cheapest: false },
  ];

  const whyCostVaries = [
    { title: 'Location differences', desc: 'Costs in metro cities like Delhi are typically higher due to infrastructure costs.', icon: '📍' },
    { title: 'Hospital type', desc: 'Premium private hospitals charge more than general or government-aided facilities.', icon: '🏢' },
    { title: 'Doctor experience', desc: 'Senior specialists with 20+ years of experience may charge higher consultation fees.', icon: '👨‍⚕️' },
    { title: 'Urgency', desc: 'Emergency procedures often incur additional triage and immediate facility fees.', icon: '⚡' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        
        {/* 1️⃣ Context Header */}
        <div className="bg-white rounded-3xl p-6 mb-8 border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-2xl">🩺</div>
            <div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Analysis for</p>
              <h1 className="text-2xl font-bold text-slate-900 capitalize">{treatment} in {location}</h1>
            </div>
          </div>
          <Link to="/specialists" className="px-6 py-2.5 rounded-xl border border-slate-200 text-sm font-bold hover:bg-slate-50 transition-all">
            Modify Selection
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            
            {/* 2️⃣ Cost Overview Section */}
            <section className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start mb-8">
                <h2 className="text-xl font-bold">Cost Overview</h2>
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {overviewData.status}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <p className="text-slate-500 text-sm mb-1">Average Range</p>
                  <p className="text-2xl font-black text-teal-600">{overviewData.avgRange}</p>
                </div>
                <div className="p-6 rounded-2xl border border-slate-100">
                  <p className="text-slate-500 text-sm mb-1">Minimum Cost</p>
                  <p className="text-2xl font-bold">{overviewData.minCost}</p>
                </div>
                <div className="p-6 rounded-2xl border border-slate-100">
                  <p className="text-slate-500 text-sm mb-1">Maximum Cost</p>
                  <p className="text-2xl font-bold">{overviewData.maxCost}</p>
                </div>
              </div>
            </section>

            {/* 3️⃣ Detailed Cost Breakdown */}
            <section className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 blur-[60px] rounded-full"></div>
              <h2 className="text-xl font-bold mb-8">Detailed Cost Breakdown</h2>
              
              <div className="space-y-4 mb-8">
                {breakdownItems.map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-3 border-b border-slate-50">
                    <span className="text-slate-600 font-medium">{item.label}</span>
                    <span className="font-bold">{item.cost}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900 rounded-2xl p-6 text-white flex justify-between items-center">
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Total Estimated Cost</p>
                  <p className="text-3xl font-black">₹27,000</p>
                </div>
                <div className="text-right group relative">
                  <p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-1 flex items-center justify-end gap-1 cursor-help">
                    Confidence: High
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </p>
                  <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-white text-slate-900 text-[10px] rounded-lg shadow-xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 leading-tight">
                    Based on 500+ verified historical data points from clinics in this region.
                  </div>
                  <div className="w-24 h-1.5 bg-slate-800 rounded-full mt-2 overflow-hidden">
                    <div className="w-[90%] h-full bg-teal-500"></div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4️⃣ Cost Comparison Table */}
            <section className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold mb-8">Hospital Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-slate-400 text-xs font-bold uppercase tracking-widest border-b border-slate-100">
                      <th className="pb-4">Hospital Name</th>
                      <th className="pb-4">Total Cost</th>
                      <th className="pb-4">Rating</th>
                      <th className="pb-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {hospitals.map((h) => (
                      <tr key={h.name} className={`group hover:bg-slate-50/50 transition-colors ${h.cheapest ? 'bg-teal-50/30' : ''}`}>
                        <td className="py-5">
                          <p className="font-bold text-slate-900">{h.name}</p>
                          <p className="text-xs text-slate-500">{h.location}</p>
                        </td>
                        <td className="py-5">
                          <p className="font-bold">{h.cost}</p>
                          {h.cheapest && <span className="text-[10px] font-bold text-teal-600 bg-teal-100 px-2 py-0.5 rounded-full uppercase tracking-tighter">Cheapest</span>}
                        </td>
                        <td className="py-5">
                          <div className="flex items-center gap-1">
                            <span className="font-bold text-sm">{h.rating}</span>
                            <span className="text-yellow-400">★</span>
                          </div>
                        </td>
                        <td className="py-5 text-right">
                          <button className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${h.cheapest ? 'bg-teal-600 text-white hover:bg-teal-700' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                            Select
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

          </div>

          <div className="space-y-8">
            
            {/* 5️⃣ Hidden Costs Warning Section */}
            <section className="bg-orange-50 rounded-[2rem] p-8 border border-orange-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-orange-900 mb-6">Estimated Factors</h2>
              <ul className="space-y-4">
                {[
                  'Travel and accommodation costs are not included in this estimate.',
                  'Emergency surcharges may apply for unscheduled procedures.',
                  'Additional diagnostic tests might be required after physical consultation.'
                ].map((text, i) => (
                  <li key={i} className="flex gap-3 text-sm text-orange-800/80 leading-relaxed">
                    <span className="text-orange-500 font-bold">•</span>
                    {text}
                  </li>
                ))}
              </ul>
            </section>

            {/* 6️⃣ “Why Cost Varies?” Section */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold px-2">Why Cost Varies?</h2>
              <div className="grid grid-cols-1 gap-4">
                {whyCostVaries.map((item) => (
                  <div key={item.title} className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="text-2xl mb-3">{item.icon}</div>
                    <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 7️⃣ Call-To-Action Section */}
            <section className="bg-slate-900 rounded-[2.5rem] p-8 text-white text-center">
              <h3 className="text-xl font-bold mb-4">Ready to proceed?</h3>
              <p className="text-slate-400 text-sm mb-8">Book your consultation now and lock in these estimated prices.</p>
              <div className="space-y-3">
                <button className="w-full bg-teal-500 text-white py-4 rounded-2xl font-bold hover:bg-teal-600 transition-all shadow-lg shadow-teal-500/20">
                  Book Appointment
                </button>
                <button className="w-full bg-white/10 text-white py-4 rounded-2xl font-bold border border-white/10 hover:bg-white/20 transition-all">
                  Contact Support
                </button>
                <button className="w-full text-slate-400 text-xs font-bold py-2 hover:text-white transition-colors">
                  Compare More Options
                </button>
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
