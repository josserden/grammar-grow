import { FC } from "react";
import * as React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

import { GradeCard } from "@/shared/components/screens/play/GradeCard";
import { GradeListProps } from "@/shared/components/screens/play/GradeCard/GradeCard.types";

const { width } = Dimensions.get("window");

export const GradeList: FC<GradeListProps> = ({ levels }) => {
  const ref = React.useRef<ICarouselInstance>(null);

  return (
    <Carousel
      containerStyle={styles.container}
      data={levels}
      loop={false}
      mode="parallax"
      modeConfig={{
        parallaxScrollingOffset: 60,
        parallaxScrollingScale: 1,
      }}
      pagingEnabled={true}
      ref={ref}
      renderItem={({ item, animationValue }) => (
        <GradeCard level={item} animationValue={animationValue} />
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
