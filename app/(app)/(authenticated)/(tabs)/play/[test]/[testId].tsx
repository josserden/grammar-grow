import React from "react";
import { FlatList, View } from "react-native";

import { ArrowDown } from "@/shared/components/icons/decor/ArrowDown";
import { TestPage, TestPageProps } from "@/shared/components/screens/play/TestPage";
import { Wrapper } from "@/shared/components/ui/Wrapper";
import { COLORS } from "@/shared/constants/colors";

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

const TestId = () => {
  return (
    <Wrapper alignment="center" topInset={false} padding="none">
      <FlatList
        contentContainerClassName="mt-10 gap-4"
        data={levels}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ index, item }) => (
          <View className="items-center px-4">
            <View className="relative">
              <TestPage {...item} />
              <View className="absolute left-0 top-0 -z-10 h-full w-full rotate-2 rounded-[20px] bg-zinc-900" />
            </View>

            {index !== levels.length - 1 && <ArrowDown />}
          </View>
        )}
        showsVerticalScrollIndicator={false}
        refreshing
      />
    </Wrapper>
  );
};

export default TestId;
