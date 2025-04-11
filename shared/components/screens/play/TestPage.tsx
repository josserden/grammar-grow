import React, { FC } from "react";
import { TouchableOpacity, View, ViewProps } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

import { Link, useGlobalSearchParams } from "expo-router";

import { Lock } from "@/shared/components/icons/Lock";
import { Typography } from "@/shared/components/ui/Typography";
import { COLORS } from "@/shared/constants/colors";
import { ROUTES } from "@/shared/constants/routes";

export interface TestPageProps extends ViewProps {
  id: string;
  description: string;
  color: string;
  isLocked?: boolean;
}

export const TestPage: FC<TestPageProps> = ({
  id,
  description,
  className,
  color,
  isLocked,
  ...props
}) => {
  const { test } = useGlobalSearchParams();

  return (
    <Link href={`${ROUTES.PLAY}/${test}/${id}`} asChild disabled={isLocked}>
      <TouchableOpacity
        className="relative w-full flex-row justify-between rounded-[20px] px-[22px] py-6"
        style={{
          backgroundColor: isLocked ? COLORS.STONE_400 : color,
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

        {isLocked ? (
          <Lock />
        ) : (
          <AnimatedCircularProgress
            size={74}
            width={7}
            fill={50}
            tintColor={COLORS.ZINC_900}
            backgroundColor={COLORS.WHITE}
            rotation={0}
            delay={300}
          >
            {(fill) => <Typography>{fill.toFixed(0)}%</Typography>}
          </AnimatedCircularProgress>
        )}
      </TouchableOpacity>
    </Link>
  );
};
