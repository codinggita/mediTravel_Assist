export const costData = [
  {
    treatment: "Knee Surgery",
    city: "Delhi",
    hospitalType: "Private",
    minCost: 50000,
    maxCost: 70000,
    breakdown: {
      doctor: 15000,
      hospital: 40000,
      medicine: 10000,
      tests: 5000
    }
  },
  {
    treatment: "Knee Surgery",
    city: "Delhi",
    hospitalType: "Government",
    minCost: 15000,
    maxCost: 30000,
    breakdown: {
      doctor: 2000,
      hospital: 10000,
      medicine: 5000,
      tests: 3000
    }
  },
  {
    treatment: "Knee Surgery",
    city: "Delhi",
    hospitalType: "Premium",
    minCost: 120000,
    maxCost: 180000,
    breakdown: {
      doctor: 40000,
      hospital: 100000,
      medicine: 25000,
      tests: 15000
    }
  },
  {
    treatment: "Knee Surgery",
    city: "Mumbai",
    hospitalType: "Private",
    minCost: 65000,
    maxCost: 95000,
    breakdown: {
      doctor: 20000,
      hospital: 55000,
      medicine: 12000,
      tests: 8000
    }
  },
  {
    treatment: "Knee Surgery",
    city: "Mumbai",
    hospitalType: "Government",
    minCost: 20000,
    maxCost: 40000,
    breakdown: {
      doctor: 3000,
      hospital: 15000,
      medicine: 7000,
      tests: 5000
    }
  },
  {
    treatment: "Knee Surgery",
    city: "Mumbai",
    hospitalType: "Premium",
    minCost: 150000,
    maxCost: 250000,
    breakdown: {
      doctor: 60000,
      hospital: 140000,
      medicine: 30000,
      tests: 20000
    }
  },
  {
    treatment: "Knee Surgery",
    city: "Chennai",
    hospitalType: "Private",
    minCost: 40000,
    maxCost: 65000,
    breakdown: {
      doctor: 12000,
      hospital: 35000,
      medicine: 8000,
      tests: 5000
    }
  },
  {
    treatment: "Knee Surgery",
    city: "Chennai",
    hospitalType: "Government",
    minCost: 12000,
    maxCost: 25000,
    breakdown: {
      doctor: 1500,
      hospital: 8000,
      medicine: 4000,
      tests: 2500
    }
  },
  {
    treatment: "Knee Surgery",
    city: "Chennai",
    hospitalType: "Premium",
    minCost: 100000,
    maxCost: 150000,
    breakdown: {
      doctor: 35000,
      hospital: 85000,
      medicine: 20000,
      tests: 10000
    }
  },
  {
    treatment: "Heart Bypass",
    city: "Delhi",
    hospitalType: "Private",
    minCost: 150000,
    maxCost: 250000,
    breakdown: {
      doctor: 50000,
      hospital: 150000,
      medicine: 30000,
      tests: 20000
    }
  },
  {
    treatment: "Heart Bypass",
    city: "Delhi",
    hospitalType: "Government",
    minCost: 50000,
    maxCost: 100000,
    breakdown: {
      doctor: 5000,
      hospital: 60000,
      medicine: 20000,
      tests: 15000
    }
  },
  {
    treatment: "Heart Bypass",
    city: "Delhi",
    hospitalType: "Premium",
    minCost: 350000,
    maxCost: 550000,
    breakdown: {
      doctor: 100000,
      hospital: 350000,
      medicine: 60000,
      tests: 40000
    }
  },
  {
    treatment: "Dental Implant",
    city: "Chennai",
    hospitalType: "Private",
    minCost: 25000,
    maxCost: 45000,
    breakdown: {
      doctor: 10000,
      hospital: 10000,
      medicine: 3000,
      tests: 2000
    }
  },
  {
    treatment: "Appendix Surgery",
    city: "Mumbai",
    hospitalType: "Private",
    minCost: 45000,
    maxCost: 75000,
    breakdown: {
      doctor: 15000,
      hospital: 40000,
      medicine: 12000,
      tests: 8000
    }
  }
];

export const treatments = [...new Set(costData.map(d => d.treatment))];
export const hospitalTypes = ["Government", "Private", "Premium"];
