import * as React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

import { GradeCard } from "@/shared/components/screens/play/GradeCard";

const { width } = Dimensions.get("window");
const data = Array.from({ length: 12 }, (_, i) => i);

export const GradeList = () => {
  const ref = React.useRef<ICarouselInstance>(null);

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
      pagingEnabled={true}
      ref={ref}
      renderItem={({ index, animationValue }) => (
        <GradeCard index={index} animationValue={animationValue} />
      )}
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
