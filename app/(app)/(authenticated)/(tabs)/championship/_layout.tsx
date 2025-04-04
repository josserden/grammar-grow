import { Stack } from 'expo-router';
import React from 'react';

import { COLORS } from '@/shared/constants/colors';

const ChampionshipLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.STONE_100,
        },
        headerTintColor: COLORS.ZINC_900,
        headerTitleStyle: {
          fontFamily: 'DelaGothicOne-Regular',
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShadowVisible: false, title: 'Championship' }} />
    </Stack>
  );
};

export default ChampionshipLayout;
