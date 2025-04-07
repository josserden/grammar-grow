import React, { FC } from "react";
import { TouchableOpacity, View, ViewProps } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

import { Link } from "expo-router";

import { Typography } from "@/shared/components/ui/Typography";
import { COLORS } from "@/shared/constants/colors";
import { ROUTES } from "@/shared/constants/routes";

export interface TestPageProps extends ViewProps {
  id: string;
  description: string;
  color: string;
}

export const TestPage: FC<TestPageProps> = ({ id, description, className, color, ...props }) => {
  return (
    <Link href={ROUTES.PLAY} asChild>
      <TouchableOpacity
        className="relative w-full flex-row justify-between rounded-[20px] px-[22px] py-6"
        style={{
          backgroundColor: color,
        }}
        activeOpacity={0.85}
        {...props}
      >
        <View>
          <Typography variant="sub-title" className="mb-3.5 text-[18px]">
            Level {id}
          </Typography>
          <Typography className="text-sm font-normal">{description}</Typography>
        </View>

        <AnimatedCircularProgress
          size={74}
          width={7}
          fill={50}
          tintColor={COLORS.ZINC_900}
          backgroundColor={COLORS.WHITE}
          rotation={0}
        >
          {(fill) => <Typography>{fill.toFixed(0)}%</Typography>}
        </AnimatedCircularProgress>
      </TouchableOpacity>
    </Link>
  );
};
