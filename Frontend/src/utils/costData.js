export const costData = [
  {
    treatment: "Knee Surgery",
    city: "Delhi",
    minCost: 55000,
    maxCost: 75000,
    tag: "Premium",
    breakdown: {
      doctor: 15000,
      hospital: 45000,
      medicine: 10000,
      tests: 5000
    },
    timeline: [
      { day: 1, label: "Consultation", cost: 2000 },
      { day: 2, label: "Diagnostic Tests", cost: 5000 },
      { day: 3, label: "Knee Surgery (OT)", cost: 55000 },
      { day: 5, label: "Physio & Discharge", cost: 8000 }
    ],
    travel: 6000,
    stayPerDay: 3000,
    foodPerDay: 1000,
    hospitals: ["Apollo Hospital", "Max Super Speciality", "Fortis Escorts"]
  },
  {
    treatment: "Knee Surgery",
    city: "Chennai",
    minCost: 40000,
    maxCost: 60000,
    tag: "Best Value",
    breakdown: {
      doctor: 12000,
      hospital: 35000,
      medicine: 8000,
      tests: 5000
    },
    timeline: [
      { day: 1, label: "Consultation", cost: 1500 },
      { day: 2, label: "Tests", cost: 4000 },
      { day: 3, label: "Surgery", cost: 42000 },
      { day: 5, label: "Recovery & Discharge", cost: 7500 }
    ],
    travel: 4500,
    stayPerDay: 2000,
    foodPerDay: 800,
    hospitals: ["Apollo Greams Road", "Fortis Malar", "MIOT International"]
  },
  {
    treatment: "Knee Surgery",
    city: "Mumbai",
    minCost: 65000,
    maxCost: 90000,
    tag: "Budget Friendly",
    breakdown: {
      doctor: 20000,
      hospital: 55000,
      medicine: 12000,
      tests: 8000
    },
    timeline: [
      { day: 1, label: "Consultation", cost: 2500 },
      { day: 2, label: "Advanced Tests", cost: 7500 },
      { day: 3, label: "Surgery", cost: 65000 },
      { day: 5, label: "Discharge", cost: 15000 }
    ],
    travel: 7000,
    stayPerDay: 4000,
    foodPerDay: 1200,
    hospitals: ["Nanavati Hospital", "Lilavati Hospital", "Kokilaben Dhirubhai Ambani"]
  },
  {
    treatment: "Heart Bypass",
    city: "Delhi",
    minCost: 180000,
    maxCost: 280000,
    tag: "Premium",
    breakdown: {
      doctor: 60000,
      hospital: 160000,
      medicine: 40000,
      tests: 20000
    },
    timeline: [
      { day: 1, label: "Triage & Consult", cost: 5000 },
      { day: 2, label: "Cardiac Imaging", cost: 15000 },
      { day: 4, label: "CABG Surgery", cost: 210000 },
      { day: 10, label: "Post-op Care & Discharge", cost: 50000 }
    ],
    travel: 6000,
    stayPerDay: 3500,
    foodPerDay: 1200,
    hospitals: ["Medanta - The Medicity", "Apollo Delhi", "Fortis Escorts Heart Institute"]
  },
  {
    treatment: "Appendix Surgery",
    city: "Mumbai",
    minCost: 50000,
    maxCost: 80000,
    tag: "Budget Friendly",
    breakdown: {
      doctor: 15000,
      hospital: 45000,
      medicine: 12000,
      tests: 8000
    },
    timeline: [
      { day: 1, label: "Emergency Consult", cost: 3000 },
      { day: 1, label: "Scans", cost: 5000 },
      { day: 2, label: "Appendectomy", cost: 55000 },
      { day: 3, label: "Discharge", cost: 12000 }
    ],
    travel: 7000,
    stayPerDay: 4000,
    foodPerDay: 1200,
    hospitals: ["H. N. Reliance", "SevenHills Hospital", "Jaslok Hospital"]
  }
];

export const treatments = [...new Set(costData.map(d => d.treatment))];
