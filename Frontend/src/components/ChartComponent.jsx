import React from 'react';

const ChartComponent = ({ cityData }) => {
  const maxVal = Math.max(...cityData.map(c => c.maxCost));

  return (
    <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm">
      <h2 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
        <span className="w-10 h-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center text-lg">📊</span>
        Visual Cost Comparison
      </h2>

      <div className="space-y-6">
        {cityData.map((data) => (
          <div key={data.city} className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="font-bold text-slate-700">{data.city}</span>
              <span className="font-black text-slate-900">₹{data.maxCost.toLocaleString()}</span>
            </div>
            <div className="h-4 bg-slate-100 rounded-full overflow-hidden flex">
              <div 
                className={`h-full transition-all duration-1000 ${
                  data.tag === 'Best Value' ? 'bg-green-500' :
                  data.tag === 'Premium' ? 'bg-purple-500' : 'bg-blue-500'
                }`}
                style={{ width: `${(data.maxCost / maxVal) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex justify-center gap-6">
        {['Best Value', 'Premium', 'Budget Friendly'].map(tag => (
          <div key={tag} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${
              tag === 'Best Value' ? 'bg-green-500' :
              tag === 'Premium' ? 'bg-purple-500' : 'bg-blue-500'
            }`}></div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartComponent;
