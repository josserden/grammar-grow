import React, { FC } from "react";
import { View, ViewProps } from "react-native";

import { cn } from "@/shared/lib/utils";

interface AvatarProps extends ViewProps {
  size?: "lg" | "sm";
}

export const Avatar: FC<AvatarProps> = ({ className, size = "lg" }) => {
  return (
    <View
      className={cn(
        "items-center justify-center rounded-full border-4 border-white bg-stone-200",
        size === "lg" ? "h-[140px] w-[140px]" : "h-[40px] w-[40px]",
        className
      )}
    />
  );
};
