import React from 'react';

const Trust = () => {
  return (
    <section className="py-24 bg-slate-50/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Trust Bar */}
        <div className="mb-24">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-[0.3em] mb-12">Certified & Recognized By</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {['JCI Accredited', 'ISO 9001', 'HIPAA Compliant', 'Global Health Council', 'Medical Travel Assoc.'].map((org) => (
              <div key={org} className="flex items-center gap-2 group cursor-help">
                <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center font-black text-slate-400 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                  {org[0]}
                </div>
                <span className="font-bold text-slate-500 group-hover:text-slate-800 transition-colors uppercase text-xs tracking-tighter">{org}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Quote Section */}
        <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl shadow-blue-900/5 border border-white flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 shadow-inner">
               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Your Safety is Our <br />
              <span className="text-blue-600 underline decoration-blue-100 decoration-8 underline-offset-4">Legal Promise.</span>
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              "We understand the courage it takes to travel for health. That's why every hospital, every doctor, and every procedure is vetted through our 150-point Safety Protocol."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-slate-100 overflow-hidden border-2 border-white shadow-lg">
                <img src="https://i.pravatar.cc/150?u=ceo" alt="Director" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Dr. Sarah Andersson</h4>
                <p className="text-sm font-bold text-teal-600 uppercase tracking-widest">Chief Patient Safety Officer</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
            {[
              { label: 'Data Encryption', desc: 'Bank-grade AES-256', icon: '🔒' },
              { label: 'Verified Clinics', desc: '100% JCI Certified', icon: '🏥' },
              { label: 'Secure Payments', desc: 'Escrow Protected', icon: '💳' },
              { label: '24/7 Support', desc: 'Dedicated On-ground', icon: '🎧' },
            ].map((item) => (
              <div key={item.label} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:scale-105 transition-transform cursor-default">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h5 className="font-black text-slate-900 mb-1">{item.label}</h5>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
