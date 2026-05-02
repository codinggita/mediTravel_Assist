import React from 'react';

const BudgetPlanner = ({ budget, onChange }) => {
  return (
    <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 blur-2xl"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center text-xl">💰</div>
          <h2 className="text-xl font-bold">Budget Planner</h2>
        </div>

        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          Enter your budget to see which cities and hospital types fit your financial plan.
        </p>

        <div className="relative">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-lg font-bold">₹</span>
          <input
            type="number"
            value={budget}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Enter your budget"
            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-10 pr-5 py-4 text-xl font-black text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white/10 transition-all placeholder:text-slate-600"
          />
        </div>

        {budget > 0 && (
          <div className="mt-6 p-4 rounded-xl bg-teal-500/10 border border-teal-500/20">
            <p className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-1">Current Filter</p>
            <p className="text-sm text-slate-300 italic">Showing cities within ₹{Number(budget).toLocaleString()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BudgetPlanner;
