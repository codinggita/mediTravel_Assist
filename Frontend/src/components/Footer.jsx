import { Link } from 'react-router-dom';

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
          <div>
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-600 font-bold hover:text-teal-600 transition-colors">About Us</Link></li>
              <li><Link to="/specialists" className="text-slate-600 font-bold hover:text-teal-600 transition-colors">Specialists</Link></li>
              <li><Link to="/cost-explorer?treatment=Cardiology&location=Delhi" className="text-slate-600 font-bold hover:text-teal-600 transition-colors">Cost Explorer</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-600 font-bold hover:text-teal-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-600 font-bold hover:text-teal-600 transition-colors">FAQs</a></li>
              <li><a href="#" className="text-slate-600 font-bold hover:text-teal-600 transition-colors">Emergency</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-600 font-bold hover:text-teal-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-600 font-bold hover:text-teal-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
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
