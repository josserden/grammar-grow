import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";

import { Typography } from "@/shared/components/ui/Typography";

export interface QuizEmptyProps {
  onRetry: () => void;
}

export const QuizEmpty: FC<QuizEmptyProps> = ({ onRetry }) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Typography className="mb-4">No questions available for this level.</Typography>
      <TouchableOpacity className="mt-4 rounded-full bg-black px-8 py-3" onPress={onRetry}>
        <Typography className="text-white">Go Back</Typography>
      </TouchableOpacity>
    </View>
  );
};
