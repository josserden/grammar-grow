import React, { FC } from "react";
import { View, ViewProps } from "react-native";

import { Star } from "@/shared/components/icons/Star";
import { Typography } from "@/shared/components/ui/Typography";
import { cn } from "@/shared/lib/utils";

interface ScoreLabelProps extends ViewProps {
  isReverse?: boolean;
  score: string;
  size?: "sm" | "lg";
}

export const ScoreLabel: FC<ScoreLabelProps> = ({
  className,
  isReverse = false,
  score,
  size = "sm",
}) => {
  return (
    <View
      className={cn(
        "items-center gap-2 rounded-full border",
        isReverse
          ? "flex-row-reverse border-zinc-900 bg-white px-3 py-2.5"
          : "flex-row border-stone-300 p-0.5",
        className
      )}
    >
      <Star />
      <Typography
        className={cn("font-montserrat-semi-bold", size === "sm" ? "text-sm" : "text-lg")}
      >
        {score}
      </Typography>
    </View>
  );
};
