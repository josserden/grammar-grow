import React, { FC, useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

import { HeaderDecor } from "@/shared/components/icons/decor/HeaderDecor";
import { Typography } from "@/shared/components/ui/Typography";
import { COLORS } from "@/shared/constants/colors";
import { QuizOption } from "@/shared/types/Quiz.types";

interface QuizHeaderProps {
  quizList: QuizOption[];
  currentQuestion: number;
}

export const QuizHeader: FC<QuizHeaderProps> = ({ quizList, currentQuestion }) => {
  const animatedValues = useRef<Animated.Value[]>([]);

  if (animatedValues.current.length === 0 && quizList.length > 0) {
    quizList.forEach((_, index) => {
      const initialValue = currentQuestion >= index ? 1 : 0;
      animatedValues.current.push(new Animated.Value(initialValue));
    });
  }

  useEffect(() => {
    const animations = quizList.map((_, index) => {
      const toValue = currentQuestion >= index ? 1 : 0;

      return Animated.timing(animatedValues.current[index], {
        toValue,
        duration: 300,
        useNativeDriver: false,
      });
    });

    Animated.parallel(animations).start();
  }, [currentQuestion, quizList, quizList.length]);

  return (
    <View className="relative w-full">
      <View className="flex-row items-center justify-center gap-1 bg-yellow-500 py-10">
        {quizList.map((_, index) => {
          const backgroundColor = animatedValues.current[index]?.interpolate({
            inputRange: [0, 1],
            outputRange: [COLORS.YELLOW_500, COLORS.STONE_100],
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.progressBar,
                {
                  backgroundColor,
                },
              ]}
            />
          );
        })}
      </View>

      <View className="items-center justify-center gap-1 bg-yellow-500">
        <Typography className="font-normal">Make your choice</Typography>

        <Typography variant="title" className="text-[40px]">
          {currentQuestion + 1}/{quizList.length}
        </Typography>
      </View>

      <HeaderDecor style={styles.decor} />
    </View>
  );
};

const styles = StyleSheet.create({
  decor: {
    bottom: -92,
    left: 0,
    position: "absolute",
    zIndex: -1,
  },
  progressBar: {
    borderColor: COLORS.ZINC_900,
    borderRadius: 4,
    borderWidth: 1,
    height: 8,
    width: 28,
  },
});
