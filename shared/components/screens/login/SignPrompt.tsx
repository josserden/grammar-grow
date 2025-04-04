import React, { FC } from "react";
import { View } from "react-native";

import { Href } from "expo-router";

import { CustomLink } from "@/shared/components/ui/CustomLink";
import { Typography } from "@/shared/components/ui/Typography";
import { cn } from "@/shared/lib/utils";

interface SignPromptProps {
  className?: string;
  href: Href;
  linkText: string;
  prompt: string;
}

export const SignPrompt: FC<SignPromptProps> = ({ className, href, linkText, prompt }) => {
  return (
    <View className={cn("flex w-full flex-row items-center justify-center gap-1", className)}>
      <Typography className="font-montserrat-regular text-black/70">{prompt}</Typography>

      <CustomLink title={linkText} href={href} titleClassName="font-montserrat-semi-bold" />
    </View>
  );
};
