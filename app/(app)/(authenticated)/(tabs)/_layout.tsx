import React from "react";

import { Tabs } from "expo-router";

import { TabBarIcon } from "@/shared/components/ui/TabBarIcon";
import { COLORS } from "@/shared/constants/colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.STONE_100,
        },
        headerTintColor: COLORS.WHITE,
        tabBarActiveTintColor: COLORS.WHITE,
        tabBarInactiveTintColor: COLORS.STONE_400,
        tabBarStyle: {
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
        },
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
