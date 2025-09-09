import React, { useState, useEffect } from 'react';
import type { QuizData } from '../types';
import CheckIcon from './icons/CheckIcon';
import XIcon from './icons/XIcon';
import HappyPenguin from './icons/HappyPenguin';
import SadPenguin from './icons/SadPenguin';

interface QuizProps {
  quizzes: QuizData[];
  onAnswerSubmit: (questionIndex: number, selection: string) => void;
  conceptUserAnswers: Record<number, { selection: string | null, isCorrect: boolean | null }>;
  onRetry: (questionIndex: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ quizzes, onAnswerSubmit, conceptUserAnswers, onRetry }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Reset local state if the concept changes (detected by quizzes prop changing)
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
  }, [quizzes]);

  if (!quizzes || quizzes.length === 0) {
    return (
      <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 flex items-center justify-center">
        <p className="text-slate-500">No quiz available for this topic.</p>
      </div>
    );
  }

  const currentQuiz = quizzes[currentQuestionIndex];
  const userAnswerState = conceptUserAnswers[currentQuestionIndex] || { selection: null, isCorrect: null };
  const { selection: submittedSelection, isCorrect } = userAnswerState;
  const isSubmitted = submittedSelection !== null;
  const isQuizCompleted = Object.keys(conceptUserAnswers).length === quizzes.length && Object.values(conceptUserAnswers).every(a => a.isCorrect);


  const handleOptionClick = (option: string) => {
    if (isSubmitted) return;
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      onAnswerSubmit(currentQuestionIndex, selectedOption);
    }
  };

  const handleRetry = () => {
    setSelectedOption(null);
    onRetry(currentQuestionIndex);
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizzes.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
    }
  }

  const getButtonClass = (option: string) => {
    const baseClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 text-slate-700 font-medium";
    
    if (isSubmitted) {
      if (option === currentQuiz.correctAnswer) {
        return `${baseClass} bg-green-100 border-green-500 text-green-800`;
      }
      if (option === submittedSelection && !isCorrect) {
        return `${baseClass} bg-red-100 border-red-500 text-red-800`;
      }
      return `${baseClass} bg-slate-100 border-slate-200 cursor-not-allowed`;
    }

    if (selectedOption === option) {
      return `${baseClass} bg-indigo-100 border-indigo-500 ring-2 ring-indigo-300`;
    }
    
    return `${baseClass} bg-white border-slate-300 hover:bg-indigo-50 hover:border-indigo-400`;
  };

  return (
    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
      {/* Header */}
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-slate-800">Test Your Knowledge</h3>
          <span className="text-sm font-semibold text-slate-500 bg-slate-200 px-2 py-1 rounded-md">
            {currentQuestionIndex + 1} / {quizzes.length}
          </span>
        </div>
      </div>
      
      {/* Scrollable Content */}
      <div className="overflow-y-auto my-4 pr-2 max-h-[22rem]">
        <p className="text-slate-600">{currentQuiz.question}</p>
        <div className="mt-6 space-y-3">
          {currentQuiz.options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              className={getButtonClass(option)}
              disabled={isSubmitted}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-6 border-t border-slate-200">
        {isSubmitted ? (
          <div className="text-center">
            {isCorrect ? <HappyPenguin /> : <SadPenguin />}
            <div className={`p-4 rounded-lg mt-4 flex items-start ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {isCorrect ? <CheckIcon className="w-6 h-6 mr-3 flex-shrink-0 mt-1" /> : <XIcon className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />}
              <div>
                <h4 className="font-bold">{isCorrect ? 'Correct!' : 'Not Quite!'}</h4>
                <p className="mt-1 text-sm">{currentQuiz.explanation}</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!selectedOption}
            className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 disabled:bg-slate-400 disabled:cursor-not-allowed transition-all duration-300"
          >
            Check Answer
          </button>
        )}
        
        <div className="mt-4 space-y-2">
            {isSubmitted && isCorrect ? (
              <>
                {/* CORRECT ANSWER BUTTONS */}
                {!isQuizCompleted && currentQuestionIndex < quizzes.length - 1 && (
                  <button
                    onClick={handleNextQuestion}
                    className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300"
                  >
                    Next Question
                  </button>
                )}
                <button
                  onClick={handleRetry}
                  className="w-full bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-lg hover:bg-slate-300 focus:outline-none focus:ring-4 focus:ring-slate-300 transition-all duration-300"
                >
                  Retry Question
                </button>
              </>
            ) : isSubmitted && !isCorrect ? (
              <>
                {/* INCORRECT ANSWER BUTTONS */}
                <button
                  onClick={handleRetry}
                  className="w-full bg-yellow-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all duration-300"
                >
                  Try Again
                </button>
              </>
            ) : null}
        </div>

        {isQuizCompleted && (
           <div className="text-center mt-4 p-4 bg-green-100 text-green-800 font-semibold rounded-lg">
             You've mastered this topic!
           </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;