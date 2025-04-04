import React, { FC } from "react";
import { View } from "react-native";

import { Chart } from "@/shared/components/icons/tab/Chart";
import { Cup } from "@/shared/components/icons/tab/Cup";
import { Play } from "@/shared/components/icons/tab/Play";
import { User } from "@/shared/components/icons/tab/User";
import { cn } from "@/shared/lib/utils";
import { TabBarButtonProps } from "@/shared/types/TabBarIcon.types";

export const TabBarIcon: FC<TabBarButtonProps> = ({ color, focused, icon }) => {
  const renderIcon = () => {
    switch (icon) {
      case "chart":
        return <Chart color={color} focused={focused} />;
      case "cup":
        return <Cup color={color} focused={focused} />;
      case "play":
        return <Play color={color} focused={focused} />;
      default:
        return <User color={color} focused={focused} />;
    }
  };

  return (
    <View
      className={cn(
        "flex h-14 w-14 items-center justify-center rounded-full",
        focused ? "bg-yellow-500" : "bg-white"
      )}
    >
      {renderIcon()}
    </View>
  );
};
