import React, { FC } from "react";
import { View } from "react-native";

import { Star } from "@/shared/components/icons/Star";
import { Avatar } from "@/shared/components/ui/Avatar";
import { Typography } from "@/shared/components/ui/Typography";

export const PlayHeader: FC = () => {
  return (
    <View className="mb-16 flex w-full flex-row items-center justify-between">
      <View className="flex flex-row items-center gap-2">
        <Avatar size="sm" />
        <View>
          <Typography className="font-montserrat-regular">Hi, Mariia</Typography>
          <Typography variant="sub-title">Let’s play!</Typography>
        </View>
      </View>

      <View className="flex flex-row items-center gap-2 rounded-full border border-stone-300 p-0.5">
        <Star />
        <Typography className="font-montserrat-semi-bold text-sm">2,500</Typography>
      </View>
    </View>
  );
};
