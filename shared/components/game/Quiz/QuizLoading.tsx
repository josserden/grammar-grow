import React, { FC } from "react";
import { View } from "react-native";

import { Loading } from "@/shared/components/icons/Loading";
import { Typography } from "@/shared/components/ui/Typography";

interface QuizLoadingProps {
  isLoading: boolean;
}

export const QuizLoading: FC<QuizLoadingProps> = ({ isLoading }) => {
  return (
    <View className="relative flex-1 items-center justify-center">
      <Loading />
      <Typography className="absolute bottom-60 left-0 right-0 text-center font-bold">
        {isLoading ? "Initializing..." : "Loading quiz..."}
      </Typography>
    </View>
  );
};
