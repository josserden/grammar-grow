import React, { FC, PropsWithChildren } from "react";
import { View } from "react-native";

import { Typography } from "@/shared/components/ui/Typography";

export const AuthProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View className="mb-9 w-full">
      <View className="mb-9 flex-row items-center">
        <View className="flex-1 border-b border-black" />
        <Typography className="mx-4 font-montserrat-regular text-black/70">Or with</Typography>
        <View className="flex-1 border-b border-black" />
      </View>

      <View className="flex-row items-center justify-center gap-4">{children}</View>
    </View>
  );
};
