import React, { useState, useCallback, useEffect } from 'react';
import { EXCEL_CONCEPTS } from './constants';
import { POWER_BI_CONCEPTS } from './powerbi-constants';
import { PYTHON_CONCEPTS } from './python-constants';
import { SQL_CONCEPTS } from './sql-constants';
import type { ExcelConcept } from './types';
import ProgressBar from './components/ProgressBar';
import ConceptCard from './components/ConceptCard';
import Quiz from './components/Quiz';
import Navigation from './components/Navigation';
import Glossary from './components/Glossary';
import TopicNavbar from './components/TopicNavbar';

type CourseKey = 'excel' | 'powerbi' | 'python' | 'sql';

const COURSES: Record<CourseKey, ExcelConcept[]> = {
  excel: EXCEL_CONCEPTS,
  powerbi: POWER_BI_CONCEPTS,
  python: PYTHON_CONCEPTS,
  sql: SQL_CONCEPTS,
};

const COURSE_TITLES: Record<CourseKey, string> = {
    excel: 'Excel for Data Analysts',
    powerbi: 'Power BI for Data Analysts',
    python: 'Python for Data Analysts',
    sql: 'SQL for Data Analysts',
};

const COURSE_SUBTITLES: Record<CourseKey, string> = {
    excel: 'Master the essential spreadsheet skills to supercharge your data analysis career.',
    powerbi: 'Learn to build stunning interactive dashboards and reports from scratch.',
    python: 'Harness the power of Pandas and Matplotlib for data manipulation and visualization.',
    sql: 'Query relational databases to extract and analyze data like a pro.',
};

type UserAnswers = Record<number, Record<number, { selection: string | null; isCorrect: boolean | null; }>>;

const loadInitialState = (course: CourseKey) => {
  const LOCAL_STORAGE_KEY = `${course}ForAnalystsProgress`;
  try {
    const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      const conceptsForCourse = COURSES[course];
      // Validate that the saved index is within the bounds of the course's concepts
      if (typeof parsedState.currentConceptIndex === 'number' && 
          typeof parsedState.userAnswers === 'object' &&
          parsedState.currentConceptIndex < conceptsForCourse.length) {
        return parsedState;
      }
    }
  } catch (error) {
    console.error(`Failed to load progress for ${course}:`, error);
  }
  return { currentConceptIndex: 0, userAnswers: {} };
};


