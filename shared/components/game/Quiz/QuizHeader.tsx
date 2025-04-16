import React, { FC, useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";

import { HeaderDecor } from "@/shared/components/icons/decor/HeaderDecor";
import { Typography } from "@/shared/components/ui/Typography";
import { COLORS } from "@/shared/constants/colors";
import { QuizOption } from "@/shared/types/Quiz.types";

interface QuizHeaderProps {
  quizList: QuizOption[];
  currentQuestion: number;
}

const ANIMATION_DURATION = 300;

export const QuizHeader: FC<QuizHeaderProps> = ({ quizList, currentQuestion }) => {
  const animatedValues = useRef<Animated.Value[]>([]);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const numberRef = useRef(currentQuestion);
  const [displayedNumber, setDisplayedNumber] = useState(currentQuestion + 1);

  if (animatedValues.current.length === 0 && quizList.length > 0) {
    quizList.forEach((_, index) => {
      const initialValue = currentQuestion >= index ? 1 : 0;
      animatedValues.current.push(new Animated.Value(initialValue));
    });
  }

  useEffect(() => {
    const dotAnimations = quizList.map((_, index) => {
      const toValue = currentQuestion >= index ? 1 : 0;

      return Animated.timing(animatedValues.current[index], {
        toValue,
        duration: ANIMATION_DURATION,
        useNativeDriver: false,
      });
    });

    // Більш виразна анімація зміни номера
    if (numberRef.current !== currentQuestion) {
      // Анімація виходу
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: ANIMATION_DURATION / 2,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.8,
          duration: ANIMATION_DURATION / 2,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // Оновлюємо відображуване число
        setDisplayedNumber(currentQuestion + 1);
        numberRef.current = currentQuestion;

        // Анімація входу з ефектом пружини
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: ANIMATION_DURATION / 2,
            useNativeDriver: true,
          }),
          Animated.spring(scaleAnim, {
            toValue: 1,
            friction: 4,
            tension: 80,
            useNativeDriver: true,
          }),
        ]).start();
      });
    }

    Animated.parallel(dotAnimations).start();
  }, [currentQuestion, quizList.length, fadeAnim, scaleAnim, quizList]);

  return (
    <View className="relative w-full">
      <View className="flex-row items-center justify-center gap-1 bg-yellow-500 py-10">
        {quizList.map((_, index) => {
          const backgroundColor = animatedValues.current[index]?.interpolate({
            inputRange: [0, 1],
            outputRange: [COLORS.YELLOW_500, COLORS.STONE_100],
          });

          const scale = animatedValues.current[index]?.interpolate({
            inputRange: [0, 1],
            outputRange: [0.9, 1.01],
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.progress,
                {
                  backgroundColor,
                  transform: [
                    {
                      scale,
                    },
                  ],
                },
              ]}
            />
          );
        })}
      </View>

      <View className="items-center justify-center gap-1 bg-yellow-500">
        <Typography className="font-normal">Make your choice</Typography>

        <View className="flex-row items-center">
          <Animated.Text
            style={[
              styles.animatedText,
              {
                opacity: fadeAnim,
                transform: [
                  { scale: scaleAnim },
                  {
                    translateY: fadeAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [8, 0],
                    }),
                  },
                ],
                color: fadeAnim.interpolate({
                  inputRange: [0, 0.9, 1],
                  outputRange: [COLORS.ZINC_700, COLORS.STONE_100, COLORS.ZINC_900],
                }),
              },
            ]}
          >
            {displayedNumber}
          </Animated.Text>

          <Typography variant="title" className="text-[40px]">
            /{quizList.length}
          </Typography>
        </View>
      </View>

      <HeaderDecor style={styles.decor} />
    </View>
  );
};

const styles = StyleSheet.create({
  animatedText: {
    fontFamily: "DelaGothicOne-Regular",
    fontSize: 40,
    fontWeight: "bold",
  },
  decor: {
    bottom: -92,
    left: 0,
    position: "absolute",
    zIndex: -1,
  },
  progress: {
    borderColor: COLORS.ZINC_900,
    borderRadius: 4,
    borderWidth: 1,
    height: 8,
    width: 28,
  },
});
