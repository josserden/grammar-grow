import { ACTION, Action, QuizState, STATE } from "@/shared/types/Quiz.types";

export const initialState: QuizState = {
  gameState: STATE.RESULT,
  quizList: [],
  currentQuestion: 0,
  answers: [],
  score: 0,
  points: 0,
};

export const quizReducer = (state: QuizState, action: Action): QuizState => {
  switch (action.type) {
    case ACTION.FETCH_START:
      return {
        ...state,
        gameState: STATE.LOADING,
      };

    case ACTION.FETCH_SUCCESS:
      return {
        ...state,
        gameState: STATE.QUIZ,
        quizList: action.payload,
      };

    case ACTION.FETCH_EMPTY:
      return {
        ...state,
        gameState: STATE.EMPTY,
        quizList: [],
      };

    case ACTION.FETCH_ERROR:
      return {
        ...state,
        gameState: STATE.ERROR,
      };

    case ACTION.ANSWER_QUESTION: {
      const { optionIndex } = action.payload;
      const isCorrect = optionIndex === state.quizList[state.currentQuestion].correct - 1;
      const isLastQuestion = state.currentQuestion === state.quizList.length - 1;

      return {
        ...state,
        answers: [
          ...state.answers,
          {
            questionIndex: state.currentQuestion,
            selectedOptionIndex: optionIndex,
            selectedOption: state.quizList[state.currentQuestion].option[optionIndex],
            isCorrect,
          },
        ],
        score: isCorrect ? state.score + 1 : state.score,
        points: isCorrect ? state.points + 65 : state.points,
        currentQuestion: isLastQuestion ? state.currentQuestion : state.currentQuestion + 1,
        gameState: isLastQuestion ? STATE.RESULT : STATE.QUIZ,
      };
    }

    case ACTION.RESTART_QUIZ:
      return {
        ...initialState,
        quizList: state.quizList,
        gameState: STATE.QUIZ,
      };

    case ACTION.FINISH_QUIZ:
      return initialState;

    default:
      return state;
  }
};
