import React from 'react';
import type { ExcelConcept } from '../types';
import CheckIcon from './icons/CheckIcon';

interface TopicNavbarProps {
  concepts: ExcelConcept[];
  currentConceptIndex: number;
  userAnswers: Record<number, Record<number, { selection: string | null, isCorrect: boolean | null }>>;
  onSelectConcept: (index: number) => void;
}

const TopicNavbar: React.FC<TopicNavbarProps> = ({ concepts, currentConceptIndex, userAnswers, onSelectConcept }) => {
  return (
    <aside className="w-full lg:w-1/3 xl:w-1/4 bg-slate-50 p-4 rounded-lg border border-slate-200 self-start">
      <h3 className="text-lg font-bold text-slate-800 mb-4 px-2">Course Topics</h3>
      <nav className="max-h-[70vh] overflow-y-auto">
        <ul className="space-y-1">
          {concepts.map((concept, index) => {
            const conceptAnswers = userAnswers[index] || {};
            const correctAnswersCount = Object.values(conceptAnswers).filter(a => a.isCorrect).length;
            const isCompleted = concept.quiz.length > 0 && correctAnswersCount === concept.quiz.length;
            const isActive = index === currentConceptIndex;

            let buttonClass = "w-full text-left flex items-center gap-3 p-2 rounded-md transition-colors duration-150 text-sm";
            if (isActive) {
              buttonClass += " bg-indigo-100 text-indigo-700 font-semibold";
            } else {
              buttonClass += " text-slate-600 hover:bg-slate-200";
            }

            return (
              <li key={concept.id}>
                <button 
                  onClick={() => onSelectConcept(index)} 
                  className={buttonClass}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                    {isCompleted && <CheckIcon className="w-5 h-5 text-green-500" />}
                  </div>
                  <span className="flex-1">{concept.title}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default TopicNavbar;
