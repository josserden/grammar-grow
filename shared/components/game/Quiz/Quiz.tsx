import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";

import { Typography } from "@/shared/components/ui/Typography";
import { QuizOption } from "@/shared/types/Quiz.types";

type QuizProps = {
  quizList: QuizOption[];
  currentQuestion: number;
  onHandleAnswer: (index: number) => void;
};

export const Quiz: FC<QuizProps> = ({ quizList, currentQuestion, onHandleAnswer }) => {
  return (
    <View className="mt-40 items-center gap-20">
      <View className="gap-4">
        {quizList[currentQuestion]?.quiz.map((quizItem) => (
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

      <View className="flex-row justify-center gap-4 px-8">
        {quizList[currentQuestion]?.option.map((option: string, index: number) => (
          <TouchableOpacity
            key={option}
            className="h-[52px] w-1/2 items-center justify-center rounded-full bg-zinc-900"
            onPress={() => onHandleAnswer(index)}
          >
            <Typography className="font-montserrat-semi-bold capitalize tracking-wide text-white">
              {option}
            </Typography>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
