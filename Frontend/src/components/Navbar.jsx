import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="bg-white/70 backdrop-blur-xl border border-white/20 shadow-2xl shadow-blue-500/5 rounded-3xl px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 bg-teal-500 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
              <div className="absolute inset-0 w-10 h-10 bg-teal-600 rounded-2xl -rotate-6 group-hover:-rotate-0 transition-transform duration-300 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                M
              </div>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-800">
              Medi<span className="text-teal-600">Travel</span> <span className="font-light text-slate-400">Assist</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {['Specialists', 'Cost Explorer', 'Emergency', 'Dashboard'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="px-4 py-2 text-slate-600 hover:text-teal-600 hover:bg-teal-50/50 rounded-xl font-medium transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-6">
            <button className="hidden sm:block text-slate-600 font-semibold hover:text-teal-600 transition-colors">
              Login
            </button>
            <Link to="/signup">
              <button className="bg-slate-900 text-white px-6 py-2.5 rounded-2xl font-bold hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-slate-200">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
