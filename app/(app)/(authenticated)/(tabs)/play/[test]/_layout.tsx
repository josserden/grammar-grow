import React from "react";

import { Stack, useGlobalSearchParams } from "expo-router";

import { GoBackButton } from "@/shared/components/ui/GoBackButton";
import { COLORS } from "@/shared/constants/colors";
import { useTestTitle } from "@/shared/hooks/useTestTitle";

const TestLayout = () => {
  const { title } = useTestTitle();
  const { level } = useGlobalSearchParams();

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
      <Stack.Screen
        name="[level]"
        options={{
          headerLeft: () => <GoBackButton icon="close" withConfirmation />,
          headerShadowVisible: false,
          title: `Level ${level}`,
          gestureEnabled: false,
        }}
      />
    </Stack>
  );
};

export default TestLayout;
