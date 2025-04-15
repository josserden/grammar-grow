import React, { useEffect, useReducer } from "react";
import { Modal, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import Svg, { Circle, G, Mask, Path } from "react-native-svg";

import { useLocalSearchParams, useRouter } from "expo-router";

import { useQuery } from "@tanstack/react-query";

import { WordQuizApi } from "@/shared/api/word-quiz";
import { HeaderDecor } from "@/shared/components/icons/decor/HeaderDecor";
import { Button } from "@/shared/components/ui/Button";
import { Dialog } from "@/shared/components/ui/Dialog";
import { ScoreLabel } from "@/shared/components/ui/ScoreLabel";
import { Typography } from "@/shared/components/ui/Typography";
import { Wrapper } from "@/shared/components/ui/Wrapper";
import { usePreventLeftSwipe } from "@/shared/hooks/usePreventLeftSwipe";
import { cn } from "@/shared/lib/utils";
import { useAppStore } from "@/shared/store/store";

// Стани гри
const STATE = {
  IDLE: "idle",
  LOADING: "loading",
  QUIZ: "quiz",
  RESULT: "result",
  EMPTY: "empty",
  ERROR: "error",
};

// Типи дій
const ACTION = {
  FETCH_START: "fetch_start",
  FETCH_SUCCESS: "fetch_success",
  FETCH_EMPTY: "fetch_empty",
  FETCH_ERROR: "fetch_error",
  ANSWER_QUESTION: "answer_question",
  RESTART_QUIZ: "restart_quiz",
};

// Початковий стан
const initialState = {
  gameState: STATE.RESULT,
  quizList: [],
  currentQuestion: 0,
  answers: [],
  score: 0,
  points: 0,
};

// Редюсер
function quizReducer(state, action) {
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

    default:
      return state;
  }
}

