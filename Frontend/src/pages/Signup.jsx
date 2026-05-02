import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import heroBg from '../assets/hero-bg.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { fullname, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    console.log('Attempting signup with:', { ...formData, password: '***' });

    try {
      const response = await fetch('https://meditravel-assist.onrender.com/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate('/');
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      console.error('Signup error:', err);
      setError('Network error. Is the backend server running on port 5000?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col relative overflow-hidden font-sans">
      {/* Background Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] -mr-64 -mt-64 z-0"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-100/30 rounded-full blur-[100px] -ml-32 -mb-32 z-0"></div>

      <Navbar />
      
      <main className="flex-grow flex items-center justify-center pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-6xl w-full bg-white rounded-[4rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col lg:flex-row border border-white animate-fade-in transition-all">
          
          {/* Left Side: Immersive Visual Panel */}
          <div className="lg:w-[45%] relative min-h-[400px] lg:min-h-[750px] overflow-hidden">
             <img 
               src={heroBg} 
               alt="Hospital Reception" 
               className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
             />
             {/* Gradient Overlay for better text legibility */}
             <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-900/60 to-transparent"></div>
             
             <div className="absolute inset-0 p-16 flex flex-col justify-end text-white">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em]">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                    Verified Global Network
                  </div>
                  <h2 className="text-6xl font-black mb-6 leading-[1] tracking-tight">
                    Start your global <br /> 
                    <span className="text-teal-300">health journey</span> today.
                  </h2>
                  <p className="text-xl text-slate-200 leading-relaxed font-medium max-w-sm">
                    Join thousands of patients accessing world-class healthcare with dedicated coordination and travel support.
                  </p>
                  
                  <div className="pt-8 flex items-center gap-6">
                    <div className="flex -space-x-3">
                       {[1,2,3].map(i => (
                         <img key={i} className="w-10 h-10 rounded-full border-2 border-teal-800" src={`https://i.pravatar.cc/100?u=doc${i}`} alt="doc" />
                       ))}
                    </div>
                    <p className="text-xs font-bold text-teal-100 uppercase tracking-widest">Expert Vetted Teams</p>
                  </div>
                </div>

                {/* HIPAA Floating Badge */}
                <div className="mt-12 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] flex items-center gap-5 group hover:bg-white/10 transition-all cursor-default">
                  <div className="w-14 h-14 bg-teal-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-teal-500/30 group-hover:rotate-12 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-black text-lg">HIPAA Compliant</h4>
                    <p className="text-[10px] font-bold text-teal-200 uppercase tracking-widest">Medical Grade Encryption</p>
                  </div>
                </div>
             </div>
          </div>

          {/* Right Side: Elegant Form Panel */}
          <div className="lg:w-[55%] p-12 lg:p-24 flex flex-col justify-center">
            <div className="mb-14">
              <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">Create account</h1>
              <p className="text-slate-500 font-medium text-xl italic">Experience medical travel, simplified.</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 font-bold rounded-r-xl">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
               <button className="flex items-center justify-center gap-3 border border-slate-100 bg-slate-50/50 p-5 rounded-2xl font-black text-slate-700 hover:bg-white hover:border-blue-100 hover:shadow-lg transition-all active:scale-95 text-lg">
                  <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-6 h-6" alt="google" />
                  Google
               </button>
               <button className="flex items-center justify-center gap-3 border border-slate-100 bg-slate-50/50 p-5 rounded-2xl font-black text-slate-700 hover:bg-white hover:border-teal-100 hover:shadow-lg transition-all active:scale-95 text-lg">
                  <div className="w-6 h-6 bg-teal-600 rounded flex items-center justify-center text-white text-[10px] font-black">M</div>
                  HealthPass
               </button>
            </div>

            <div className="relative mb-10 text-center">
               <div className="absolute inset-0 flex items-center px-4">
                  <div className="w-full border-t border-slate-100"></div>
               </div>
               <span className="relative px-6 bg-white text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Institutional Verification</span>
            </div>

            <form className="space-y-10" onSubmit={onSubmit}>
               <div className="flex flex-col gap-3">
                  <label className="text-sm font-black text-teal-600 uppercase tracking-widest px-1">Full Name</label>
                  <div className="relative group">
                     <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-teal-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                     </span>
                     <input 
                       type="text" 
                       name="fullname"
                       value={fullname}
                       onChange={onChange}
                       required
                       placeholder="e.g. Johnathan Doe" 
                       className="w-full border border-slate-100 bg-slate-50 p-6 pl-16 rounded-[1.5rem] focus:outline-none focus:border-teal-500 focus:bg-white focus:shadow-2xl focus:shadow-teal-500/10 transition-all font-black text-slate-800 placeholder:text-slate-200 text-xl" 
                     />
                  </div>
               </div>

               <div className="flex flex-col gap-3">
                  <label className="text-sm font-black text-blue-600 uppercase tracking-widest px-1">Email Address</label>
                  <div className="relative group">
                     <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                     </span>
                     <input 
                       type="email" 
                       name="email"
                       value={email}
                       onChange={onChange}
                       required
                       placeholder="john@example.com" 
                       className="w-full border border-slate-100 bg-slate-50 p-6 pl-16 rounded-[1.5rem] focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-2xl focus:shadow-blue-500/10 transition-all font-black text-slate-800 placeholder:text-slate-200 text-xl" 
                     />
                  </div>
               </div>

               <div className="flex flex-col gap-3">
                  <label className="text-sm font-black text-slate-400 uppercase tracking-widest px-1">Choose Password</label>
                  <div className="relative group">
                     <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-slate-900 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                     </span>
                     <input 
                       type="password" 
                       name="password"
                       value={password}
                       onChange={onChange}
                       required
                       placeholder="••••••••••••" 
                       className="w-full border border-slate-100 bg-slate-50 p-6 pl-16 rounded-[1.5rem] focus:outline-none focus:border-slate-900 focus:bg-white focus:shadow-2xl focus:shadow-slate-900/10 transition-all font-black text-slate-800 placeholder:text-slate-200 text-xl" 
                     />
                  </div>
               </div>

               <div className="flex items-center gap-4 py-2">
                  <input type="checkbox" required className="w-6 h-6 accent-teal-600 rounded-xl cursor-pointer border-slate-200" id="terms" />
                  <label htmlFor="terms" className="text-sm text-slate-500 font-medium cursor-pointer leading-tight">
                     I agree to the <span className="text-teal-600 font-bold hover:underline">Terms of Service</span> and <span className="text-teal-600 font-bold hover:underline font-black outline-teal-500">Global Privacy Compliance</span> policies.
                  </label>
               </div>

               <button 
                 type="submit"
                 disabled={loading}
                 className="w-full bg-slate-900 hover:bg-blue-600 text-white p-7 rounded-[2rem] font-black text-2xl transition-all shadow-2xl shadow-slate-950/20 active:scale-95 group flex items-center justify-center gap-4 disabled:opacity-70 disabled:cursor-not-allowed"
               >
                  {loading ? 'Creating Account...' : 'Complete Registration'}
                  {!loading && <span className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:translate-x-2 transition-transform text-2xl">→</span>}
               </button>
            </form>

            <div className="mt-14 text-center flex flex-col items-center gap-8">
               <p className="text-slate-400 font-bold text-lg tracking-tight">
                  Already have an account? <Link to="/login" className="text-teal-600 hover:text-blue-600 font-black decoration-4 underline-offset-8 underline transition-all">Log in here</Link>
               </p>

               <div className="flex items-center justify-center gap-8 border-t border-slate-50 pt-8 w-full opacity-60">
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 whitespace-nowrap">AES-256 Encrypted</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 whitespace-nowrap">ISO 27001 Certified</span>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Signup;
