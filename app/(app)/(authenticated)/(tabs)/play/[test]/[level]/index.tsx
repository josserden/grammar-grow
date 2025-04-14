import React from "react";
import { View } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";

import { useLocalSearchParams, useRouter } from "expo-router";

import { Dialog } from "@/shared/components/ui/Dialog";
import { Typography } from "@/shared/components/ui/Typography";
import { Wrapper } from "@/shared/components/ui/Wrapper";
import { usePreventLeftSwipe } from "@/shared/hooks/usePreventLeftSwipe";
import { useAppStore } from "@/shared/store/store";

const Index = () => {
  const { test, level } = useLocalSearchParams();
  const { composedGesture } = usePreventLeftSwipe();
  const { back } = useRouter();

  const isVisible = useAppStore((state) => state.isVisible);
  const close = useAppStore((state) => state.close);

  const handleCancel = () => {
    close();
    back();
  };

  return (
    <>
      <GestureDetector gesture={composedGesture}>
        <Wrapper alignment="start" topInset={false} className="items-center">
          <View className="mb-16 mt-10 flex-row items-center justify-center gap-1">
            {Array.from({ length: 10 }, (_, index) => (
              <View key={index} className="h-2 w-7 rounded border border-zinc-900 bg-yellow-500" />
            ))}
          </View>

          <Typography variant="title">Test: {test}</Typography>
          <Typography variant="sub-title">Level Id: {level}</Typography>
        </Wrapper>
      </GestureDetector>

      <Dialog visible={isVisible}>
        <Dialog.Title>Are you sure you want to exit?</Dialog.Title>
        <Dialog.Description>
          Lorem ipsum dolor sit amet consectetur. Quis enim nunc facilisis id.
        </Dialog.Description>
        <Dialog.Confirmation onPress={close}>Back to quiz</Dialog.Confirmation>
        <Dialog.Cancel onPress={handleCancel}>Cancel quiz</Dialog.Cancel>
      </Dialog>
    </>
  );
};

export default Index;
