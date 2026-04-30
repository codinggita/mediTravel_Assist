import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const specialists = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    department: "Cardiology",
    experience: "15+ Years",
    rating: 4.9,
    reviews: 124,
    image: "https://i.pravatar.cc/150?u=dr1",
    country: "USA",
    state: "Minnesota",
    location: "Mayo Clinic, Rochester",
    languages: ["English", "Spanish"],
    budget: 1500
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    department: "Oncology",
    experience: "12+ Years",
    rating: 4.8,
    reviews: 89,
    image: "https://i.pravatar.cc/150?u=dr2",
    country: "Thailand",
    state: "Bangkok",
    location: "Bumrungrad International",
    languages: ["English", "Mandarin"],
    budget: 800
  },
  {
    id: 3,
    name: "Dr. Elena Rodriguez",
    department: "Orthopedics",
    experience: "20+ Years",
    rating: 5.0,
    reviews: 210,
    image: "https://i.pravatar.cc/150?u=dr3",
    country: "Brazil",
    state: "São Paulo",
    location: "Hospital Israelita Albert Einstein",
    languages: ["English", "Portuguese", "Spanish"],
    budget: 1200
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    department: "Neurology",
    experience: "18+ Years",
    rating: 4.7,
    reviews: 95,
    image: "https://i.pravatar.cc/150?u=dr4",
    country: "Germany",
    state: "Berlin",
    location: "Charité - Universitätsmedizin",
    languages: ["English", "German"],
    budget: 1800
  },
  {
    id: 5,
    name: "Dr. Priya Sharma",
    department: "Cardiology",
    experience: "10+ Years",
    rating: 4.9,
    reviews: 156,
    image: "https://i.pravatar.cc/150?u=dr5",
    country: "India",
    state: "Delhi",
    location: "Apollo Hospitals",
    languages: ["English", "Hindi", "Punjabi"],
    budget: 600
  },
  {
    id: 6,
    name: "Dr. David Smith",
    department: "Oncology",
    experience: "25+ Years",
    rating: 4.6,
    reviews: 312,
    image: "https://i.pravatar.cc/150?u=dr6",
    country: "UK",
    state: "London",
    location: "The Royal Marsden",
    languages: ["English", "French"],
    budget: 2000
  },
  {
    id: 7,
    name: "Dr. Amara Okafor",
    department: "Dermatology",
    experience: "8+ Years",
    rating: 4.7,
    reviews: 67,
    image: "https://i.pravatar.cc/150?u=dr7",
    country: "Nigeria",
    state: "Lagos",
    location: "Lagoon Hospital",
    languages: ["English", "Igbo"],
    budget: 700
  },
  {
    id: 8,
    name: "Dr. Yuki Tanaka",
    department: "Cardiology",
    experience: "14+ Years",
    rating: 4.9,
    reviews: 142,
    image: "https://i.pravatar.cc/150?u=dr8",
    country: "Japan",
    state: "Tokyo",
    location: "St. Luke's International",
    languages: ["English", "Japanese"],
    budget: 1600
  },
  {
    id: 9,
    name: "Dr. Hans Müller",
    department: "Orthopedics",
    experience: "22+ Years",
    rating: 4.8,
    reviews: 189,
    image: "https://i.pravatar.cc/150?u=dr9",
    country: "Germany",
    state: "Bavaria",
    location: "Helios Hospital",
    languages: ["English", "German"],
    budget: 1400
  },
  {
    id: 10,
    name: "Dr. Aisha Al-Sayed",
    department: "Oncology",
    experience: "16+ Years",
    rating: 5.0,
    reviews: 110,
    image: "https://i.pravatar.cc/150?u=dr10",
    country: "UAE",
    state: "Dubai",
    location: "Cleveland Clinic",
    languages: ["English", "Arabic"],
    budget: 1900
  },
  {
    id: 11,
    name: "Dr. Rajesh Gupta",
    department: "Dermatology",
    experience: "11+ Years",
    rating: 4.5,
    reviews: 98,
    image: "https://i.pravatar.cc/150?u=dr11",
    country: "India",
    state: "Maharashtra",
    location: "Fortis Memorial",
    languages: ["English", "Hindi"],
    budget: 550
  },
  {
    id: 12,
    name: "Dr. Sofia Rossi",
    department: "Neurology",
    experience: "13+ Years",
    rating: 4.8,
    reviews: 76,
    image: "https://i.pravatar.cc/150?u=dr12",
    country: "Italy",
    state: "Rome",
    location: "San Raffaele Hospital",
    languages: ["English", "Italian"],
    budget: 1300
  }
];

