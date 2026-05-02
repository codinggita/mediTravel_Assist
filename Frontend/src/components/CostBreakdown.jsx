import React from 'react';

const CostBreakdown = ({ breakdown, total, confidence }) => {
  const items = [
    { label: 'Doctor Fee', value: breakdown.doctor, icon: '👨‍⚕️' },
    { label: 'Hospital Charges', value: breakdown.hospital, icon: '🏥' },
    { label: 'Medicines', value: breakdown.medicine, icon: '💊' },
    { label: 'Tests', value: breakdown.tests, icon: '🧪' },
  ];

  return (
    <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 blur-[80px] rounded-full -mr-20 -mt-20"></div>
      
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
        Detailed Breakdown
        <span className="text-sm font-normal text-slate-400">(Estimated)</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {items.map((item) => (
          <div key={item.label} className="flex justify-between items-center p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-hover hover:bg-white hover:shadow-sm">
            <div className="flex items-center gap-3">
              <span className="text-xl">{item.icon}</span>
              <span className="text-slate-600 font-semibold">{item.label}</span>
            </div>
            <span className="text-slate-900 font-bold">₹{item.value.toLocaleString()}</span>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 rounded-[2rem] p-8 text-white relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">Total Estimated Cost</p>
            <p className="text-5xl font-black text-teal-400">₹{total.toLocaleString()}</p>
          </div>
          
          <div className="text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 mb-3">
              <div className={`w-2 h-2 rounded-full ${
                confidence === 'High' ? 'bg-green-400' : confidence === 'Medium' ? 'bg-yellow-400' : 'bg-red-400'
              } animate-pulse`}></div>
              <p className="text-sm font-bold">Confidence: {confidence}</p>
            </div>
            <p className="text-xs text-slate-400 max-w-[200px] leading-relaxed">
              Based on average market data, actual cost may vary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostBreakdown;
