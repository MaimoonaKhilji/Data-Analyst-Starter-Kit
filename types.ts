export interface QuizData {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface TutorialStep {
  step: number;
  description: string;
  example?: string;
}

export interface Shortcut {
  keys: string;
  description: string;
  category: 'Navigation' | 'Selection' | 'Formatting' | 'General';
}

export interface ExcelConcept {
  id: number;
  title: string;
  definition: string;
  useCases: string[];
  tutorial?: TutorialStep[];
  shortcuts?: Shortcut[];
  quiz: QuizData[];
}
