import React from "react";
import { Text, View } from "react-native";

import { useLocalSearchParams } from "expo-router";

import { Wrapper } from "@/shared/components/ui/Wrapper";

const TestId = () => {
  const params = useLocalSearchParams();

  console.log("[params]", params);

  return (
    <Wrapper>
      <Text>Test</Text>
    </Wrapper>
  );
};

export default TestId;
