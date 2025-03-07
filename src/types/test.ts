
export interface Test {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'mental-health' | 'personality' | 'career';
  timeMinutes: number;
  questions: TestQuestion[];
  completions: number;
}

export interface TestQuestion {
  id: string;
  text: string;
  type: 'likert' | 'multiple-choice' | 'true-false';
  options: TestQuestionOption[];
}

export interface TestQuestionOption {
  id: string;
  text: string;
  value: number;
}

export interface TestResult {
  id: string;
  testId: string;
  userId?: string; // Optional if user is not logged in
  date: Date;
  score: number;
  interpretation: string;
  recommendations: string[];
}
