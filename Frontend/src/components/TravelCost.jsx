import React from 'react';

const TravelCost = ({ travelBase, stayPerDay, foodPerDay, stayDays, onStayChange }) => {
  const totalTravel = travelBase;
  const totalStay = stayPerDay * stayDays;
  const totalFood = foodPerDay * stayDays;
  const totalExtra = totalTravel + totalStay + totalFood;

  return (
    <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl"></div>
      
      <h2 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
        <span className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-lg">✈️</span>
        Travel & Stay Planning
      </h2>

      <div className="space-y-6">
        {/* Stay Duration Input */}
        <div>
          <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Planned Stay (Days)</label>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onStayChange(Math.max(1, stayDays - 1))}
              className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-xl font-bold hover:bg-slate-200 transition-colors"
            >
              -
            </button>
            <div className="flex-1 text-center py-3 bg-white border-2 border-slate-100 rounded-xl font-black text-2xl">
              {stayDays}
            </div>
            <button 
              onClick={() => onStayChange(stayDays + 1)}
              className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xl font-bold hover:bg-slate-800 transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Cost Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
            <p className="text-[10px] font-bold text-blue-600 uppercase mb-1">Travel (Round Trip)</p>
            <p className="text-xl font-black text-slate-900">₹{totalTravel.toLocaleString()}</p>
          </div>
          <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100">
            <p className="text-[10px] font-bold text-indigo-600 uppercase mb-1">Stay ({stayDays} Days)</p>
            <p className="text-xl font-black text-slate-900">₹{totalStay.toLocaleString()}</p>
          </div>
          <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100">
            <p className="text-[10px] font-bold text-purple-600 uppercase mb-1">Food ({stayDays} Days)</p>
            <p className="text-xl font-black text-slate-900">₹{totalFood.toLocaleString()}</p>
          </div>
        </div>

        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex justify-between items-center">
          <div className="text-slate-500 font-bold">Total Logistics Cost</div>
          <div className="text-2xl font-black text-blue-600">₹{totalExtra.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

export default TravelCost;
