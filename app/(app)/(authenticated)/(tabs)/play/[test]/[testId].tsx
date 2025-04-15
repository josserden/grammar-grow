import React, { useEffect, useRef } from "react";
import { Animated, Easing, FlatList, View } from "react-native";

import { ArrowDown } from "@/shared/components/icons/decor/ArrowDown";
import { TestPage, TestPageProps } from "@/shared/components/screens/play/TestPage";
import { Wrapper } from "@/shared/components/ui/Wrapper";
import { COLORS } from "@/shared/constants/colors";

interface AnimatedItemProps {
  item: TestPageProps;
  index: number;
  animatedValues: Animated.Value[];
}

const levels: TestPageProps[] = [
  {
    id: "1",
    description: "This is level 1",
    color: COLORS.YELLOW_500,
  },
  {
    id: "2",
    description: "This is level 2",
    color: COLORS.TEAL_500,
  },
  {
    id: "3",
    description: "This is level 3",
    color: COLORS.PINK_700,
  },
  {
    id: "4",
    description: "This is level 4",
    color: COLORS.BLUE_300,
  },
  {
    id: "5",
    description: "This is level 5",
    color: COLORS.ORANGE_700,
  },
  {
    id: "6",
    description: "This is level 6",
    color: COLORS.YELLOW_500,
  },
  {
    id: "7",
    description: "This is level 7",
    color: COLORS.TEAL_500,
  },
  {
    id: "8",
    description: "This is level 8",
    color: COLORS.PINK_700,
  },
  {
    id: "9",
    description: "This is level 9",
    color: COLORS.BLUE_300,
  },
  {
    id: "10",
    description: "This is level 10",
    color: COLORS.ORANGE_700,
  },
];

const AnimatedItem = ({ item, index, animatedValues }: AnimatedItemProps) => {
  const animatedStyle = {
    opacity: animatedValues[index],
    transform: [
      {
        translateY: animatedValues[index].interpolate({
          inputRange: [0, 1],
          outputRange: [50, 0],
        }),
      },
    ],
  };

  return (
    <Animated.View style={animatedStyle} className="items-center px-4">
      <View className="relative">
        <TestPage {...item} />
        <View className="absolute left-0 top-0 -z-10 h-full w-full rotate-2 rounded-[20px] bg-zinc-900" />
      </View>

      {index !== levels.length - 1 && <ArrowDown />}
    </Animated.View>
  );
};

const TestId = () => {
  const animatedValues = useRef(levels.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    const animations = animatedValues.map((value, index) => {
      return Animated.timing(value, {
        toValue: 1,
        duration: 200,
        delay: index * 50,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      });
    });

    Animated.stagger(100, animations).start();
  }, [animatedValues]);

  return (
    <Wrapper alignment="center" topInset={false} padding="none">
      <FlatList
        contentContainerClassName="mt-10 gap-4"
        data={levels}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <AnimatedItem item={item} index={index} animatedValues={animatedValues} />
        )}
        showsVerticalScrollIndicator={false}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
      />
    </Wrapper>
  );
};

export default TestId;
