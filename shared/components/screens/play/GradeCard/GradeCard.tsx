import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";

import { Flag } from "@/shared/components/icons/Flag";
import { PlaySm } from "@/shared/components/icons/PlaySm";
import { PlayDecor } from "@/shared/components/icons/decor/PlayDecor";
import { GradeCardProps } from "@/shared/components/screens/play/GradeCard/GradeCard.types";
import { CustomLink } from "@/shared/components/ui/CustomLink";
import { Typography } from "@/shared/components/ui/Typography";
import { COLORS } from "@/shared/constants/colors";

export const GradeCard: FC<GradeCardProps> = ({
  animationValue,
  level: { rank, icon, href, tier, color },
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(animationValue.value, [-1, 0, 1], [0.3, 1, 0.3]);
    const rotate = interpolate(animationValue.value, [-1, 0, 1], [10, 0, -10]);

    return {
      opacity,
      transform: [{ rotateY: `${rotate}deg` }],
    };
  });

  return (
    <Animated.View style={animatedStyle}>
      <View style={styles.shadowStyle}>
        <View
          className="relative w-[326px] overflow-hidden rounded-[40px]"
          style={{ backgroundColor: color }}
        >
          <View className="px-8 pt-[58px]">
            <View className="mb-4 flex-row items-center justify-between">
              <Typography variant="title" className="min-h-16">
                {rank}
              </Typography>

              <View className="absolute -top-[58px] right-2 flex-row items-center gap-2">
                <Flag />
                <Typography
                  className="absolute left-1/2 top-2 -translate-x-1/2 text-white"
                  variant="sub-title"
                >
                  {tier}
                </Typography>
              </View>
            </View>

            <View className="h-2.5 overflow-hidden rounded-full border border-black bg-transparent">
              <View className="h-2 w-1/2 rounded-full border-r border-black bg-yellow-500" />
            </View>

            <Typography className="mb-5 mt-1 text-right">50%</Typography>

            <CustomLink
              className="mb-1 flex-row items-center justify-center gap-2 self-start rounded-full border border-zinc-900 bg-transparent px-5 py-2.5"
              href={href}
              title="Select"
            >
              <PlaySm />
            </CustomLink>
          </View>

          <View className="mt-2 w-full">
            <PlayDecor />
          </View>

          <View className="absolute bottom-0 left-1/2 -translate-x-1/2">{icon}</View>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  shadowStyle: {
    alignItems: "center",
    elevation: 8,
    shadowColor: COLORS.ZINC_900,
    shadowOffset: {
      height: 6,
      width: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
});
