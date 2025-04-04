import React from "react";

import { Stack } from "expo-router";

import { GoBackButton } from "@/shared/components/ui/GoBackButton";
import { COLORS } from "@/shared/constants/colors";

const StatisticLayout = () => {
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
        name="index"
        options={{ headerLeft: () => null, headerShadowVisible: false, title: "Statistics" }}
      />
      <Stack.Screen
        name="achievements"
        options={{
          headerLeft: () => <GoBackButton />,
          headerShadowVisible: false,
          title: "Achievements",
        }}
      />
    </Stack>
  );
};

export default StatisticLayout;
