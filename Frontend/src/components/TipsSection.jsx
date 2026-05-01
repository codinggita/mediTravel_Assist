import React from 'react';

const TipsSection = ({ selectedTreatment, bestDealCity, currentCity, savingAmount }) => {
  if (!bestDealCity || savingAmount <= 0) return null;

  return (
    <div className="bg-teal-50 border border-teal-100 rounded-3xl p-6 shadow-sm animate-fade-in">
      <div className="flex gap-4">
        <div className="text-3xl animate-bounce-slow">💡</div>
        <div>
          <h3 className="text-teal-900 font-bold text-lg mb-1">Smart Saving Tip</h3>
          <p className="text-teal-800 leading-relaxed">
            You can save <span className="font-black text-teal-600">₹{savingAmount.toLocaleString()}</span> by choosing 
            <span className="font-bold"> {bestDealCity} </span> instead of {currentCity} for your {selectedTreatment}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TipsSection;
