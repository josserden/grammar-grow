import { useEffect, useRef } from "react";
import { Animated } from "react-native";

import { Step, Stepper } from "@stepperize/core";

export const useOnboardingProgress = (currentStep: number, stepper: Stepper<Step[]>) => {
  const size = 143;
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  const progress = ((currentStep + 1) / stepper.all.length) * 100;

  const animatedProgress = useRef(new Animated.Value(0)).current;

  const strokeDashoffset = animatedProgress.interpolate({
    inputRange: [0, 100],
    outputRange: [circumference, 0],
    extrapolate: "clamp",
  });

  useEffect(() => {
    Animated.timing(animatedProgress, {
      toValue: progress,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [animatedProgress, progress]);

  return {
    strokeDashoffset,
    radius,
    strokeWidth,
    size,
    circumference,
  };
};
