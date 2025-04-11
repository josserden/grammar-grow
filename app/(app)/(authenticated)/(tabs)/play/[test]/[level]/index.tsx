import React from "react";
import { View } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";

import { useLocalSearchParams } from "expo-router";

import { Typography } from "@/shared/components/ui/Typography";
import { Wrapper } from "@/shared/components/ui/Wrapper";
import { usePreventLeftSwipe } from "@/shared/hooks/usePreventLeftSwipe";

const Index = () => {
  const { test, level } = useLocalSearchParams();
  const { composedGesture } = usePreventLeftSwipe();

  return (
    <GestureDetector gesture={composedGesture}>
      <Wrapper alignment="start" topInset={false} className="items-center">
        <View className="mb-16 mt-10 flex-row items-center justify-center gap-1">
          {Array.from({ length: 10 }, (_, index) => (
            <View key={index} className="h-2 w-7 rounded border border-zinc-900 bg-yellow-500" />
          ))}
        </View>

        <Typography variant="title">Test: {test}</Typography>
        <Typography variant="sub-title">Level Id: {level}</Typography>
      </Wrapper>
    </GestureDetector>
  );
};

export default Index;
