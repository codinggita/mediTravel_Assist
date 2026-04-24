import React from 'react';

const Features = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Why Choose MediTravel Assist?
          </h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            Leading the way in global healthcare coordination with luxury, safety, and transparency.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Feature 1 */}
          <div className="group bg-slate-50 rounded-[3rem] p-10 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex-1 space-y-6">
                <div className="w-16 h-16 bg-teal-500 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-teal-500/30 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>
                </div>
                <h3 className="text-3xl font-black text-slate-900 leading-tight">Verified <br /> Specialists</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  We partner with top-tier international doctors who undergo rigorous credentialing and background checks to ensure your safety.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
                    <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">✓</div>
                    Credential validation
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
                    <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">✓</div>
                    Patient outcome tracking
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative h-full min-h-[300px] overflow-hidden rounded-[2.5rem] shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" 
                    alt="Doctors" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 - Pricing */}
          <div className="group bg-teal-950 rounded-[3rem] p-10 relative overflow-hidden text-white hover:shadow-2xl hover:shadow-teal-950/40 transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
            
            <div className="relative z-10 space-y-12">
              <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-teal-700 shadow-xl group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-4xl font-black leading-tight">Transparent <br /> Pricing</h3>
                <p className="text-teal-200/80 font-medium leading-relaxed max-w-md text-lg">
                  No hidden fees or unexpected bills. Get upfront quotes and comparative cost analysis for procedures worldwide.
                </p>
              </div>

              <div className="pt-10 border-t border-teal-800 flex items-center justify-between">
                <div>
                  <span className="text-5xl font-black text-white">Save up to 60%</span>
                  <p className="text-teal-400 font-bold mt-2 uppercase tracking-widest text-xs">On elective surgeries vs. local options</p>
                </div>
                <div className="w-20 h-20 border border-teal-800 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bento Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] flex flex-col gap-6 hover:bg-white hover:shadow-xl transition-all group">
            <div className="w-16 h-16 bg-blue-100 rounded-[1.5rem] flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
            <div>
              <h4 className="text-xl font-black text-slate-800 mb-2">Find Specialist</h4>
              <p className="text-slate-500 text-sm font-medium mb-4">Browse 5,000+ JCI-accredited doctors.</p>
              <a href="#" className="inline-flex items-center gap-2 text-teal-600 font-bold hover:gap-4 transition-all text-sm">
                Explore <span>→</span>
              </a>
            </div>
          </div>
          
          <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] flex flex-col gap-6 hover:bg-white hover:shadow-xl transition-all group">
             <div className="w-16 h-16 bg-teal-100 rounded-[1.5rem] flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="10"/></svg>
            </div>
            <div>
              <h4 className="text-xl font-black text-slate-800 mb-2">Cost Explorer</h4>
              <p className="text-slate-500 text-sm font-medium mb-4">Upfront quotes for 150+ procedures.</p>
              <a href="#" className="inline-flex items-center gap-2 text-teal-600 font-bold hover:gap-4 transition-all text-sm">
                Compare <span>→</span>
              </a>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-[2.5rem] flex flex-col gap-6 hover:bg-white hover:shadow-xl transition-all group">
             <div className="w-16 h-16 bg-emerald-600 rounded-[1.5rem] flex items-center justify-center text-white shadow-lg shadow-emerald-200">
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <h4 className="text-xl font-black text-slate-800 mb-2">24/7 Assistance</h4>
              <p className="text-slate-500 text-sm font-medium mb-4">Immediate on-ground support teams.</p>
              <a href="#" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-4 transition-all text-sm">
                Call Now <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
