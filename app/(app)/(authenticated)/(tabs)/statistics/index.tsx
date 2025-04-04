import React from "react";
import { View } from "react-native";

import Entypo from "@expo/vector-icons/Entypo";

import { AchievementsList } from "@/shared/components/screens/achievements/AchievementsList";
import { StatisticCard } from "@/shared/components/screens/statistics/StatisticCard";
import { CustomLink } from "@/shared/components/ui/CustomLink";
import { Typography } from "@/shared/components/ui/Typography";
import { Wrapper } from "@/shared/components/ui/Wrapper";
import { ROUTES } from "@/shared/constants/routes";

const Index = () => {
  return (
    <Wrapper alignment="start" topInset={false}>
      <StatisticCard />

      <View className="mt-10 w-full flex-row justify-between">
        <Typography variant="sub-title">My achievements:</Typography>

        <CustomLink
          className="flex-row items-center"
          href={ROUTES.ACHIEVEMENTS}
          title="View all"
          titleClassName="font-montserrat-semi-bold"
        >
          <Entypo color="black" name="chevron-small-right" size={20} />
        </CustomLink>
      </View>

      <AchievementsList type="horizontal" />
    </Wrapper>
  );
};

export default Index;
