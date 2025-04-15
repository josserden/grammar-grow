import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";

import { QuizEmptyProps } from "@/shared/components/game/Quiz/QuizEmpty";
import { Typography } from "@/shared/components/ui/Typography";

export const QuizError: FC<QuizEmptyProps> = ({ onRetry }) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Typography className="mb-4">Failed to load quiz data. Please try again.</Typography>
      <TouchableOpacity className="mt-4 rounded-full bg-black px-8 py-3" onPress={onRetry}>
        <Typography className="text-white">Go Back</Typography>
      </TouchableOpacity>
    </View>
  );
};
