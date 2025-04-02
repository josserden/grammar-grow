import React, { useEffect, useState } from "react";
import { Animated } from "react-native";

export const useAppInitialization = (loaded: boolean, error: Error | null) => {
  const [appIsReady, setAppIsReady] = useState(false);
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    async function prepare() {
      try {
        if (loaded) {
          Animated.timing(fadeAnim, {
            duration: 1000,
            toValue: 1,
            useNativeDriver: true,
          }).start();
        }
      } catch (e) {
        console.warn("Error in loading resources:", e);
      } finally {
        if (loaded || error) {
          setAppIsReady(true);
        }
      }
    }

    prepare();
  }, [loaded, error, fadeAnim]);

  return { appIsReady };
};
