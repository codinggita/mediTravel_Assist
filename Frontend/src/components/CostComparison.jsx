import React from 'react';

const CostComparison = ({ cityData, selectedCity, onSelectCity, budget }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cityData.map((data) => {
        const isAffordable = budget ? data.maxCost <= budget : true;
        const isSelected = selectedCity === data.city;

        return (
          <div
            key={data.city}
            onClick={() => onSelectCity(data.city)}
            className={`cursor-pointer rounded-3xl p-6 border-2 transition-all duration-300 transform hover:-translate-y-1 ${
              isSelected
                ? 'border-teal-500 bg-teal-50/30 shadow-lg'
                : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-md'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-slate-900">{data.city}</h3>
              {budget && (
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    isAffordable ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}
                >
                  {isAffordable ? '✔ Affordable' : '✘ Over Budget'}
                </span>
              )}
            </div>
            
            <div className="space-y-1">
              <p className="text-slate-500 text-sm font-medium">Estimated Range</p>
              <p className={`text-2xl font-black ${isAffordable ? 'text-teal-600' : 'text-orange-600'}`}>
                ₹{data.minCost.toLocaleString()} – ₹{data.maxCost.toLocaleString()}
              </p>
            </div>

            <div className="mt-6 flex items-center text-sm font-bold text-teal-600 group">
              View Breakdown
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform ${isSelected ? 'rotate-90' : 'group-hover:translate-x-1'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CostComparison;
