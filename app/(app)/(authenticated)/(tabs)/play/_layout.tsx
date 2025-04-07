import React from "react";

import { Stack } from "expo-router";

const PlayLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShadowVisible: false, headerShown: false }} />
      <Stack.Screen name="[test]" options={{ headerShadowVisible: false, headerShown: false }} />
    </Stack>
  );
};

export default PlayLayout;
