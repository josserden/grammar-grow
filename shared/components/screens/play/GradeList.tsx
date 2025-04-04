import * as React from "react";
import { Dimensions, View } from "react-native";
import { Extrapolation, interpolate, useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

import { GradeCard } from "@/shared/components/screens/play/GradeCard";

const { width } = Dimensions.get("window");
const data = Array.from({ length: 12 }, (_, i) => i);

export const GradeList = () => {
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
        renderItem={({ index }) => <GradeCard index={index} />}
        snapEnabled={true}
        width={width}
      />
    </View>
  );
};
