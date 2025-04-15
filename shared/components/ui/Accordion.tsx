import React, { FC, useState } from "react";
import { Pressable, View } from "react-native";

import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Typography } from "@/shared/components/ui/Typography";
import { COLORS } from "@/shared/constants/colors";
import { cn } from "@/shared/lib/utils";
import { Answer } from "@/shared/types/Quiz.types";

export interface AccordionProps {
  score: number;
  total: number;
  answers: Answer[];
}

export const Accordion: FC<AccordionProps> = ({ score, total, answers }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View className="mb-10">
      <Pressable
        className={cn(
          "w-full flex-row items-center justify-between rounded-t-[40px] border border-zinc-900 bg-white px-4 py-5",
          isOpen ? "rounded-b-0" : "rounded-b-[40px]"
        )}
        onPress={toggleAccordion}
      >
        <View className="flex-row items-center justify-center gap-1">
          <Typography className="font-montserrat-semi-bold">
            {score}/{total}
          </Typography>
          <Typography className="font-montserrat-regular">correct answers</Typography>
        </View>
        <Entypo
          name="chevron-thin-down"
          size={16}
          color="black"
          style={{
            transform: [{ rotate: isOpen ? "180deg" : "0deg" }],
          }}
        />
      </Pressable>

      {isOpen && (
        <View className="flex-row flex-wrap items-center justify-between gap-3 rounded-b-[40px] border border-t-0 border-zinc-900 bg-white px-4 py-5">
          {answers.map((answer, index) => (
            <View
              key={index}
              className="h-7 w-14 items-center justify-center rounded-[40px]"
              style={{ backgroundColor: answer.isCorrect ? COLORS.TEAL_500 : COLORS.ORANGE_700 }}
            >
              <Ionicons
                name={answer.isCorrect ? "checkmark-circle-outline" : "close-circle-outline"}
                size={20}
                color="black"
              />
            </View>
          ))}
        </View>
      )}
    </View>
  );
};
