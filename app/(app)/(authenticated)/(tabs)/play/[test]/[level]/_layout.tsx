import React from "react";

import { Stack } from "expo-router";

import { COLORS } from "@/shared/constants/colors";

const LevelLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.STONE_100,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default LevelLayout;
