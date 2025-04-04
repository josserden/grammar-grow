import * as React from "react";
import { Dimensions, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

import { GradeCard } from "@/shared/components/screens/play/GradeCard";

const { width } = Dimensions.get("window");
const data = Array.from({ length: 12 }, (_, i) => i);

export const GradeList = () => {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

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
