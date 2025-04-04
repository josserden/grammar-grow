import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Logout } from "@/shared/components/icons/Logout";
import { COLORS } from "@/shared/constants/colors";
import { cn } from "@/shared/lib/utils";

interface ButtonProps extends TouchableOpacityProps {
  variant?: "ghost" | "lock" | "primary" | "secondary";
}

export const Button: FC<ButtonProps> = ({ children, className, variant = "primary", ...props }) => {
  return (
    <TouchableOpacity
      {...props}
      className={cn(
        "flex-row items-center justify-center rounded-full border border-zinc-900 p-4",
        props.disabled ? "opacity-50" : "opacity-100",
        variant === "primary" && "bg-yellow-500",
        className
      )}
      style={variant !== "ghost" && styles.button}
    >
      <Text
        className={cn(
          "text-base text-black",
          variant === "ghost" ? "font-montserrat-medium" : "font-dela-gothic-one"
        )}
      >
        {children}
      </Text>

      {variant === "ghost" && <Logout style={styles.lock} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    elevation: 5,
    shadowColor: COLORS.ZINC_900,
    shadowOffset: { height: 5, width: 0 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },

  lock: {
    marginLeft: 12,
  },
});
