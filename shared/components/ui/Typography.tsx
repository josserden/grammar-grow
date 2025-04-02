import React, { FC } from "react";
import { Text } from "react-native";

import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/shared/lib/utils";

const typographyVariants = cva("text-zinc-900", {
  defaultVariants: {
    variant: "text",
  },
  variants: {
    variant: {
      "sub-title": "text-base font-dela-gothic-one",
      text: "font-montserrat-medium text-base",
      title: "text-[28px] leading-8 font-dela-gothic-one",
    },
  },
});

interface TypographyProps extends VariantProps<typeof typographyVariants> {
  children: React.ReactNode;
  className?: string;
}

export const Typography: FC<TypographyProps> = ({ children, className, variant }) => {
  return <Text className={cn(typographyVariants({ className, variant }))}>{children}</Text>;
};
