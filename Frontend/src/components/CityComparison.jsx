import React from 'react';

const CityComparison = ({ cityData, selectedCity, onSelectCity, budget }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cityData.map((data) => {
        const isAffordable = budget ? data.maxCost <= budget : true;
        const isSelected = selectedCity === data.city;

        return (
          <div
            key={data.city}
            onClick={() => onSelectCity(data.city)}
            className={`cursor-pointer rounded-3xl p-6 border-2 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden ${
              isSelected
                ? 'border-teal-500 bg-white shadow-xl ring-4 ring-teal-500/5'
                : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-lg'
            }`}
          >
            {/* Tag Overlay */}
            <div className={`absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl text-[10px] font-black uppercase tracking-widest ${
              data.tag === 'Best Value' ? 'bg-green-500 text-white' :
              data.tag === 'Premium' ? 'bg-purple-600 text-white' : 'bg-blue-500 text-white'
            }`}>
              {data.tag}
            </div>

            <div className="mt-2 mb-6">
              <h3 className="text-2xl font-black text-slate-900">{data.city}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Verified Hospitals</span>
              </div>
            </div>
            
            <div className="space-y-1 mb-6">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Est. Treatment Cost</p>
              <p className={`text-2xl font-black ${isAffordable ? 'text-slate-900' : 'text-red-600'}`}>
                ₹{data.minCost.toLocaleString()} - ₹{data.maxCost.toLocaleString()}
              </p>
            </div>

            {budget && (
              <div className={`mt-4 pt-4 border-t border-slate-50 flex items-center justify-between`}>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Budget Match</span>
                <span className={`text-xs font-black ${isAffordable ? 'text-green-600' : 'text-red-500'}`}>
                  {isAffordable ? 'Within Budget' : 'Exceeds Budget'}
                </span>
              </div>
            )}

            <div className={`mt-6 flex items-center justify-center py-3 rounded-2xl transition-all font-bold text-sm ${
              isSelected ? 'bg-teal-600 text-white shadow-lg shadow-teal-600/20' : 'bg-slate-50 text-slate-600 group-hover:bg-slate-100'
            }`}>
              {isSelected ? 'Selected' : 'Select City'}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CityComparison;
