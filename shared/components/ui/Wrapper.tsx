import React, { FC } from "react";
import { View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/shared/lib/utils";

const wrapperVariants = cva("flex-1 bg-stone-100", {
  defaultVariants: {
    padding: "normal",
    alignment: "center",
  },
  variants: {
    padding: {
      none: "",
      normal: "px-4",
    },
    alignment: {
      center: "items-center justify-center",
      start: "items-start justify-start",
    },
  },
});

interface WrapperProps extends ViewProps, VariantProps<typeof wrapperVariants> {
  topInset?: boolean;
  bottomInset?: boolean;
}

export const Wrapper: FC<WrapperProps> = ({
  children,
  className,
  alignment,
  padding,
  topInset = true,
  bottomInset = true,
  style,
  ...props
}) => {
  const insets = useSafeAreaInsets();

  const safeAreaStyle = {
    paddingTop: topInset ? insets.top : 0,
    paddingBottom: bottomInset ? insets.bottom : 0,
  };

  return (
    <View
      className={cn(wrapperVariants({ alignment, padding }), className)}
      style={[safeAreaStyle, style]}
      {...props}
    >
      {children}
    </View>
  );
};
