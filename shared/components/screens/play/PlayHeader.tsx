import React, { FC } from "react";
import { View } from "react-native";

import { Avatar } from "@/shared/components/ui/Avatar";
import { ScoreLabel } from "@/shared/components/ui/ScoreLabel";
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

      <ScoreLabel score="2500" />
    </View>
  );
};
