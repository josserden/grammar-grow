import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Switch, View } from 'react-native';

import { ProfileScreenWrapper } from '@/shared/components/screens/profile/profile-screen-wrapper';
import { Input } from '@/shared/components/ui/input';
import { Typography } from '@/shared/components/ui/typography';

const Settings = () => {
  const form = useForm({
    mode: 'onChange',
  });

  return (
    <ProfileScreenWrapper>
      <Typography className="mb-4 font-montserrat-bold text-lg">Personal data:</Typography>

      <View className="mb-10">
        <FormProvider {...form}>
          <Input className="mb-5" name="name" placeholder="Mariia" />
          <Input className="mb-5" name="password" placeholder="Password" secureTextEntry />
        </FormProvider>
      </View>

      <Typography className="mb-4 font-montserrat-bold text-lg">Settings:</Typography>

      <View className="flex-row items-center justify-between">
        <Typography className="font-montserrat-regular text-lg">Push - Notifications </Typography>
        <Switch />
      </View>
    </ProfileScreenWrapper>
  );
};

export default Settings;
