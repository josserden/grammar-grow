import React from "react";

import { Stack } from "expo-router";

import { GoBackButton } from "@/shared/components/ui/GoBackButton";
import { COLORS } from "@/shared/constants/colors";
import { useTestTitle } from "@/shared/hooks/useTestTitle";

const TestLayout = () => {
  const { title } = useTestTitle();

  console.log("title", title);

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.STONE_100,
        },
        headerTintColor: COLORS.ZINC_900,
        headerTitleStyle: {
          fontFamily: "DelaGothicOne-Regular",
        },
      }}
    >
      <Stack.Screen
        name="[testId]"
        options={{
          headerLeft: () => <GoBackButton />,
          headerShadowVisible: false,
          title,
        }}
      />
    </Stack>
  );
};

export default TestLayout;
