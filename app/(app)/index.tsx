import React from "react";
import { TouchableOpacity, View } from "react-native";

import { Link, useRouter } from "expo-router";

import { FontAwesome6 } from "@expo/vector-icons";
import { Step, Stepper } from "@stepperize/core";

import { Progress } from "@/shared/components/icons/onboarding/Progress";
import { OnboardingHeader } from "@/shared/components/screens/ondoarding/OnboardingHeader";
import { Typography } from "@/shared/components/ui/Typography";
import { Wrapper } from "@/shared/components/ui/Wrapper";
import { ROUTES } from "@/shared/constants/routes";
import { useOnboardingProgress } from "@/shared/hooks/useOnboardingProgress";
import { useOnboardingSteps } from "@/shared/hooks/useOnboardingSteps";

const Onboarding = () => {
  const router = useRouter();
  const { stepper, currentStep, Scoped } = useOnboardingSteps();
  const { strokeDashoffset, radius, strokeWidth, size, circumference } = useOnboardingProgress(
    currentStep,
    stepper as unknown as Stepper<Step[]>
  );

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

          <Progress
            strokeDashoffset={strokeDashoffset}
            radius={radius}
            strokeWidth={strokeWidth}
            size={size}
            circumference={circumference}
          />
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
