import React, { useState, useMemo } from 'react';
import type { ExcelConcept } from '../types';
import SearchIcon from './icons/SearchIcon';

interface GlossaryProps {
  concepts: ExcelConcept[];
}

const Glossary: React.FC<GlossaryProps> = ({ concepts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const sortedConcepts = useMemo(() => {
    return [...concepts].sort((a, b) => a.title.localeCompare(b.title));
  }, [concepts]);

  const filteredConcepts = useMemo(() => {
    if (!searchTerm) {
      return sortedConcepts;
    }
    return sortedConcepts.filter(concept => 
      concept.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      concept.definition.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [sortedConcepts, searchTerm]);

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold text-slate-800 mb-4">Glossary of Terms</h2>
      <p className="text-slate-600 mb-6">Search for any concept to quickly find its definition.</p>
      
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search for a term..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-colors duration-200"
          aria-label="Search glossary"
        />
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
      </div>

      <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-4">
        {filteredConcepts.length > 0 ? (
          filteredConcepts.map(concept => (
            <div key={concept.id} className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700">{concept.title}</h3>
              <p className="mt-2 text-slate-700 leading-relaxed">{concept.definition}</p>
            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-slate-500">No terms found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Glossary;