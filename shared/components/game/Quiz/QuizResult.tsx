import React, { FC } from "react";
import { Modal, View } from "react-native";

import { Accordion, AccordionProps } from "@/shared/components/ui/Accordion";
import { Button } from "@/shared/components/ui/Button";
import { ScoreLabel } from "@/shared/components/ui/ScoreLabel";
import { Typography } from "@/shared/components/ui/Typography";
import { Wrapper } from "@/shared/components/ui/Wrapper";

interface QuizResultProps extends AccordionProps {
  onFinish: () => void;
  points: number;
}

export const QuizResult: FC<QuizResultProps> = ({ score, total, answers, onFinish }) => {
  const transformedScore = score > 0 ? `+ ${score}` : `${score}`;

  return (
    <Modal animationType="fade" visible>
      <Wrapper alignment="start" className="flex-1 items-center justify-start bg-yellow-500">
        <View className="mb-64 items-center gap-5">
          <ScoreLabel isReverse score={transformedScore} size="lg" />

          <Typography variant="title" className="text-[40px] leading-tight">
            Good job!
          </Typography>

          <Typography>Lorem ipsum dolor sit amet consectetur.</Typography>
        </View>

        <View className="w-full px-6">
          <Accordion score={score} answers={answers} total={total} />

          <Button variant="secondary" className="w-full" onPress={onFinish}>
            Done
          </Button>
        </View>
      </Wrapper>
    </Modal>
  );
};
