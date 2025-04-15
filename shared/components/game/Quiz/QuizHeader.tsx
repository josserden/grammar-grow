import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

import { HeaderDecor } from "@/shared/components/icons/decor/HeaderDecor";
import { Typography } from "@/shared/components/ui/Typography";
import { cn } from "@/shared/lib/utils";
import { QuizOption } from "@/shared/types/Quiz.types";

interface QuizHeaderProps {
  quizList: QuizOption[];
  currentQuestion: number;
}

export const QuizHeader: FC<QuizHeaderProps> = ({ quizList, currentQuestion }) => {
  return (
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
  );
};

const styles = StyleSheet.create({
  decor: {
    bottom: -92,
    left: 0,
    position: "absolute",
    zIndex: -1,
  },
});
