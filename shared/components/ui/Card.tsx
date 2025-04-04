import React, { FC } from "react";
import { View, ViewProps } from "react-native";

import { Typography } from "@/shared/components/ui/Typography";
import { cn } from "@/shared/lib/utils";

interface CardProps extends ViewProps {
  title: string;
  titleClassName?: string;
}

export const Card: FC<CardProps> = ({ children, className, title, titleClassName, ...props }) => {
  return (
    <View className={cn("relative w-full rounded-[20px] p-4", className)} {...props}>
      <Typography className={cn("mb-10", titleClassName)} variant="sub-title">
        {title}
      </Typography>

      {children}
    </View>
  );
};
