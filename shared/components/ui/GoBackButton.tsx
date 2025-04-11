import React, { FC } from "react";
import { Alert, Modal, Pressable, Text, TouchableOpacity, View } from "react-native";

import { useRouter } from "expo-router";

import { ChevronWithCircle } from "@/shared/components/icons/ChevronWithCircle";
import { CloseWithCircle } from "@/shared/components/icons/CloseWithCircle";

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
      <Modal
        animationType="slide"
        transparent={true}
        visible={showConfirmation}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          toggleModal();
        }}
      >
        <View className="flex-1 items-center justify-center">
          <View className="w-full rounded-lg bg-white p-6 shadow-sm">
            <Text>Hello World!</Text>

            <Pressable onPress={toggleModal}>
              <Text>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <TouchableOpacity onPress={() => (withConfirmation ? toggleModal() : router.back())}>
        {icon === "chevron" ? <ChevronWithCircle /> : <CloseWithCircle />}
      </TouchableOpacity>
    </>
  );
};
