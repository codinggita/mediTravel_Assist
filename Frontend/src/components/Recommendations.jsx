import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "James Wilson",
    role: "Heart Surgery Patient",
    content: "The coordination was seamless. I felt safer in Singapore than I would have at my local clinic. Truly a life-saving service.",
    image: "https://i.pravatar.cc/150?u=james",
    rating: 5
  },
  {
    id: 2,
    name: "Elena Rodriguez",
    role: "Cosmetic Surgery",
    content: "MediTravel Assist took care of every detail. The clinic was world-class and the recovery resort was stunning.",
    image: "https://i.pravatar.cc/150?u=elena",
    rating: 5
  },
  {
    id: 3,
    name: "Dr. Kenji Tanaka",
    role: "Specialist Physician",
    content: "As a doctor, I recommend this platform to my patients seeking global options. Their verification process is second to none.",
    image: "https://i.pravatar.cc/150?u=kenji",
    rating: 5
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    role: "Dental Implants",
    content: "Saved 60% on my dental work and had an amazing vacation in Thailand. Best decision ever!",
    image: "https://i.pravatar.cc/150?u=sarah",
    rating: 5
  },
  {
    id: 5,
    name: "Michael Chen",
    role: "Orthopedic Patient",
    content: "The 24/7 on-ground support was incredible. I never felt alone or confused during my stay abroad.",
    image: "https://i.pravatar.cc/150?u=michael",
    rating: 4
  },
  {
    id: 6,
    name: "Sophie Laurent",
    role: "Fertility Treatment",
    content: "The most empathetic team I've ever worked with. They made a stressful journey very smooth and hopeful.",
    image: "https://i.pravatar.cc/150?u=sophie",
    rating: 5
  },
  {
    id: 7,
    name: "Robert Moore",
    role: "Eye Surgery",
    content: "Crystal clear vision and crystal clear pricing. No hidden fees at all.",
    image: "https://i.pravatar.cc/150?u=robert",
    rating: 5
  },
  {
    id: 8,
    name: "Amina Al-Farsi",
    role: "General Health Checkup",
    content: "Very professional and efficient. The VIP treatment at the hospital was beyond my expectations.",
    image: "https://i.pravatar.cc/150?u=amina",
    rating: 5
  },
  {
    id: 9,
    name: "David Smith",
    role: "Spinal Care",
    content: "From the first call to the final check-up back home, they were with me. Highly recommended.",
    image: "https://i.pravatar.cc/150?u=david",
    rating: 5
  }
];

const Recommendations = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCount = showAll ? testimonials.length : 6;

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
             What Our <span className="text-blue-600">Global Community</span> Says
          </h2>
          <p className="text-lg text-slate-500 font-medium italic">
            "98% of our patients recommend MediTravel Assist to their family and friends."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
          {testimonials.slice(0, visibleCount).map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-50 hover:scale-[1.02] transition-all flex flex-col group"
            >
              <div className="flex items-center gap-1 text-emerald-500 mb-6 group-hover:animate-pulse">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-grow">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-2xl object-cover shadow-lg"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-xs font-bold text-teal-600 uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-3 bg-slate-900 hover:bg-blue-600 text-white px-10 py-4 rounded-3xl font-black transition-all shadow-xl active:scale-95"
          >
            {showAll ? 'Show Less' : 'See More Recommendations'}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`transition-transform duration-500 ${showAll ? 'rotate-180' : 'group-hover:translate-y-1'}`}
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
