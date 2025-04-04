import React from "react";

import { Stack } from "expo-router";

import { GoBackButton } from "@/shared/components/ui/GoBackButton";
import { COLORS } from "@/shared/constants/colors";

const StatisticLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.YELLOW_500,
        },
        headerTintColor: COLORS.ZINC_900,
        headerTitleStyle: {
          fontFamily: "DelaGothicOne-Regular",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerLeft: () => null, headerShadowVisible: false, title: "Profile" }}
      />
      <Stack.Screen
        name="settings"
        options={{
          headerLeft: () => <GoBackButton />,
          headerShadowVisible: false,
          title: "Personal data",
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          headerLeft: () => <GoBackButton />,
          headerShadowVisible: false,
          title: "About app",
        }}
      />
      <Stack.Screen
        name="policy"
        options={{
          headerLeft: () => <GoBackButton />,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: COLORS.STONE_100,
          },
          title: "Privacy Policy",
        }}
      />
    </Stack>
  );
};

export default StatisticLayout;