const App: React.FC = () => {
  const [activeCourse, setActiveCourse] = useState<CourseKey>('excel');
  const [view, setView] = useState<'learn' | 'glossary'>('learn');
  
  // State for the active course
  const [currentConceptIndex, setCurrentConceptIndex] = useState<number>(() => loadInitialState(activeCourse).currentConceptIndex);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>(() => loadInitialState(activeCourse).userAnswers);

  // Effect to save progress when state for the current course changes
  useEffect(() => {
    const LOCAL_STORAGE_KEY = `${activeCourse}ForAnalystsProgress`;
    try {
      const stateToSave = { currentConceptIndex, userAnswers };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stateToSave));
    } catch (error) {
      console.error(`Failed to save progress for ${activeCourse}:`, error);
    }
  }, [currentConceptIndex, userAnswers, activeCourse]);

  const handleCourseChange = (newCourse: CourseKey) => {
    if (newCourse === activeCourse) return;

    const savedState = loadInitialState(newCourse);
    setActiveCourse(newCourse);
    setCurrentConceptIndex(savedState.currentConceptIndex);
    setUserAnswers(savedState.userAnswers);
    setView('learn');
  };

  const currentConcepts = COURSES[activeCourse];
  const totalConcepts = currentConcepts.length;
  const currentConcept: ExcelConcept = currentConcepts[currentConceptIndex];
  const conceptUserAnswers = userAnswers[currentConceptIndex] || {};

  const handleAnswerSubmit = useCallback((questionIndex: number, selection: string) => {
    const isCorrect = currentConcept.quiz[questionIndex].correctAnswer === selection;
    setUserAnswers(prev => ({
      ...prev,
      [currentConceptIndex]: {
        ...prev[currentConceptIndex],
        [questionIndex]: { selection, isCorrect }
      }
    }));
  }, [currentConcept, currentConceptIndex]);

  const handleRetry = useCallback((questionIndex: number) => {
    setUserAnswers(prev => {
      const newConceptAnswers = { ...(prev[currentConceptIndex] || {}) };
      delete newConceptAnswers[questionIndex];
      return {
        ...prev,
        [currentConceptIndex]: newConceptAnswers
      };
    });
  }, [currentConceptIndex]);

  const handleNext = () => {
    if (currentConceptIndex < totalConcepts - 1) {
      setCurrentConceptIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentConceptIndex > 0) {
      setCurrentConceptIndex(prev => prev - 1);
    }
  };
  
  const handleConceptSelect = (index: number) => {
    setCurrentConceptIndex(index);
  };

  const handleRestart = () => {
    if (window.confirm('Are you sure you want to reset your progress for this course? This action cannot be undone.')) {
      const LOCAL_STORAGE_KEY = `${activeCourse}ForAnalystsProgress`;
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      setCurrentConceptIndex(0);
      setUserAnswers({});
      setView('learn');
    }
  };

  const numberConceptsMastered = currentConcepts.reduce((acc, concept, index) => {
    const answersForConcept = userAnswers[index] || {};
    const correctAnswersCount = Object.values(answersForConcept).filter(a => a.isCorrect).length;
    // A concept is mastered if all its quiz questions are answered correctly.
    // This also correctly handles concepts with no quiz, as 0 === 0.
    if (correctAnswersCount === concept.quiz.length) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const correctAnswersInCurrentConcept = Object.values(conceptUserAnswers).filter(a => a.isCorrect).length;
  const isCurrentConceptMastered = currentConcept.quiz.length > 0 && correctAnswersInCurrentConcept === currentConcept.quiz.length;

  const totalCorrectAnswers = Object.values(userAnswers)
    .flatMap(conceptAnswers => Object.values(conceptAnswers))
    .filter(answer => answer.isCorrect).length;
  
  const totalQuestions = currentConcepts.reduce((acc, concept) => acc + concept.quiz.length, 0);

  const isCourseCompleted = view === 'learn' && numberConceptsMastered === totalConcepts && totalConcepts > 0;

  const getNavButtonClass = (buttonView: 'learn' | 'glossary') => {
    const baseClass = "px-4 py-2 rounded-md font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white";
    if (view === buttonView) {
      return `${baseClass} bg-indigo-600 text-white`;
    }
    return `${baseClass} bg-slate-700 text-slate-300 hover:bg-slate-600`;
  };

  const getCourseButtonClass = (course: CourseKey) => {
     const baseClass = "px-3 py-1.5 rounded-md font-semibold transition-colors text-sm duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-white";
     if (activeCourse === course) {
       return `${baseClass} bg-sky-500 text-white`;
     }
     return `${baseClass} bg-slate-700 text-slate-300 hover:bg-slate-600`;
  };

  return (
    <div className="bg-slate-100 min-h-screen font-sans flex items-center justify-center p-4">
      <main className="w-full max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <header className="p-6 md:p-8 bg-slate-800 text-white">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-2xl md:text-4xl font-bold">{COURSE_TITLES[activeCourse]}</h1>
                <p className="mt-2 text-slate-300">{COURSE_SUBTITLES[activeCourse]}</p>
              </div>
              <div className="flex-shrink-0 flex items-center space-x-2 border border-slate-600 rounded-lg p-1">
                <button className={getNavButtonClass('learn')} onClick={() => setView('learn')}>Learn</button>
                <button className={getNavButtonClass('glossary')} onClick={() => setView('glossary')}>Glossary</button>
              </div>
            </div>
             <div className="mt-6 pt-4 border-t border-slate-700">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-x-2">
                        <span className="font-semibold text-slate-300">Select Course:</span>
                        <div className="flex flex-wrap items-center gap-2 rounded-lg p-1">
                           <button className={getCourseButtonClass('excel')} onClick={() => handleCourseChange('excel')}>Excel</button>
                           <button className={getCourseButtonClass('powerbi')} onClick={() => handleCourseChange('powerbi')}>Power BI</button>
                           <button className={getCourseButtonClass('python')} onClick={() => handleCourseChange('python')}>Python</button>
                           <button className={getCourseButtonClass('sql')} onClick={() => handleCourseChange('sql')}>SQL</button>
                        </div>
                    </div>
                    {view === 'learn' && (
                      <button
                        onClick={handleRestart}
                        className="px-3 py-1.5 rounded-md font-semibold text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-white bg-red-600 text-white hover:bg-red-700"
                        >
                        Reset Progress
                      </button>
                    )}
                </div>
            </div>
          </header>
          
          <div className="p-6 md:p-8">
            {view === 'learn' ? (
              <div className="flex flex-col lg:flex-row gap-8">
                <TopicNavbar
                  concepts={currentConcepts}
                  currentConceptIndex={currentConceptIndex}
                  userAnswers={userAnswers}
                  onSelectConcept={handleConceptSelect}
                />
                <div className="flex-1 min-w-0">
                  <ProgressBar current={numberConceptsMastered} total={totalConcepts} />

                  {isCourseCompleted ? (
                    <div className="text-center py-12">
                      <h2 className="text-3xl font-bold text-green-600">Congratulations!</h2>
                      <p className="text-slate-600 mt-4 text-lg">You've completed the {COURSE_TITLES[activeCourse]} course.</p>
                      <p className="text-slate-800 mt-2 text-xl font-medium">You answered {totalCorrectAnswers} out of {totalQuestions} questions correctly.</p>
                      <button
                        onClick={handleRestart}
                        className="mt-8 bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300"
                      >
                        Start Over
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-8">
                        <ConceptCard concept={currentConcept} />
                        <Quiz
                          key={`${activeCourse}-${currentConceptIndex}`} // Force re-mount on course/concept change
                          quizzes={currentConcept.quiz}
                          onAnswerSubmit={handleAnswerSubmit}
                          conceptUserAnswers={conceptUserAnswers}
                          onRetry={handleRetry}
                        />
                      </div>

                      <Navigation
                        onNext={handleNext}
                        onPrev={handlePrev}
                        isNextDisabled={!isCurrentConceptMastered && currentConcept.quiz.length > 0}
                        isPrevDisabled={currentConceptIndex === 0}
                        isLastStep={currentConceptIndex === totalConcepts - 1}
                      />
                    </>
                  )}
                </div>
              </div>
            ) : (
              <Glossary concepts={currentConcepts} />
            )}
          </div>
        </div>
        <footer className="text-center mt-6 text-sm text-slate-500">
          <p>Data Analyst Starter Kit | The ultimate toolkit for analysts.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
