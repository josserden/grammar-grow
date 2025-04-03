import React, { FC, useEffect } from "react";
import { View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";

import { OnboardingFirstIcon } from "@/shared/components/icons/onboarding/OnboardingFirstIcon";
import { OnboardingLastIcon } from "@/shared/components/icons/onboarding/OnboardingLastIcon";
import { OnboardingSecondIcon } from "@/shared/components/icons/onboarding/OnboardingSecondIcon";
import { COLORS } from "@/shared/constants/colors";

interface OnboardingHeaderProps {
  currentStep: number;
}

const DURATION = 50;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const OnboardingHeader: FC<OnboardingHeaderProps> = ({ currentStep }) => {
  const color = useSharedValue(COLORS.YELLOW_500);
  const opacity = useSharedValue(0);
  const animatedProps = useAnimatedProps(() => ({ fill: color.value }));
  const animatedStyle = { opacity };

  useEffect(() => {
    switch (currentStep) {
      case 1:
        color.value = withTiming(COLORS.PINK_700, { duration: DURATION });
        break;
      case 2:
        color.value = withTiming(COLORS.TEAL_500, { duration: DURATION });
        break;
      default:
        color.value = withTiming(COLORS.YELLOW_500, { duration: DURATION });
        break;
    }

    opacity.value = 0;
    opacity.value = withTiming(1, { duration: DURATION });
  }, [currentStep, color, opacity]);

  const renderCurrentIconGroup = () => {
    switch (currentStep) {
      case 1:
        return <OnboardingSecondIcon />;
      case 2:
        return <OnboardingLastIcon />;
      default:
        return <OnboardingFirstIcon />;
    }
  };

  return (
    <View className="relative w-full">
      <Svg fill="none" height="378" viewBox="0 0 390 378" width="100%">
        <AnimatedCircle
          cx="194.5"
          cy="-9"
          r="384"
          stroke="#3A2E32"
          strokeWidth={6}
          animatedProps={animatedProps}
        />
      </Svg>

      <Animated.View
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={animatedStyle}
      >
        {renderCurrentIconGroup()}
      </Animated.View>
    </View>
  );
};
