import React, { FC } from "react";
import { Animated, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

import AnimatedInterpolation = Animated.AnimatedInterpolation;

interface ProgressProps {
  strokeDashoffset: AnimatedInterpolation<number | string>;
  circumference: number;
  strokeWidth: number;
  radius: number;
  size: number;
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const Progress: FC<ProgressProps> = ({
  strokeDashoffset,
  circumference,
  strokeWidth,
  radius,
  size,
}) => {
  return (
    <View className="absolute left-1/2 top-1/2 h-[143px] w-[143px] -translate-x-1/2 -translate-y-1/2">
      <Svg height={size} width={size}>
        {/* Background circle (light gray) */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#0000000D"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Animated progress circle (black) */}
        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#3A2E32"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90, ${size / 2}, ${size / 2})`} // Start from top
        />
      </Svg>
    </View>
  );
};
