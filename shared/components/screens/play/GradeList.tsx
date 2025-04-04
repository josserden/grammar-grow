import * as React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

import { GradeCard } from "@/shared/components/screens/play/GradeCard";

const { width } = Dimensions.get("window");
const data = Array.from({ length: 12 }, (_, i) => i);

export const GradeList = () => {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  return (
    <Carousel
      containerStyle={styles.container}
      data={data}
      loop={false}
      mode="parallax"
      modeConfig={{
        parallaxScrollingOffset: 60,
        parallaxScrollingScale: 1,
      }}
      onProgressChange={progress}
      pagingEnabled={true}
      ref={ref}
      renderItem={({ index }) => <GradeCard index={index} />}
      snapEnabled={true}
      width={width}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 480,
    marginBottom: "auto",
    marginLeft: -14,
    marginTop: "auto",
    width: "100%",
  },
});
