import React from 'react';

const TimelineCost = ({ timeline }) => {
  if (!timeline) return null;

  return (
    <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm">
      <h2 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
        <span className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-lg">📅</span>
        Treatment Timeline & Flow
      </h2>

      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
        {timeline.map((item, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-white shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="text-[10px] font-black">{item.day}</span>
            </div>
            
            {/* Content */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div className="font-bold text-slate-900">Day {item.day}: {item.label}</div>
                <div className="text-lg font-black text-teal-600">₹{item.cost.toLocaleString()}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 p-6 bg-slate-900 rounded-3xl text-center">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Estimated Duration</p>
        <p className="text-2xl font-black text-white">{timeline[timeline.length - 1].day} Days Journey</p>
      </div>
    </div>
  );
};

export default TimelineCost;
