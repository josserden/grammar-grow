import React from "react";

import { Stack } from "expo-router";

const TestLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="[testId]" options={{ headerShadowVisible: false, headerShown: false }} />
    </Stack>
  );
};

export default TestLayout;
