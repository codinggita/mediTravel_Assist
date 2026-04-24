import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-32 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-teal-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-teal-500/20">
                M
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-800">
                Medi<span className="text-teal-600">Travel</span>
              </span>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed">
              Transforming global healthcare access with premium facilities, expert coordination, and transparent pricing.
            </p>
            <div className="flex items-center gap-4">
               {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-teal-600 hover:border-teal-200 hover:shadow-lg transition-all cursor-pointer">
                  <span className="text-xs font-black">S{i}</span>
                </div>
               ))}
            </div>
          </div>

          {/* Links */}
          {['Company', 'Support', 'Legal'].map((title, idx) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">{title}</h4>
              <ul className="space-y-4">
                {idx === 0 && ['About Us', 'Contact', 'Specialists', 'Cost Explorer'].map(link => (
                  <li key={link}><a href="#" className="text-slate-600 font-bold hover:text-teal-600 transition-colors">{link}</a></li>
                ))}
                {idx === 1 && ['Help Center', 'FAQs', 'Partner with Us', 'Emergency'].map(link => (
                  <li key={link}><a href="#" className="text-slate-600 font-bold hover:text-teal-600 transition-colors">{link}</a></li>
                ))}
                {idx === 2 && ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Global Compliance'].map(link => (
                  <li key={link}><a href="#" className="text-slate-600 font-bold hover:text-teal-600 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8 text-sm font-bold text-slate-400 uppercase tracking-widest">
            <span>© 2024 MediTravel Assist</span>
            <span>Professional Care Worldwide</span>
          </div>
          <div className="flex items-center gap-8 text-sm font-bold text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-slate-600 transition-colors tracking-widest">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 transition-colors tracking-widest">Terms of Service</a>
            <a href="#" className="hover:text-slate-600 transition-colors tracking-widest">Global Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
