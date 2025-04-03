import React from "react";
import { StatusBar } from "react-native";

import { Stack } from "expo-router";

const AppLayout = () => {
  return (
    <>
      <StatusBar hidden />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="register" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen
          name="forgot-password"
          options={{ headerShown: false, presentation: "modal" }}
        />
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
};

export default AppLayout;
