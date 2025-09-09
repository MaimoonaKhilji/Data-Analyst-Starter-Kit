import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progressPercentage = total > 0 ? (current / total) * 100 : 0;

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm font-medium text-slate-700">
          {current} of {total} Concepts Mastered
        </p>
        <p className="text-sm font-bold text-indigo-600">{Math.round(progressPercentage)}% Complete</p>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2.5">
        <div
          className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;