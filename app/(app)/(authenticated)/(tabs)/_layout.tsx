import React from "react";

import { Tabs, useSegments } from "expo-router";

import { TabBarIcon } from "@/shared/components/ui/TabBarIcon";
import { COLORS } from "@/shared/constants/colors";

export default function TabLayout() {
  const segments = useSegments();

  const currentSegment = segments.length > 0 ? segments[segments.length - 1] : "";
  const segmentsToHideTabBar = ["[level]", "achievements", "settings", "about", "policy"];

  const baseTabBarStyle = {
    backgroundColor: COLORS.WHITE,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    borderTopWidth: 0,
    elevation: 10,
    height: 88,
    paddingTop: 24,
    shadowColor: "#4B34251F",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.12,
    shadowRadius: 32,
  } as const;

  const shouldHideTabBar = segmentsToHideTabBar.includes(currentSegment) || segments.length >= 6;
  const tabBarStyle = shouldHideTabBar ? { display: "none" as const } : baseTabBarStyle;

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.STONE_100,
        },
        headerTintColor: COLORS.WHITE,
        tabBarActiveTintColor: COLORS.WHITE,
        tabBarInactiveTintColor: COLORS.STONE_400,
        tabBarStyle,
      }}
    >
      <Tabs.Screen
        name="statistics"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon color={color} focused={focused} icon="chart" />
          ),
          title: "",
        }}
      />
      <Tabs.Screen
        name="play"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon color={color} focused={focused} icon="play" />
          ),
          title: "",
        }}
      />
      <Tabs.Screen
        name="championship"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon color={color} focused={focused} icon="cup" />
          ),
          title: "",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon color={color} focused={focused} icon="user" />
          ),
          title: "",
        }}
      />
    </Tabs>
  );
}
