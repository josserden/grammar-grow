import React, { FC } from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import { FontAwesome6 } from "@expo/vector-icons";

export const ProgressButton: FC<TouchableOpacityProps> = ({ children, ...props }) => {
  return (
    <TouchableOpacity
      className="relative h-[143px] w-[143px] items-center justify-center self-center rounded-full border-4 border-stone-200"
      {...props}
    >
      <View className="h-[110px] w-[110px] items-center justify-center rounded-full bg-yellow-500">
        <FontAwesome6 color="black" name="arrow-right" size={40} />
      </View>
      {children}
    </TouchableOpacity>
  );
};
