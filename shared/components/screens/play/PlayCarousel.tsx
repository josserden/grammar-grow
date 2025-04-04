import * as React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Extrapolation, interpolate, useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance, Pagination } from "react-native-reanimated-carousel";

import { PlayCard } from "@/shared/components/screens/play/PlayCard";
import { COLORS } from "@/shared/constants/colors";

const { width } = Dimensions.get("window");
const data = [];

export const PlayCarousel = () => {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const customReanimatedStyle = (progress: number, index: number, length: number) => {
    let val = Math.abs(progress - index);

    if (index === 0 && progress > length - 1) {
      val = Math.abs(progress - length);
    }

    return {
      transform: [
        {
          translateY: interpolate(val, [0, 1], [0, 0], Extrapolation.CLAMP),
        },
      ],
    };
  };

  return (
    <View>
      <Carousel
        data={data}
        height={490}
        loop={false}
        mode="parallax"
        modeConfig={{
          parallaxScrollingOffset: 45,
          parallaxScrollingScale: 1,
        }}
        onProgressChange={progress}
        pagingEnabled={true}
        ref={ref}
        renderItem={({ index }) => <PlayCard index={index} />}
        snapEnabled={true}
        width={width}
      />

      <Pagination.Custom
        activeDotStyle={styles.activeDot}
        containerStyle={styles.containerStyle}
        customReanimatedStyle={customReanimatedStyle}
        data={data}
        dotStyle={styles.dot}
        horizontal
        progress={progress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  activeDot: {
    backgroundColor: COLORS.ZINC_900,
    borderRadius: 14,
    height: 6,
    overflow: "hidden",
    width: 27,
  },
  containerStyle: {
    alignItems: "center",
    gap: 5,
    marginBottom: 10,
  },
  dot: {
    backgroundColor: COLORS.STONE_400,
    borderRadius: 14,
    height: 6,
    width: 7,
  },
});
