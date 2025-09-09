import React from 'react';
import type { ExcelConcept, Shortcut } from '../types';
import LightbulbIcon from './icons/LightbulbIcon';
import BookOpenIcon from './icons/BookOpenIcon';
import KeyboardIcon from './icons/KeyboardIcon';

interface ConceptCardProps {
  concept: ExcelConcept;
}

const ConceptCard: React.FC<ConceptCardProps> = ({ concept }) => {
  const groupedShortcuts = concept.shortcuts?.reduce((acc, shortcut) => {
    const { category } = shortcut;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(shortcut);
    return acc;
  }, {} as Record<string, Shortcut[]>);

  return (
    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 h-full overflow-y-auto max-h-[60vh] lg:max-h-full">
      <h2 className="text-2xl font-bold text-slate-800">{concept.title}</h2>
      <p className="mt-4 text-slate-600 leading-relaxed">{concept.definition}</p>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-slate-700 flex items-center">
          <LightbulbIcon className="w-5 h-5 mr-2 text-yellow-500" />
          Real-World Use Cases
        </h3>
        <ul className="mt-3 list-disc list-inside space-y-2 text-slate-600">
          {concept.useCases.map((useCase, index) => (
            <li key={index}>{useCase}</li>
          ))}
        </ul>
      </div>

      {concept.shortcuts && groupedShortcuts && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-slate-700 flex items-center">
            <KeyboardIcon className="w-5 h-5 mr-2 text-slate-500" />
            Essential Keyboard Shortcuts
          </h3>
          <div className="mt-3 space-y-4">
            {Object.entries(groupedShortcuts).map(([category, shortcutsInCategory]) => (
              <div key={category}>
                <h4 className="font-semibold text-slate-600 border-b border-slate-200 pb-1 mb-2">{category}</h4>
                <ul className="space-y-2">
                  {shortcutsInCategory.map((sc, index) => (
                    <li key={index} className="flex justify-between items-center text-sm p-1 rounded-md hover:bg-slate-100">
                      <span className="text-slate-700">{sc.description}</span>
                      <kbd className="px-2 py-1 text-xs font-semibold text-slate-600 bg-slate-200 border border-slate-300 rounded-md">
                        {sc.keys}
                      </kbd>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {concept.tutorial && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-slate-700 flex items-center">
            <BookOpenIcon className="w-5 h-5 mr-2 text-indigo-500" />
            Step-by-Step Tutorial
          </h3>
          <ol className="mt-3 list-decimal list-inside space-y-4 text-slate-600">
            {concept.tutorial.map((step) => (
              <li key={step.step} className="pl-2">
                {step.description}
                {step.example && (
                  <pre className="mt-2 p-2 bg-slate-200 text-slate-800 rounded-md text-sm font-mono overflow-x-auto">
                    <code>{step.example}</code>
                  </pre>
                )}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default ConceptCard;