const Index = () => {
  const { test, level } = useLocalSearchParams();
  const { composedGesture } = usePreventLeftSwipe();
  const { back } = useRouter();

  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { gameState, quizList, currentQuestion, answers, score, points } = state;

  // Використовуємо базові властивості useQuery
  const { data = [], status } = useQuery(WordQuizApi.options());

  // Синхронізація стану запиту з нашою машиною станів
  useEffect(() => {
    if (status === "loading") {
      dispatch({ type: ACTION.FETCH_START });
    } else if (status === "success") {
      if (data.length === 0) {
        dispatch({ type: ACTION.FETCH_EMPTY });
      } else {
        dispatch({ type: ACTION.FETCH_SUCCESS, payload: data });
      }
    } else if (status === "error") {
      dispatch({ type: ACTION.FETCH_ERROR });
    }
  }, [status, data]);

  const isVisible = useAppStore((state) => state.isVisible);
  const close = useAppStore((state) => state.close);

  const handleCancel = () => {
    close();
    back();
  };

  // Обробка відповіді користувача
  const handleAnswer = (optionIndex) => {
    dispatch({ type: ACTION.ANSWER_QUESTION, payload: { optionIndex } });
  };

  // Функція для повторного проходження вікторини
  const handleRestartQuiz = () => {
    dispatch({ type: ACTION.RESTART_QUIZ });
  };

  // Функція для рендеру контенту залежно від стану гри
  const renderContent = () => {
    switch (gameState) {
      case STATE.IDLE:
      case STATE.LOADING:
        return (
          <View className="flex-1 items-center justify-center">
            <Typography>
              {gameState === STATE.IDLE ? "Initializing..." : "Loading quiz..."}
            </Typography>
          </View>
        );

      case STATE.EMPTY:
        return (
          <View className="flex-1 items-center justify-center">
            <Typography className="mb-4">No questions available for this level.</Typography>
            <TouchableOpacity
              className="mt-4 rounded-full bg-black px-8 py-3"
              onPress={() => back()}
            >
              <Typography className="text-white">Go Back</Typography>
            </TouchableOpacity>
          </View>
        );

      case STATE.ERROR:
        return (
          <View className="flex-1 items-center justify-center">
            <Typography className="mb-4">Failed to load quiz data. Please try again.</Typography>
            <TouchableOpacity
              className="mt-4 rounded-full bg-black px-8 py-3"
              onPress={() => back()}
            >
              <Typography className="text-white">Go Back</Typography>
            </TouchableOpacity>
          </View>
        );

      case STATE.QUIZ:
        return (
          <>
            <View className="relative w-full">
              <View className="flex-row items-center justify-center gap-1 bg-yellow-500 py-10">
                {quizList.map((_, index) => (
                  <View
                    key={index}
                    className={cn(
                      "h-2 w-7 rounded border border-zinc-900",
                      currentQuestion >= index ? "bg-white" : "bg-yellow-500"
                    )}
                  />
                ))}
              </View>

              <View className="items-center justify-center gap-1 bg-yellow-500">
                <Typography className="font-normal">Make your choice</Typography>
                <Typography variant="title" className="text-[40px]">
                  {currentQuestion + 1}/{quizList.length}
                </Typography>
              </View>

              <HeaderDecor style={styles.decor} />
            </View>

            <View className="mt-40 items-center gap-20">
              {/* Відображення питання */}
              <View className="gap-4">
                {quizList[currentQuestion]?.quiz.map((quizItem, index) => (
                  <View
                    key={quizItem?.toLowerCase()}
                    className="h-[60px] w-[234px] items-center justify-center rounded-full border border-yellow-500"
                  >
                    <Typography className="font-montserrat-semi-bold uppercase tracking-wide">
                      {quizItem}
                    </Typography>
                  </View>
                ))}
              </View>

              {/* Варіанти відповідей */}
              <View className="flex-row flex-wrap justify-center gap-4">
                {quizList[currentQuestion]?.option.map((option, index) => (
                  <TouchableOpacity
                    key={option}
                    className="h-[52px] w-[130px] items-center justify-center rounded-full bg-zinc-900"
                    onPress={() => handleAnswer(index)}
                  >
                    <Typography className="font-montserrat-semi-bold capitalize tracking-wide text-white">
                      {option}
                    </Typography>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </>
        );

      case STATE.RESULT:
        return (
          // <View className="flex-1 items-center justify-between py-10">
          //   {/* Верхня частина - бали */}
          //   <View className="items-center">
          //     <View className="flex-row items-center rounded-full bg-white px-6 py-2">
          //       <Typography className="font-bold">+ {points}</Typography>
          //       <View className="ml-2 rounded-full bg-yellow-500 p-1">
          //         {/* Star icon can be added here */}
          //       </View>
          //     </View>
          //
          //     <Typography variant="title" className="mt-8">
          //       Good job!
          //     </Typography>
          //     <Typography className="mt-2 text-zinc-700">
          //       Lorem ipsum dolor sit amet consectetur.
          //     </Typography>
          //   </View>
          //
          //   {/* Місце для зображення персонажів */}
          //   <View className="my-8">{/* Зображення персонажів */}</View>
          //
          //   {/* Секція результатів */}
          //   <View className="w-full rounded-3xl bg-white p-4">
          //     <View className="mb-4 flex-row items-center justify-between">
          //       <Typography className="font-bold">
          //         {score}/{quizList.length} correct answers
          //       </Typography>
          //       {/* Chevron icon can be added here */}
          //     </View>
          //
          //     {/* Індикатори відповідей */}
          //     <View className="flex-row flex-wrap gap-2 border-t border-zinc-100 py-4">
          //       {answers.map((answer, index) => (
          //         <View
          //           key={index}
          //           className={`rounded-full px-4 py-2 ${
          //             answer.isCorrect ? "bg-green-200" : "bg-red-200"
          //           }`}
          //         >
          //           {answer.isCorrect ? <Typography>✓</Typography> : <Typography>✗</Typography>}
          //         </View>
          //       ))}
          //     </View>
          //   </View>
          //
          //   {/* Кнопки дій */}
          //   <View className="mt-6 w-full flex-row gap-4">
          //     <TouchableOpacity
          //       className="flex-1 items-center rounded-full bg-gray-200 py-4"
          //       onPress={handleRestartQuiz}
          //     >
          //       <Typography className="font-bold">Play Again</Typography>
          //     </TouchableOpacity>
          //
          //     <TouchableOpacity
          //       className="flex-1 items-center rounded-full bg-black py-4"
          //       onPress={() => back()}
          //     >
          //       <Typography className="font-bold text-white">Done</Typography>
          //     </TouchableOpacity>
          //   </View>
          // </View>

          <Modal animationType="fade" visible={gameState === STATE.RESULT}>
            <Wrapper alignment="start" className="flex-1 items-center justify-start bg-yellow-500">
              <View className="mb-64 items-center gap-5">
                <ScoreLabel isReverse score="+ 520" size="lg" />

                <Typography variant="title" className="text-[40px] leading-tight">
                  Good job!
                </Typography>

                <Typography>Lorem ipsum dolor sit amet consectetur.</Typography>
              </View>

              <Button variant="secondary" className="w-full">
                Done
              </Button>
            </Wrapper>
          </Modal>
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
          padding={false}
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

const styles = StyleSheet.create({
  decor: {
    bottom: -92,
    left: 0,
    position: "absolute",
    zIndex: -1,
  },
});
