import React from 'react';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
  return (
    <section className="relative pt-48 pb-32 overflow-hidden bg-white">
      {/* Dynamic Background Elements - More Vibrant */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[120px] -mr-96 -mt-96 z-0"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-50/80 rounded-full blur-[100px] -ml-48 -mb-48 z-0"></div>
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Column: Content */}
          <div className="relative z-20">
            {/* Safety Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-600 font-bold text-white px-4 py-2 rounded-xl text-[10px] uppercase tracking-[0.2em] mb-10 shadow-lg shadow-blue-200">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
               Security Protocol V4.2
            </div>
            
            <h1 className="text-6xl md:text-[84px] font-[950] text-slate-900 leading-[0.9] tracking-tighter mb-8">
              Medical Travel <br />
              <span className="text-blue-600">Perfected.</span>
            </h1>
            
            <p className="text-xl text-slate-500 leading-relaxed max-w-xl font-medium mb-12">
              Connect with 450+ JCI-accredited facilities and legendary specialists. 
              We handle every detail from visas to follow-up care.
            </p>

            {/* Enhanced Search Widget */}
            <div className="relative mb-10 group max-w-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white p-3 rounded-[2rem] shadow-2xl flex flex-col md:flex-row items-center gap-2 border border-slate-100">
                <div className="flex-1 w-full px-6 py-3 flex flex-col items-start md:border-r border-slate-100">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Destination</span>
                  <input type="text" placeholder="Search Country..." className="w-full bg-transparent font-bold text-slate-800 focus:outline-none placeholder:text-slate-300" />
                </div>
                <div className="flex-1 w-full px-6 py-3 flex flex-col items-start">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Treatment</span>
                  <input type="text" placeholder="Procedure or Clinic..." className="w-full bg-transparent font-bold text-slate-800 focus:outline-none placeholder:text-slate-300" />
                </div>
                <button className="w-full md:w-auto h-14 px-10 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-xl flex items-center justify-center gap-2 active:scale-95">
                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                   Search
                </button>
              </div>
            </div>

            <div className="flex items-center gap-8 mb-12">
               <button className="flex items-center gap-3 text-slate-900 font-bold hover:text-blue-600 transition-colors group">
                  <div className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:border-blue-200 group-hover:bg-blue-50 transition-all">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  Watch How it Works
               </button>
               <div className="h-4 w-px bg-slate-300"></div>
               <a href="#" className="text-slate-500 font-bold hover:text-slate-900 transition-colors underline underline-offset-4">Read Safety Report</a>
            </div>

            {/* Added: Trust Badges inside Hero to fill the "empty" space */}
            <div className="flex flex-wrap items-center gap-10">
              <div className="flex items-center gap-3">
                <div className="text-2xl font-black text-slate-900">4.9/5</div>
                <div className="flex flex-col text-xs font-bold text-slate-400 uppercase tracking-tighter">
                  <span className="text-blue-500">★★★★★</span>
                  Patient Rating
                </div>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
              <div className="flex items-center gap-3">
                 <div className="text-2xl font-black text-slate-900">100%</div>
                 <div className="flex flex-col text-xs font-bold text-slate-400 uppercase tracking-tighter">
                  Verified
                  <span className="text-teal-600">Clinics</span>
                </div>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-white shadow-lg" src={`https://i.pravatar.cc/100?u=u${i}`} alt="u" />
                ))}
                <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">+12k</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Component */}
          <div className="relative">
            {/* Main Image Illustration */}
            <div className="relative group">
               <div className="absolute -inset-10 bg-blue-100/30 rounded-full blur-[100px] animate-pulse"></div>
               <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white/50 backdrop-blur-sm group-hover:rotate-1 transition-transform duration-700">
                  <img 
                    src={heroBg} 
                    alt="Clinic" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 min-h-[500px]"
                  />
                  {/* Glass Card on top of image */}
                  <div className="absolute top-8 left-8 right-8 bg-black/20 backdrop-blur-md border border-white/20 p-6 rounded-3xl">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white ring-1 ring-white/20">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        </div>
                        <div>
                           <h4 className="text-white font-bold leading-tight">Global Care Shield</h4>
                           <p className="text-white/60 text-xs font-medium uppercase tracking-widest">Active Protection</p>
                        </div>
                     </div>
                  </div>

                  {/* Trust Badge at Bottom */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white p-6 rounded-[2.5rem] shadow-2xl">
                     <div className="flex items-center justify-between">
                        <div>
                           <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1 text-left">Safety Certification</p>
                           <h4 className="text-slate-900 font-black text-xl">ISO 9001:2024 Verified</h4>
                        </div>
                        <div className="w-14 h-14 bg-teal-500 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-teal-500/20">
                           <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Floating Success Card to fill the empty top-right/left space around the image */}
               <div className="absolute -top-10 -right-10 bg-white p-5 rounded-3xl shadow-2xl border border-slate-50 flex items-center gap-4 animate-bounce-slow hidden xl:flex">
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Success Rate</p>
                     <p className="text-xl font-black text-slate-900">99.8%</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
