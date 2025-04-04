import React, { useEffect } from "react";
import { StatusBar } from "react-native";

import { Stack, useRouter, useSegments } from "expo-router";

import { useAsyncStorageDevTools } from "@dev-plugins/async-storage";

import { ROUTES } from "@/shared/constants/routes";
import { useAuthContext } from "@/shared/context/auth-context";

const AppLayout = () => {
  useAsyncStorageDevTools();

  const { initialized, session } = useAuthContext();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    if (!initialized) return;

    const inAuthGroup = segments[1] === "(authenticated)";

    if (session && !inAuthGroup) {
      router.replace(ROUTES.PLAY);
    } else if (!session && inAuthGroup) {
      router.replace(ROUTES.HOME);
    }
  }, [session, initialized, segments, router]);

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
