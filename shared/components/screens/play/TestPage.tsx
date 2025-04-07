import React, { FC } from "react";
import { View } from "react-native";

import { Typography } from "@/shared/components/ui/Typography";

export interface TestPageProps {
  id: number;
  description: string;
  color: string;
}

export const TestPage: FC<TestPageProps> = ({ id, description, color }) => {
  return (
    <View
      className="w-full rounded-[20px] px-[22px] py-6"
      style={{
        backgroundColor: color,
      }}
    >
      <Typography variant="sub-title" className="mb-3.5 text-[18px]">
        Level {id}
      </Typography>
      <Typography className="text-sm font-normal">{description}</Typography>
    </View>
  );
};
