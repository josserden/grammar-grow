import React, { FC } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Apple } from "@/shared/components/icons/social/Apple";
import { Google } from "@/shared/components/icons/social/Google";
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
      {type === "apple" ? <Apple /> : <Google />}
      <Typography>{type === "apple" ? "Apple" : "Google"}</Typography>
    </TouchableOpacity>
  );
};
