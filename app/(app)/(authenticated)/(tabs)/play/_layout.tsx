import { Stack } from 'expo-router';
import React from 'react';

const PlayLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShadowVisible: false, headerShown: false }} />
    </Stack>
  );
};

export default PlayLayout;
