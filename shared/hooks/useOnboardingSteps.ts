import { defineStepper } from "@stepperize/react";

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

export const useOnboardingSteps = () => {
  const stepper = useStepper();
  const currentStep = utils.getIndex(stepper.current.id);

  return { stepper, currentStep, Scoped };
};
