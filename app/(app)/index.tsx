import React, { useEffect, useRef } from "react";
import { Animated, TouchableOpacity, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

import { Link, useRouter } from "expo-router";

import { FontAwesome6 } from "@expo/vector-icons";
import { defineStepper } from "@stepperize/react";

import { OnboardingHeader } from "@/shared/components/screens/ondoarding/OnboardingHeader";
import { Typography } from "@/shared/components/ui/Typography";
import { Wrapper } from "@/shared/components/ui/Wrapper";
import { ROUTES } from "@/shared/constants/routes";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const { useStepper, Scoped, utils } = defineStepper(
  {
    id: "first",
    title: "Learn with ease and fun!",
    description: "Play just a few minutes a day and gradually improve your skills.",
  },
  {
    id: "second",
    title: "Expand your skills and knowledge!",
    description: "Complete engaging challenges, compete with friends, and earn rewards.",
  },
  {
    id: "last",
    title: "Immerse yourself in English!",
    description: "Improve your English through interactive games and fun learning experiences.",
  }
);

const Onboarding = () => {
  const stepper = useStepper();
  const currentStep = utils.getIndex(stepper.current.id);
  const router = useRouter();

  // SVG parameters for the circular progress
  const size = 143;
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  // Create animated value for progress
  const animatedProgress = useRef(new Animated.Value(0)).current;

  // Calculate progress percentage
  const progress = ((currentStep + 1) / stepper.all.length) * 100;

  // Convert animated value to strokeDashoffset for the circle
  const strokeDashoffset = animatedProgress.interpolate({
    inputRange: [0, 100],
    outputRange: [circumference, 0],
    extrapolate: "clamp",
  });

  // Animate to new progress value when step changes
  useEffect(() => {
    Animated.timing(animatedProgress, {
      toValue: progress,
      duration: 500, // Animation duration in milliseconds
      useNativeDriver: true,
    }).start();
  }, [progress]);

  const handleStepChange = () => {
    if (stepper.isLast) {
      router.replace(ROUTES.LOGIN);
      stepper.reset();
    } else {
      stepper.next();
    }
  };

  return (
    <Scoped>
      <Wrapper alignment="start" topInset={false} padding="none">
        <OnboardingHeader currentStep={currentStep} />

        <View className="mb-8 mt-11 w-full self-center px-11">
          {stepper.when("first", (step) => (
            <>
              <Typography variant="title" className="mb-6 text-center">
                {step.title}
              </Typography>
              <Typography className="text-center">{step.description}</Typography>
            </>
          ))}

          {stepper.when("second", (step) => (
            <>
              <Typography variant="title" className="mb-6 text-center">
                {step.title}
              </Typography>
              <Typography className="text-center">{step.description}</Typography>
            </>
          ))}

          {stepper.when("last", (step) => (
            <>
              <Typography variant="title" className="mb-6 text-center">
                {step.title}
              </Typography>
              <Typography className="text-center">{step.description}</Typography>
            </>
          ))}
        </View>

        <TouchableOpacity
          className="relative h-[143px] w-[143px] items-center justify-center self-center rounded-full border-4 border-stone-200"
          onPress={handleStepChange}
        >
          <View className="h-[110px] w-[110px] items-center justify-center rounded-full bg-yellow-500">
            <FontAwesome6 color="black" name="arrow-right" size={40} />
          </View>

          {/* Progress circle using SVG with animation */}
          <View className="absolute left-1/2 top-1/2 h-[143px] w-[143px] -translate-x-1/2 -translate-y-1/2">
            <Svg height={size} width={size}>
              {/* Background circle (light gray) */}
              <Circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="#e5e5e5"
                strokeWidth={strokeWidth}
                fill="transparent"
              />
              {/* Animated progress circle (black) */}
              <AnimatedCircle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="#27272a" // zinc-700 color
                strokeWidth={strokeWidth}
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                transform={`rotate(-90, ${size / 2}, ${size / 2})`} // Start from top
              />
            </Svg>
          </View>
        </TouchableOpacity>

        <Link asChild href={ROUTES.LOGIN}>
          <TouchableOpacity className="mt-auto self-center">
            <Typography className="text-center">Skip</Typography>
          </TouchableOpacity>
        </Link>
      </Wrapper>
    </Scoped>
  );
};

export default Onboarding;
