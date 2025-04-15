export const STATE = {
  IDLE: "idle",
  LOADING: "loading",
  QUIZ: "quiz",
  RESULT: "result",
  EMPTY: "empty",
  ERROR: "error",
} as const;

export const ACTION = {
  FETCH_START: "fetch_start",
  FETCH_SUCCESS: "fetch_success",
  FETCH_EMPTY: "fetch_empty",
  FETCH_ERROR: "fetch_error",
  ANSWER_QUESTION: "answer_question",
  RESTART_QUIZ: "restart_quiz",
} as const;

export interface QuizOption {
  option: string[];
  quiz: string[];
  correct: number;
}

export interface Answer {
  questionIndex: number;
  selectedOptionIndex: number;
  selectedOption: string;
  isCorrect: boolean;
}

export type GameState = (typeof STATE)[keyof typeof STATE];

export type ActionType = (typeof ACTION)[keyof typeof ACTION];

export type Action =
  | { type: typeof ACTION.FETCH_START }
  | { type: typeof ACTION.FETCH_SUCCESS; payload: QuizOption[] }
  | { type: typeof ACTION.FETCH_EMPTY }
  | { type: typeof ACTION.FETCH_ERROR }
  | { type: typeof ACTION.ANSWER_QUESTION; payload: { optionIndex: number } }
  | { type: typeof ACTION.RESTART_QUIZ };

export interface QuizState {
  gameState: GameState;
  quizList: QuizOption[];
  currentQuestion: number;
  answers: Answer[];
  score: number;
  points: number;
}
