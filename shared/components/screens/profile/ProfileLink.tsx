import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";

import { Href, Link } from "expo-router";

import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";

import { Typography } from "@/shared/components/ui/Typography";
import { COLORS } from "@/shared/constants/colors";
import { cn } from "@/shared/lib/utils";

interface ProfileLinkProps {
  href: Href;
  icon: "info" | "settings" | "shield";
  text: string;
  withoutBorder?: boolean;
}
const DEFAULT_ICON_SIZE = 18;

export const ProfileLink: FC<ProfileLinkProps> = ({ href, icon, text, withoutBorder = false }) => {
  const renderIcon = () => {
    switch (icon) {
      case "info":
        return <Feather color="black" name="info" size={DEFAULT_ICON_SIZE} />;
      case "settings":
        return <Ionicons color="black" name="settings-outline" size={DEFAULT_ICON_SIZE} />;
      case "shield":
        return <Octicons color="black" name="shield-check" size={DEFAULT_ICON_SIZE} />;
      default:
        return null;
    }
  };

  return (
    <Link asChild href={href}>
      <TouchableOpacity
        className={cn("flex-row items-center border-stone-200 py-3", {
          "border-b": !withoutBorder,
        })}
      >
        <View className="flex-1 flex-row items-center">
          <View className="mr-2 h-9 w-9 items-center justify-center rounded-full border border-black bg-yellow-500">
            {renderIcon()}
          </View>

          <Typography className="font-montserrat-regular text-lg">{text}</Typography>
        </View>

        <Entypo color={COLORS.STONE_400} name="chevron-small-right" size={24} />
      </TouchableOpacity>
    </Link>
  );
};
