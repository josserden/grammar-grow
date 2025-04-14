import React, { FC, PropsWithChildren } from "react";
import {
  Modal,
  ModalProps,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

import { HeaderDecor } from "@/shared/components/icons/decor/HeaderDecor";
import { Button, ButtonProps } from "@/shared/components/ui/Button";
import { Typography } from "@/shared/components/ui/Typography";
import { COLORS } from "@/shared/constants/colors";
import { cn } from "@/shared/lib/utils";
import { WithClassName } from "@/shared/types/common";

interface DialogProps extends ModalProps {
  color?: "yellow" | "white";
}

const ModalComponent: FC<DialogProps> = ({ children, color = "yellow", ...props }) => {
  return (
    <Modal animationType="fade" transparent={true} {...props}>
      <View className="flex-1 items-center justify-end bg-black/70">
        <View className="relative w-full">
          <View className={cn("p-6", color === "yellow" ? "bg-yellow-500" : "bg-white")}>
            <HeaderDecor
              style={[styles.decor, color === "yellow" ? styles.yellow : styles.white]}
            />
            {children}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const ModalBody: FC<PropsWithChildren & WithClassName> = ({ children, className }) => {
  return <View className={cn("gap-8", className)}>{children}</View>;
};

const ModalTitle: FC<PropsWithChildren & WithClassName> = ({ children, className }) => {
  return (
    <Typography variant="title" className={cn("text-center", className)}>
      {children}
    </Typography>
  );
};

const ModalDescription: FC<PropsWithChildren & WithClassName> = ({ children, className }) => {
  return <Typography className={cn("text-center", className)}>{children}</Typography>;
};

const ModalConfirmation: FC<Omit<ButtonProps, "variant">> = ({ children, className, ...props }) => {
  return (
    <Button variant="secondary" className="w-full" {...props}>
      {children}
    </Button>
  );
};

const ModalCancel: FC<TouchableOpacityProps> = ({ children, className, ...props }) => {
  return (
    <TouchableOpacity className={cn("self-center px-2 py-1", className)} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export const Dialog = Object.assign(ModalComponent, {
  Body: ModalBody,
  Title: ModalTitle,
  Description: ModalDescription,
  Confirmation: ModalConfirmation,
  Cancel: ModalCancel,
});

export const useDialog = () => {
  const [visible, setVisible] = React.useState(false);

  const open = () => setVisible(true);
  const close = () => setVisible(false);

  return { visible, open, close };
};

const styles = StyleSheet.create({
  decor: {
    left: 0,
    position: "absolute",
    top: -56,
    transform: [{ rotate: "180deg" }],
  },
  white: {
    fill: COLORS.WHITE,
  },
  yellow: {
    fill: COLORS.YELLOW_500,
  },
});
