import React, { FC } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import { Typography } from "@/shared/components/ui/Typography";

interface SignButtonProps extends TouchableOpacityProps {
  type: "apple" | "google";
}

export const ProviderButton: FC<SignButtonProps> = ({ type, ...props }) => {
  return (
    <TouchableOpacity
      className="flex-1 flex-row items-center justify-center gap-2 rounded-xl border border-zinc-900 p-5"
      {...props}
    >
      <Ionicons color="black" name={type === "apple" ? "logo-apple" : "logo-google"} size={20} />
      <Typography>{type === "apple" ? "Apple" : "Google"}</Typography>
    </TouchableOpacity>
  );
};
