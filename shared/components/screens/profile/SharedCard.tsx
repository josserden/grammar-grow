import React, { FC } from "react";
import { Alert, Share, StyleSheet, TouchableOpacity, View } from "react-native";

import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { Instagram } from "@/shared/components/icons/Instagram";
import { Profile } from "@/shared/components/icons/Profile";
import { Card } from "@/shared/components/ui/Card";

export const SharedCard: FC = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Share our app with your friends!",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    }
  };

  return (
    <Card
      className="mt-10 bg-[#3A2E32]"
      title="Share with friend:"
      titleClassName="text-white mb-12"
    >
      <View className="flex-row items-center gap-3">
        <TouchableOpacity className="h-11 w-11 items-center justify-center rounded-full bg-[#00E510]">
          <FontAwesome color="white" name="whatsapp" size={26} />
        </TouchableOpacity>

        <TouchableOpacity className="h-11 w-11 items-center justify-end rounded-full bg-[#1877F2]">
          <FontAwesome5 color="white" name="facebook-f" size={28} />
        </TouchableOpacity>

        <TouchableOpacity className="h-11 w-11 items-center justify-center rounded-full bg-[#00B0F2]">
          <FontAwesome5 color="white" name="telegram-plane" size={26} />
        </TouchableOpacity>

        <TouchableOpacity className="h-11 w-11 items-center justify-center rounded-full">
          <Instagram />
        </TouchableOpacity>

        <TouchableOpacity
          className="h-11 w-11 items-center justify-center rounded-full bg-yellow-500"
          onPress={onShare}
        >
          <Entypo color="black" name="dots-three-horizontal" size={24} />
        </TouchableOpacity>
      </View>

      <Profile style={styles.icon} />
    </Card>
  );
};

const styles = StyleSheet.create({
  icon: {
    bottom: 1.5,
    position: "absolute",
    right: -2,
  },
});