const departments = ["All", "Cardiology", "Oncology", "Orthopedics", "Neurology", "Dermatology"];
const regions = ["All Regions", "USA", "Thailand", "India", "Germany", "Brazil", "UK", "Japan", "UAE", "Italy", "Nigeria"];
const languages = ["All", "English", "Hindi", "Spanish", "Mandarin", "German", "French", "Portuguese", "Japanese", "Arabic", "Italian", "Igbo"];

const countryStates = {
  "USA": ["Minnesota", "California", "New York", "Texas"],
  "India": ["Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "Haryana"],
  "Germany": ["Berlin", "Bavaria", "Hamburg"],
  "Thailand": ["Bangkok", "Phuket", "Chiang Mai"],
  "Brazil": ["São Paulo", "Rio de Janeiro"],
  "UK": ["London", "Manchester", "Edinburgh"],
  "Japan": ["Tokyo", "Osaka", "Kyoto"],
  "UAE": ["Dubai", "Abu Dhabi"],
  "Italy": ["Rome", "Milan"],
  "Nigeria": ["Lagos", "Abuja"]
};

const Specialists = () => {
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState("All Regions");
  const [selectedState, setSelectedState] = useState("All States");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [maxBudget, setMaxBudget] = useState(2000);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSpecialists = specialists.filter(s => {
    const matchesDept = selectedDept === "All" || s.department === selectedDept;
    const matchesCountry = selectedCountry === "All Regions" || s.country === selectedCountry;
    const matchesState = selectedState === "All States" || s.state === selectedState;
    const matchesLanguage = selectedLanguage === "All" || s.languages.includes(selectedLanguage);
    const matchesBudget = s.budget <= maxBudget;
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         s.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         s.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         s.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         s.state.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesDept && matchesCountry && matchesState && matchesLanguage && matchesBudget && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Header Section */}
        <section className="container mx-auto px-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600 font-bold text-white px-4 py-2 rounded-xl text-[10px] uppercase tracking-[0.2em] mb-6 shadow-lg shadow-blue-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Verified Experts
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              World-Class <span className="text-blue-600">Specialists</span>
            </h1>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Connect with leading medical professionals globally. Every specialist on our platform is JCI-accredited and vetted for excellence.
            </p>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="container mx-auto px-6 mb-12">
          <div className="bg-white p-8 rounded-[3rem] shadow-2xl shadow-blue-500/5 border border-slate-100 space-y-8">
            {/* Search Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </div>
              <input 
                type="text" 
                placeholder="Search specialists, procedures, or clinics..." 
                className="w-full bg-slate-50 border-none rounded-[2rem] py-5 pl-16 pr-8 font-bold text-slate-800 focus:ring-4 focus:ring-blue-50 transition-all outline-none text-lg placeholder:text-slate-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Department Filter */}
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Specialty
                </p>
                <div className="flex flex-wrap gap-2">
                  {departments.map(dept => (
                    <button
                      key={dept}
                      onClick={() => setSelectedDept(dept)}
                      className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all ${
                        selectedDept === dept 
                        ? "bg-slate-900 text-white shadow-lg scale-[1.02]" 
                        : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      {dept}
                    </button>
                  ))}
                </div>
              </div>

              {/* Country Filter */}
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                  Select Country
                </p>
                <div className="flex flex-wrap gap-2">
                  {regions.map(region => (
                    <button
                      key={region}
                      onClick={() => {
                        setSelectedCountry(region);
                        setSelectedState("All States");
                      }}
                      className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all ${
                        selectedCountry === region 
                        ? "bg-teal-600 text-white shadow-lg scale-[1.02]" 
                        : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      {region}
                    </button>
                  ))}
                </div>
              </div>

              {/* State Filter (Conditional) */}
              {selectedCountry !== "All Regions" && countryStates[selectedCountry] && (
                <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                    Select State/Region
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedState("All States")}
                      className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all ${
                        selectedState === "All States" 
                        ? "bg-cyan-600 text-white shadow-lg scale-[1.02]" 
                        : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      All States
                    </button>
                    {countryStates[selectedCountry].map(state => (
                      <button
                        key={state}
                        onClick={() => setSelectedState(state)}
                        className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all ${
                          selectedState === state 
                          ? "bg-cyan-600 text-white shadow-lg scale-[1.02]" 
                          : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        {state}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Language Filter */}
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  Language
                </p>
                <div className="flex flex-wrap gap-2">
                  {languages.map(lang => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all ${
                        selectedLanguage === lang 
                        ? "bg-indigo-600 text-white shadow-lg scale-[1.02]" 
                        : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Filter */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    Consultation Budget
                  </p>
                  <span className="text-sm font-black text-slate-900 bg-amber-50 px-3 py-1 rounded-lg border border-amber-100">
                    Max: ₹{maxBudget}
                  </span>
                </div>
                <div className="px-6 py-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                  <input 
                    type="range" 
                    min="500" 
                    max="2000" 
                    step="100"
                    value={maxBudget}
                    onChange={(e) => setMaxBudget(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                  />
                  <div className="flex justify-between mt-4 text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">
                    <span>₹500</span>
                    <span>₹1250</span>
                    <span>₹2000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialists Grid */}
        <section className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpecialists.map(specialist => {
              const isPreferred = (selectedCountry !== "All Regions" && specialist.country === selectedCountry) || 
                                (selectedState !== "All States" && specialist.state === selectedState);
              
              return (
                <div key={specialist.id} className={`group bg-white rounded-[3rem] p-8 border ${isPreferred ? 'border-teal-200 ring-4 ring-teal-50' : 'border-slate-100'} shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden`}>
                  {isPreferred && (
                    <div className="absolute top-0 right-0 bg-teal-500 text-white px-6 py-2 rounded-bl-3xl font-black text-[10px] uppercase tracking-widest animate-pulse">
                      Regional Preference
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-8">
                    <div className="relative">
                      <div className={`absolute inset-0 ${isPreferred ? 'bg-teal-100' : 'bg-blue-100'} rounded-[2rem] rotate-6 group-hover:rotate-12 transition-transform duration-300`}></div>
                      <img 
                        src={specialist.image} 
                        alt={specialist.name} 
                        className="relative w-24 h-24 rounded-[2rem] object-cover shadow-lg border-4 border-white"
                      />
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-50 text-slate-900 px-4 py-2 rounded-2xl font-black text-sm border border-slate-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" className="stroke-none"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                      {specialist.rating}
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">{specialist.name}</h3>
                      {isPreferred && (
                        <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                      )}
                    </div>
                    <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-6">{specialist.department}</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-slate-600 font-bold text-sm bg-slate-50 p-3 rounded-2xl">
                        <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        </div>
                        {specialist.experience} Experience
                      </div>
                      <div className="flex items-center gap-3 text-slate-600 font-bold text-sm bg-slate-50 p-3 rounded-2xl">
                        <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                        </div>
                        {specialist.location}, {specialist.state}, {specialist.country}
                      </div>
                      <div className="flex items-center gap-3 text-slate-600 font-bold text-sm bg-slate-50 p-3 rounded-2xl">
                        <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><path d="m5 8 6 6 6-6"/><path d="m5 12 6 6 6-6"/></svg>
                        </div>
                        {specialist.languages.join(", ")}
                      </div>
                      <div className="flex items-center gap-3 text-slate-600 font-bold text-sm bg-slate-50 p-3 rounded-2xl">
                        <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-sm text-amber-600 font-black">₹</div>
                        Consultation: ₹{specialist.budget}
                      </div>
                    </div>
                  </div>

                  <button className={`w-full ${isPreferred ? 'bg-teal-600 hover:bg-teal-700 shadow-teal-200' : 'bg-slate-900 hover:bg-blue-600 shadow-slate-200'} text-white py-5 rounded-2xl font-black transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95`}>
                    Book Consultation
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                  </button>
                </div>
              );
            })}
          </div>

          {filteredSpecialists.length === 0 && (
            <div className="text-center py-32 bg-white rounded-[4rem] border border-dashed border-slate-200">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-slate-50 rounded-full text-slate-300 mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-3">No matching specialists</h3>
              <p className="text-slate-500 font-medium max-w-md mx-auto">We couldn't find any specialists matching your current search or filters. Try expanding your criteria.</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Specialists;
