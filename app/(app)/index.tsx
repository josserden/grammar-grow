import React from "react";
import { View } from "react-native";

import { useRouter } from "expo-router";

import { Step, Stepper } from "@stepperize/core";

import { Progress } from "@/shared/components/icons/onboarding/Progress";
import { ProgressButton } from "@/shared/components/icons/onboarding/ProgressButton";
import { OnboardingHeader } from "@/shared/components/screens/ondoarding/OnboardingHeader";
import { CustomLink } from "@/shared/components/ui/CustomLink";
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

  const data = {
    strokeDashoffset,
    radius,
    strokeWidth,
    size,
    circumference,
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

        <ProgressButton onPress={handleStepChange}>
          <Progress {...data} />
        </ProgressButton>

        <CustomLink
          href={ROUTES.LOGIN}
          className="mt-auto self-center"
          title="Skip"
          titleClassName="text-center"
        />
      </Wrapper>
    </Scoped>
  );
};

export default Onboarding;
