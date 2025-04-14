import { useEffect } from "react";
import { Alert, BackHandler, Platform } from "react-native";
import { Gesture } from "react-native-gesture-handler";

import { useRouter } from "expo-router";

export const usePreventLeftSwipe = () => {
  const router = useRouter();

  const blockAllGesture = Gesture.Pan()
    .onStart(() => true)
    .onUpdate(() => true)
    .onEnd(() => true)
    .runOnJS(true);

  const composedGesture =
    Platform.OS === "ios"
      ? Gesture.Simultaneous(
          blockAllGesture,
          Gesture.Pan().onStart(() => true)
        )
      : blockAllGesture;

  useEffect(() => {
    if (Platform.OS === "android") {
      const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
        // Показуємо діалог підтвердження виходу
        Alert.alert("Вихід з рівня", "Ви впевнені, що хочете вийти? Прогрес може бути втрачено.", [
          {
            text: "Скасувати",
            style: "cancel",
            onPress: () => null,
          },
          {
            text: "Вийти",
            style: "destructive",
            onPress: () => {
              // Повертаємось на попередню сторінку
              router.back();
            },
          },
        ]);
        // Повертаємо true, щоб заблокувати стандартну поведінку кнопки "Назад"
        return true;
      });

      // Очищаємо обробник при розмонтуванні компонента
      return () => backHandler.remove();
    }
  }, [router]);

  return {
    composedGesture,
  };
};
