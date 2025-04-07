import React from "react";
import { View } from "react-native";

import { useLocalSearchParams } from "expo-router";

import { Typography } from "@/shared/components/ui/Typography";
import { Wrapper } from "@/shared/components/ui/Wrapper";

const Index = () => {
  const { test, level } = useLocalSearchParams();

  return (
    <Wrapper alignment="start" topInset={false} className="items-center">
      <View className="mb-16 mt-10 flex-row items-center justify-center gap-1">
        {Array.from({ length: 10 }, (_, index) => (
          <View key={index} className="h-2 w-7 rounded border border-zinc-900 bg-yellow-500" />
        ))}
      </View>

      <Typography variant="title">Test: {test}</Typography>
      <Typography variant="sub-title">Level Id: {level}</Typography>
    </Wrapper>
  );
};

export default Index;
