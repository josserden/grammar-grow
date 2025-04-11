import React, { FC } from "react";
import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";

import { useRouter } from "expo-router";

import { ChevronWithCircle } from "@/shared/components/icons/ChevronWithCircle";
import { CloseWithCircle } from "@/shared/components/icons/CloseWithCircle";
import { HeaderDecor } from "@/shared/components/icons/decor/HeaderDecor";
import { Button } from "@/shared/components/ui/Button";
import { Typography } from "@/shared/components/ui/Typography";

interface GoBackButtonProps {
  withConfirmation?: boolean;
  icon?: "chevron" | "close";
}

export const GoBackButton: FC<GoBackButtonProps> = ({
  withConfirmation = false,
  icon = "chevron",
}) => {
  const [showConfirmation, setShowConfirmation] = React.useState(false);
  const router = useRouter();

  const toggleModal = () => setShowConfirmation(!showConfirmation);

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={showConfirmation}>
        <View className="flex-1 items-center justify-end bg-black/70">
          <View className="relative w-full">
            <HeaderDecor
              style={{
                transform: [{ rotate: "180deg" }],
                position: "absolute",
                top: -56,
                left: 0,
              }}
            />
            <View className="bg-yellow-500 p-6">
              <Typography variant="title" className="mb-8 text-center">
                Are you sure you want to exit?
              </Typography>

              <Typography className="mb-56 text-center text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </Typography>

              <View className="gap-8">
                <Button variant="secondary" onPress={toggleModal} className="mb-4 w-full">
                  Back to quiz
                </Button>

                <TouchableOpacity className="mb-4 self-center px-2 py-1" onPress={router.back}>
                  <Typography>Cancel quiz</Typography>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity onPress={() => (withConfirmation ? toggleModal() : router.back())}>
        {icon === "chevron" ? <ChevronWithCircle /> : <CloseWithCircle />}
      </TouchableOpacity>
    </>
  );
};
