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

export const Progress: FC<ProgressProps> = (props) => {
  return (
    <View className="absolute left-1/2 top-1/2 h-[143px] w-[143px] -translate-x-1/2 -translate-y-1/2">
      <Svg height={props.size} width={props.size}>
        {/* Background circle (light gray) */}
        <Circle
          cx={props.size / 2}
          cy={props.size / 2}
          r={props.radius}
          stroke="#0000000D"
          strokeWidth={props.strokeWidth}
          fill="transparent"
        />
        {/* Animated progress circle (black) */}
        <AnimatedCircle
          cx={props.size / 2}
          cy={props.size / 2}
          r={props.radius}
          stroke="#3A2E32"
          strokeWidth={props.strokeWidth}
          fill="transparent"
          strokeDasharray={props.circumference}
          strokeDashoffset={props.strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90, ${props.size / 2}, ${props.size / 2})`} // Start from top
        />
      </Svg>
    </View>
  );
};
