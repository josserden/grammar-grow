import React from "react";

import { Stack, useGlobalSearchParams, useRouter } from "expo-router";

import { Dialog, useDialog } from "@/shared/components/ui/Dialog";
import { GoBackButton } from "@/shared/components/ui/GoBackButton";
import { COLORS } from "@/shared/constants/colors";
import { useTestTitle } from "@/shared/hooks/useTestTitle";

const TestLayout = () => {
  const { title } = useTestTitle();
  const { level } = useGlobalSearchParams();
  const { back } = useRouter();
  const { open, close, visible } = useDialog();

  return (
    <>
      <Dialog visible={visible}>
        <Dialog.Title>Are you sure you want to exit?</Dialog.Title>
        <Dialog.Description>
          Lorem ipsum dolor sit amet consectetur. Quis enim nunc facilisis id.
        </Dialog.Description>
        <Dialog.Confirmation onPress={close}>Back to quiz</Dialog.Confirmation>
        <Dialog.Cancel
          onPress={() => {
            close();
            back();
          }}
        >
          Cancel quiz
        </Dialog.Cancel>
      </Dialog>

      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.STONE_100,
          },
          headerTintColor: COLORS.ZINC_900,
          headerTitleStyle: {
            fontFamily: "DelaGothicOne-Regular",
          },
        }}
      >
        <Stack.Screen
          name="[testId]"
          options={{
            headerLeft: () => <GoBackButton />,
            headerShadowVisible: false,
            title,
          }}
        />
        <Stack.Screen
          name="[level]"
          options={{
            headerLeft: () => <GoBackButton icon="close" confirmationFn={open} withConfirmation />,
            headerShadowVisible: false,
            title: `Level ${level}`,
            gestureEnabled: false,
          }}
        />
      </Stack>
    </>
  );
};

export default TestLayout;
