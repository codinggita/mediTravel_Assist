import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Emergency = () => {
  const [isSOSActive, setIsSOSActive] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const emergencyContacts = [
    { title: "Local Emergency (Police/Ambulance)", number: "911", icon: "🚑" },
    { title: "MediTravel 24/7 Concierge", number: "+1 (800) MEDI-HELP", icon: "🏨" },
    { title: "International Travel Insurance", number: "+1 (555) 0911-EXT", icon: "🛡️" },
    { title: "Nearest Embassy Support", number: "Search based on location", icon: "🏛️" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-red-500/30">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[120px] -mr-32 -mt-32 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header Section */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-2xl text-red-500 text-[10px] font-black uppercase tracking-[0.2em] animate-bounce">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
              Live Emergency Response Active
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight">
              Emergency <span className="text-red-500">Assistance</span>
            </h1>
            <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Immediate medical coordination and travel support. Your safety is our global priority.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Left: SOS Panel */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-12 flex flex-col items-center justify-center text-center space-y-10 group hover:border-red-500/30 transition-all duration-500">
              <div className="space-y-2">
                <h2 className="text-2xl font-black text-slate-100">One-Tap SOS</h2>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Hold for 3 seconds to alert local authorities</p>
              </div>

              <button 
                onMouseDown={() => setIsSOSActive(true)}
                onMouseUp={() => setIsSOSActive(false)}
                className={`relative w-64 h-64 rounded-full flex items-center justify-center transition-all duration-300 ${isSOSActive ? 'scale-90 shadow-[0_0_100px_rgba(239,68,68,0.6)]' : 'shadow-[0_0_50px_rgba(239,68,68,0.2)]'}`}
              >
                <div className={`absolute inset-0 bg-red-600 rounded-full ${isSOSActive ? 'animate-none' : 'animate-ping opacity-20'}`}></div>
                <div className="absolute inset-4 bg-red-500 rounded-full shadow-inner flex flex-col items-center justify-center group-hover:bg-red-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                  <span className="mt-4 font-black text-2xl">SOS</span>
                </div>
              </button>

              <div className="bg-white/5 p-6 rounded-3xl w-full border border-white/5 space-y-2">
                <div className="flex justify-between text-xs font-black text-slate-500 uppercase tracking-widest">
                  <span>Current Coordinates</span>
                  <span className="text-emerald-500">Signal Strong</span>
                </div>
                <p className="text-lg font-mono text-slate-300">28.6139° N, 77.2090° E</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">New Delhi, India • {currentTime.toLocaleTimeString()}</p>
              </div>
            </div>

            {/* Right: Contacts & Facilities */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Quick Contacts Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {emergencyContacts.map((contact, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all cursor-pointer group">
                    <div className="text-4xl mb-4">{contact.icon}</div>
                    <h3 className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-2">{contact.title}</h3>
                    <p className="text-2xl font-black text-slate-100 group-hover:text-red-500 transition-colors">{contact.number}</p>
                  </div>
                ))}
              </div>

              {/* Nearest Facility - Simulated Map/Card */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                
                <div className="relative z-10 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                        Nearest JCI Facility
                      </div>
                      <h3 className="text-3xl font-black leading-tight">Apollo International <br />Specialty Center</h3>
                    </div>
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8Z"/></svg>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm font-bold text-blue-100">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      Verified
                    </div>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                      12 mins away
                    </div>
                  </div>

                  <button className="w-full bg-white text-blue-600 py-5 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-3">
                    Start Navigation
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5-5 18-2-8-8-2Z"/></svg>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Guidelines Section */}
          <section className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              { title: "Medical Record Access", desc: "Instantly share your medical history with local paramedics using your secure QR code." },
              { title: "Insurance Direct-Pay", desc: "Emergency admissions are covered under our direct-pay protocol with partner insurers." },
              { title: "Travel Rerouting", desc: "If hospitalization is required, we manage all flight cancellations and re-bookings." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/5 p-8 rounded-[2rem]">
                <h4 className="text-slate-100 font-black mb-3">{item.title}</h4>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Emergency;
