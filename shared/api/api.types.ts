export interface WordQuizResponseProps {
  area: string;
  level: number;
  quizlist: QuizListProps[];
  version: string;
  author: string;
  email: string;
  result_code: string;
  result_msg: string;
}

export interface QuizListProps {
  quiz: string[];
  option: string[];
  correct: number;
}
