import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('userInfo');
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  const stats = [
    { label: "Treatments Scheduled", value: "2", icon: "📅", color: "blue" },
    { label: "Cost Savings", value: "$4,200", icon: "💰", color: "emerald" },
    { label: "Medical Files", value: "12", icon: "📂", color: "indigo" },
    { label: "Health Score", value: "94/100", icon: "✨", color: "purple" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-teal-500/30">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <h1 className="text-4xl font-black text-slate-900 tracking-tight">
                Welcome back, <span className="text-teal-600">{user?.fullname?.split(' ')[0] || 'Traveler'}</span>
              </h1>
              <p className="text-slate-500 font-medium mt-1">Here is what's happening with your medical journey.</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-white border border-slate-200 px-6 py-3 rounded-2xl font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
                Edit Profile
              </button>
              <button className="bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                New Request
              </button>
            </div>
          </div>

          {/* Stats Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-4">{stat.icon}</div>
                <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-3xl font-black text-slate-900">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Appointments Section */}
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm p-10">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-black text-slate-900">Active Treatments</h2>
                  <button className="text-teal-600 font-bold text-sm hover:underline">View All</button>
                </div>
                
                <div className="space-y-4">
                  {[
                    { hospital: "Apollo International", specialty: "Cardiology Consultation", date: "Oct 12, 2024", status: "Confirmed", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=200" },
                    { hospital: "Fortis Escorts", specialty: "Pre-surgery Screening", date: "Oct 20, 2024", status: "Pending", img: "https://images.unsplash.com/photo-1586773860418-d319a39ec55e?auto=format&fit=crop&q=80&w=200" }
                  ].map((apt, i) => (
                    <div key={i} className="group flex flex-col sm:flex-row items-center gap-6 p-6 rounded-3xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
                      <img src={apt.img} alt="" className="w-24 h-24 rounded-2xl object-cover" />
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="font-black text-xl text-slate-900">{apt.hospital}</h3>
                        <p className="text-slate-500 font-bold text-sm">{apt.specialty}</p>
                        <p className="text-slate-400 text-xs font-medium mt-1">{apt.date}</p>
                      </div>
                      <div className="flex flex-col items-center sm:items-end gap-3">
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${apt.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                          {apt.status}
                        </span>
                        <button className="bg-white border border-slate-200 p-2 rounded-xl text-slate-400 hover:text-teal-600 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Financial Summary Chart Placeholder */}
              <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 opacity-10 rounded-full blur-[100px]"></div>
                <h2 className="text-2xl font-black mb-2">Financial Overview</h2>
                <p className="text-slate-400 text-sm font-medium mb-8">Savings generated through MediTravel platform</p>
                
                <div className="h-48 flex items-end gap-3 px-4">
                  {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                    <div key={i} className="flex-1 bg-white/10 hover:bg-teal-500 transition-all rounded-t-xl" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 px-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
              </div>
            </div>

            {/* Right Sidebar: Documents & Support */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm p-10">
                <h2 className="text-2xl font-black text-slate-900 mb-6">Documents</h2>
                <div className="space-y-4">
                  {[
                    { name: "Medical_Report_v1.pdf", size: "2.4 MB" },
                    { name: "Visa_Approval.pdf", size: "1.1 MB" },
                    { name: "Insurance_Policy.pdf", size: "4.8 MB" }
                  ].map((doc, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 cursor-pointer transition-all border border-slate-50">
                      <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 text-xl">📄</div>
                      <div className="flex-1">
                        <p className="font-bold text-slate-800 text-sm truncate w-40">{doc.name}</p>
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-tighter">{doc.size}</p>
                      </div>
                      <button className="text-slate-300 hover:text-slate-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                      </button>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-8 border-2 border-dashed border-slate-200 py-4 rounded-2xl text-slate-400 font-bold hover:border-teal-500 hover:text-teal-600 transition-all">
                  + Upload New Document
                </button>
              </div>

              <div className="bg-teal-600 rounded-[3rem] p-10 text-white">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-2xl font-black mb-2">Need Help?</h3>
                <p className="text-teal-100 text-sm font-medium mb-6">Your personal medical concierge is available 24/7 for any questions.</p>
                <button className="w-full bg-white text-teal-600 py-4 rounded-2xl font-black hover:bg-teal-50 transition-all">
                  Start Chat
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
