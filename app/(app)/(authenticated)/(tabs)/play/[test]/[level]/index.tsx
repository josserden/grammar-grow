import React, { useEffect, useReducer } from "react";
import { Platform } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";

import { useLocalSearchParams, useRouter } from "expo-router";

import { useQuery } from "@tanstack/react-query";

import { WordQuizApi } from "@/shared/api/word-quiz";
import {
  Quiz,
  QuizEmpty,
  QuizError,
  QuizHeader,
  QuizLoading,
  QuizResult,
} from "@/shared/components/game/Quiz";
import { Dialog } from "@/shared/components/ui/Dialog";
import { Wrapper } from "@/shared/components/ui/Wrapper";
import { usePreventLeftSwipe } from "@/shared/hooks/usePreventLeftSwipe";
import { initialState, quizReducer } from "@/shared/reducers/quiz.reducer";
import { useAppStore } from "@/shared/store/store";
import { ACTION, STATE } from "@/shared/types/Quiz.types";

const Index = () => {
  const { test, level } = useLocalSearchParams();
  const { composedGesture } = usePreventLeftSwipe();
  const { back } = useRouter();

  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { gameState, quizList, currentQuestion, answers, score, points } = state;

  // Використовуємо базові властивості useQuery
  const { data = [], isSuccess, isLoading, isError } = useQuery(WordQuizApi.options());

  // Синхронізація стану запиту з нашою машиною станів
  useEffect(() => {
    if (isLoading) {
      dispatch({ type: ACTION.FETCH_START });
    } else if (isSuccess) {
      if (data.length === 0) {
        dispatch({ type: ACTION.FETCH_EMPTY });
      } else {
        dispatch({ type: ACTION.FETCH_SUCCESS, payload: data });
      }
    } else if (isError) {
      dispatch({ type: ACTION.FETCH_ERROR });
    }
  }, [data, isSuccess, isLoading, isError]);

  const isVisible = useAppStore((state) => state.isVisible);
  const close = useAppStore((state) => state.close);

  const handleCancel = () => {
    close();
    back();
  };

  // Обробка відповіді користувача
  const handleAnswer = (optionIndex: number) => {
    dispatch({ type: ACTION.ANSWER_QUESTION, payload: { optionIndex } });
  };

  // Функція для повторного проходження вікторини
  const handleRestartQuiz = () => {
    dispatch({ type: ACTION.RESTART_QUIZ });
  };

  const renderContent = () => {
    switch (gameState) {
      case STATE.IDLE:
      case STATE.LOADING:
        return <QuizLoading isLoading={gameState === STATE.LOADING} />;

      case STATE.EMPTY:
        return <QuizEmpty onRetry={back} />;

      case STATE.ERROR:
        return <QuizError onRetry={back} />;

      case STATE.QUIZ:
        return (
          <>
            <QuizHeader quizList={quizList} currentQuestion={currentQuestion} />
            <Quiz
              quizList={quizList}
              currentQuestion={currentQuestion}
              onHandleAnswer={handleAnswer}
            />
          </>
        );

      case STATE.RESULT:
        return (
          <QuizResult
            points={points}
            score={score}
            answers={answers}
            total={quizList.length}
            onFinish={handleRestartQuiz}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      <GestureDetector gesture={composedGesture}>
        <Wrapper
          alignment="start"
          topInset={Platform.OS !== "ios"}
          className="items-center"
          padding="none"
        >
          {renderContent()}
        </Wrapper>
      </GestureDetector>

      <Dialog visible={isVisible}>
        <Dialog.Title>Are you sure you want to exit?</Dialog.Title>
        <Dialog.Description>
          Lorem ipsum dolor sit amet consectetur. Quis enim nunc facilisis id.
        </Dialog.Description>
        <Dialog.Confirmation onPress={close}>Back to quiz</Dialog.Confirmation>
        <Dialog.Cancel onPress={handleCancel}>Cancel quiz</Dialog.Cancel>
      </Dialog>
    </>
  );
};

export default Index;
