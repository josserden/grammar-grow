import React, { FC, useEffect, useRef, useState } from "react";
import { Animated, TouchableOpacity, View } from "react-native";

import { Typography } from "@/shared/components/ui/Typography";
import { QuizOption } from "@/shared/types/Quiz.types";

type QuizProps = {
  quizList: QuizOption[];
  currentQuestion: number;
  onHandleAnswer: (index: number) => void;
};

export const Quiz: FC<QuizProps> = ({ quizList, currentQuestion, onHandleAnswer }) => {
  const [itemAnims, setItemAnims] = useState<Animated.Value[]>([]);
  const [buttonAnims, setButtonAnims] = useState<Animated.Value[]>([]);

  const buttonPressAnims = useRef(
    quizList[currentQuestion]?.option.map(() => ({
      scale: new Animated.Value(1),
      opacity: new Animated.Value(1),
    }))
  ).current;

  useEffect(() => {
    const currentQuizData = quizList[currentQuestion];
    if (!currentQuizData) return;

    const newItemAnims = currentQuizData.quiz.map(() => new Animated.Value(0));
    const newButtonAnims = currentQuizData.option.map(() => new Animated.Value(0));

    setItemAnims(newItemAnims);
    setButtonAnims(newButtonAnims);

    if (buttonPressAnims) {
      buttonPressAnims.forEach((anim) => {
        anim.scale.setValue(1);
        anim.opacity.setValue(1);
      });
    }

    newItemAnims.forEach((anim, index) => {
      Animated.timing(anim, {
        toValue: 1,
        duration: 300,
        delay: index * 100,
        useNativeDriver: true,
      }).start();
    });

    newButtonAnims.forEach((anim, index) => {
      Animated.timing(anim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  }, [buttonPressAnims, currentQuestion, quizList]);

  const handlePressIn = (index: number) => {
    Animated.parallel([
      Animated.spring(buttonPressAnims[index].scale, {
        toValue: 0.85,
        friction: 10,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.timing(buttonPressAnims[index].opacity, {
        toValue: 0.7,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePressOut = (index: number) => {
    Animated.parallel([
      Animated.spring(buttonPressAnims[index].scale, {
        toValue: 1,
        friction: 3,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.timing(buttonPressAnims[index].opacity, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  if (!quizList[currentQuestion]) {
    return null;
  }

  return (
    <View className="mt-40 items-center gap-20">
      {/* Список питань */}
      <View className="gap-4">
        {quizList[currentQuestion].quiz.map((quizItem, index) => {
          const anim = index < itemAnims.length ? itemAnims[index] : new Animated.Value(0);

          return (
            <Animated.View
              key={quizItem?.toLowerCase()}
              style={{
                opacity: anim,
                transform: [
                  {
                    translateY: anim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-20, 0],
                    }),
                  },
                ],
              }}
              className="h-[60px] w-[234px] items-center justify-center rounded-full border border-yellow-500"
            >
              <Typography className="font-montserrat-semi-bold uppercase tracking-wide">
                {quizItem}
              </Typography>
            </Animated.View>
          );
        })}
      </View>

      {/* Кнопки */}
      <View className="flex-row justify-center gap-4 px-8">
        {quizList[currentQuestion].option.map((option: string, index: number) => {
          const anim = index < buttonAnims.length ? buttonAnims[index] : new Animated.Value(0);
          const { scale, opacity } = buttonPressAnims[index];

          return (
            <Animated.View
              key={option}
              style={{
                opacity: anim,
                transform: [
                  {
                    scale: Animated.multiply(
                      anim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.5, 1],
                      }),
                      scale
                    ),
                  },
                ],
                width: "47%",
                backgroundColor: opacity.interpolate({
                  inputRange: [0.7, 1],
                  outputRange: ["rgb(39, 39, 42)", "rgb(24, 24, 27)"],
                }),
                borderRadius: 9999,
                elevation: 4,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3,
              }}
            >
              <TouchableOpacity
                onPressIn={() => handlePressIn(index)}
                onPressOut={() => handlePressOut(index)}
                onPress={() => onHandleAnswer(index)}
                activeOpacity={1}
                className="h-[52px] items-center justify-center rounded-full"
              >
                <Typography className="font-montserrat-semi-bold capitalize tracking-wide text-white">
                  {option}
                </Typography>
              </TouchableOpacity>
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
};
