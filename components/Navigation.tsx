import React from 'react';

interface NavigationProps {
  onNext: () => void;
  onPrev: () => void;
  isNextDisabled: boolean;
  isPrevDisabled: boolean;
  isLastStep: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ onNext, onPrev, isNextDisabled, isPrevDisabled, isLastStep }) => {
  return (
    <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200">
      <button
        onClick={onPrev}
        disabled={isPrevDisabled}
        className="bg-slate-200 text-slate-800 font-bold py-2 px-6 rounded-lg hover:bg-slate-300 focus:outline-none focus:ring-4 focus:ring-slate-300 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed transition-all duration-300"
      >
        Previous
      </button>
      <button
        onClick={onNext}
        disabled={isNextDisabled}
        className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 disabled:bg-slate-400 disabled:cursor-not-allowed transition-all duration-300"
      >
        {isLastStep && !isNextDisabled ? 'Finish Course' : 'Next'}
      </button>
    </div>
  );
};

export default Navigation;