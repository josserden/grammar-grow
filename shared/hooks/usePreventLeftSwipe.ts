import { Platform } from "react-native";
import { Gesture } from "react-native-gesture-handler";

export const usePreventLeftSwipe = () => {
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

  return {
    composedGesture,
  };
};
