import React, { FC } from "react";
import { TouchableOpacity } from "react-native";

import { useRouter } from "expo-router";

import { ChevronWithCircle } from "@/shared/components/icons/ChevronWithCircle";
import { CloseWithCircle } from "@/shared/components/icons/CloseWithCircle";

interface GoBackButtonProps {
  withConfirmation?: boolean;
  icon?: "chevron" | "close";
  confirmationFn?: () => void;
}

export const GoBackButton: FC<GoBackButtonProps> = ({
  withConfirmation = false,
  icon = "chevron",
  confirmationFn = () => {},
}) => {
  const router = useRouter();

  return (
    <>
      <TouchableOpacity onPress={() => (withConfirmation ? confirmationFn() : router.back())}>
        {icon === "chevron" ? <ChevronWithCircle /> : <CloseWithCircle />}
      </TouchableOpacity>
    </>
  );
};
