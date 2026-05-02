import React from 'react';

const TreatmentSelector = ({ treatments, selectedTreatment, onSelect }) => {
  return (
    <div className="relative group">
      <label className="block text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">
        Select Treatment
      </label>
      <div className="relative">
        <select
          value={selectedTreatment}
          onChange={(e) => onSelect(e.target.value)}
          className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-lg font-bold text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all cursor-pointer shadow-sm group-hover:shadow-md"
        >
          {treatments.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TreatmentSelector;
