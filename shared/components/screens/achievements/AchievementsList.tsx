import React, { FC } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";

import { AchievementIcon } from "@/shared/components/icons/AchievementIcon";
import { achievements } from "@/shared/components/screens/achievements/AchievementsList.options";
import { Typography } from "@/shared/components/ui/Typography";
import {
  AchievementItemProps,
  AchievementsComponentProps,
} from "@/shared/types/Achievements.types";

const RenderAchievement: FC<AchievementItemProps> = (props) => {
  return (
    <View className="mb-3 w-1/3">
      <AchievementIcon icon={props.item.icon} />
    </View>
  );
};

export const AchievementsList: FC<AchievementsComponentProps> = ({ type, ...props }) => {
  const horizontalAchievements = () => (
    <ScrollView className="mt-6" horizontal showsHorizontalScrollIndicator={false}>
      {achievements.map((achievement) => (
        <View className="mr-3" key={achievement.id}>
          <AchievementIcon height={72} icon={achievement.icon} width={72} />
        </View>
      ))}
    </ScrollView>
  );

  const verticalAchievements = () => (
    <FlatList
      className="mt-6"
      contentContainerStyle={styles.container}
      data={achievements}
      keyExtractor={(item) => item.id.toString()}
      ListEmptyComponent={<Typography className="text-center">No achievements yet</Typography>}
      numColumns={3}
      renderItem={(props) => <RenderAchievement {...props} />}
    />
  );

  return (
    <View {...props}>
      {type === "horizontal" ? horizontalAchievements() : verticalAchievements()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
