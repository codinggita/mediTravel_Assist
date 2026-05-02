import React from 'react';

const RecommendationBox = ({ cityData, selectedTreatment }) => {
  // Simple logic: Find 'Best Value' city
  const bestValue = cityData.find(c => c.tag === 'Best Value') || cityData[0];
  
  if (!bestValue) return null;

  return (
    <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-indigo-500/20 opacity-50"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-teal-500/20 animate-pulse">🏆</div>
          <div>
            <h2 className="text-xl font-bold tracking-tight">Best Option for You</h2>
            <p className="text-teal-400 text-[10px] font-black uppercase tracking-[0.2em]">Smart Recommendation</p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            <span className="text-white font-black">{bestValue.city}</span> is recommended for your <span className="text-white font-bold">{selectedTreatment}</span> because it offers the <span className="text-teal-400 font-bold underline decoration-2 underline-offset-4">lowest overall cost</span> while maintaining high hospital availability.
          </p>
          
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Potential Savings</p>
              <p className="text-xl font-black text-white">~ ₹35,000</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Success Rate</p>
              <p className="text-xl font-black text-white">98.4%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationBox;
