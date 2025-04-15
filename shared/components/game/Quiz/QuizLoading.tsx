import React, { FC } from "react";
import { View } from "react-native";

import { Typography } from "@/shared/components/ui/Typography";

interface QuizLoadingProps {
  isLoading: boolean;
}

export const QuizLoading: FC<QuizLoadingProps> = ({ isLoading }) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Typography>{isLoading ? "Initializing..." : "Loading quiz..."}</Typography>
    </View>
  );
};
