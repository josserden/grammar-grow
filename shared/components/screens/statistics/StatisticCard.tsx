import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

import Octicons from "@expo/vector-icons/Octicons";

import { StatisticIcon } from "@/shared/components/icons/StatisticIcon";
import { Card } from "@/shared/components/ui/Card";
import { Typography } from "@/shared/components/ui/Typography";

export const StatisticCard: FC = () => {
  return (
    <Card className="bg-yellow-500" title="Your score:">
      <View className="flex-row items-center gap-3">
        <Typography className="font-montserrat-bold text-[40px]" variant="sub-title">
          5,204
        </Typography>

        <Octicons color="black" name="feed-star" size={28} />

        <StatisticIcon style={styles.icon} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  icon: {
    bottom: -14,
    position: "absolute",
    right: -14,
  },
});
