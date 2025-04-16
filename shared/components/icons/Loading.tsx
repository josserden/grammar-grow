import React, { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import Svg, { Circle, G, Mask, Path, Rect, SvgProps } from "react-native-svg";

import { COLORS } from "@/shared/constants/colors";

const ANIMATION_DURATION = 10000;

export const Loading = ({ ...props }: SvgProps) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const leftEyeX = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [133.5, 181.5, 133.5],
  });

  const rightEyeX = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [298.5, 346.5, 298.5],
  });

  const progressWidth = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 300, 0],
  });

  useEffect(() => {
    const animation = Animated.timing(animatedValue, {
      toValue: 1,
      duration: ANIMATION_DURATION,
      easing: Easing.linear,
      useNativeDriver: false,
    });

    const loopedAnimation = Animated.loop(animation);

    loopedAnimation.start();

    return () => {
      loopedAnimation.stop();
      animatedValue.setValue(0);
    };
  }, [animatedValue]);

  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const AnimatedRect = Animated.createAnimatedComponent(Rect);

  return (
    <Svg width="481" height="468" viewBox="0 0 481 468" fill="none" {...props}>
      <Circle cx="157.5" cy="207.5" r="47.5" fill="white" />
      <Circle cx="322.5" cy="207.5" r="47.5" fill="white" />
      <Path
        d="M261.109 244.327C261.109 258.507 251.722 270 240.145 270C228.569 270 219.181 258.507 219.181 244.327C219.181 230.147 228.569 218.654 240.145 218.654C251.722 218.654 261.109 230.147 261.109 244.327Z"
        fill="#3A2E32"
      />
      <Path
        d="M231.497 244.327C227.052 244.327 222.954 246.04 219.559 248.93C221.332 260.906 229.852 269.999 240.145 269.999C244.59 269.999 248.695 268.286 252.084 265.396C250.31 253.42 241.79 244.327 231.497 244.327Z"
        fill="#F27253"
      />
      <Path
        d="M157.036 111.903C147.769 115.215 138.993 119.713 129.363 121.962C117.546 124.724 122.549 142.918 134.382 140.156C144.004 137.908 152.788 133.402 162.055 130.097C173.404 126.037 168.507 107.805 157.036 111.903Z"
        fill="#3A2E32"
      />
      <Path
        d="M318.018 111.596C327.285 114.909 336.061 119.406 345.69 121.655C357.508 124.417 352.505 142.619 340.672 139.85C331.05 137.601 322.266 133.095 312.999 129.79C301.65 125.738 306.539 107.498 318.018 111.596Z"
        fill="#3A2E32"
      />
      <Mask
        id="mask0_492_1035"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="110"
        y="160"
        width="95"
        height="95"
      >
        <Circle cx="157.5" cy="207.5" r="47.5" fill="white" />
      </Mask>
      <G mask="url(#mask0_492_1035)">
        <AnimatedCircle cx={leftEyeX} cy="227.5" r="47.5" fill="#3A2E32" />
      </G>
      <Mask
        id="mask1_492_1035"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="275"
        y="160"
        width="95"
        height="95"
      >
        <Circle cx="322.5" cy="207.5" r="47.5" fill="white" />
      </Mask>
      <G mask="url(#mask1_492_1035)">
        <AnimatedCircle cx={rightEyeX} cy="227.5" r="47.5" fill="#3A2E32" />
      </G>

      <AnimatedRect
        x="90"
        y="310"
        width={progressWidth}
        height="16"
        rx="8"
        fill={COLORS.ORANGE_700}
      />

      <Rect x="90.5" y="310.5" width="299" height="15" rx="7.5" stroke="black" />
    </Svg>
  );
};
