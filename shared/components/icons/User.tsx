import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

import { TAB_BAR_ICON_SIZE } from "@/shared/constants/common";
import { TabIconProps } from "@/shared/types/TabBarIcon.types";

export const User: FC<TabIconProps> = ({ color, focused }) => {
  if (focused) {
    return (
      <Svg fill="none" height={TAB_BAR_ICON_SIZE} viewBox="0 0 24 24" width={TAB_BAR_ICON_SIZE}>
        <Path
          d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
          fill="white"
        />
        <Path
          d="M11.9999 14.5C6.98991 14.5 2.90991 17.86 2.90991 22C2.90991 22.28 3.12991 22.5 3.40991 22.5H20.5899C20.8699 22.5 21.0899 22.28 21.0899 22C21.0899 17.86 17.0099 14.5 11.9999 14.5Z"
          fill="white"
        />
      </Svg>
    );
  }

  return (
    <Svg fill="none" height={TAB_BAR_ICON_SIZE} viewBox="0 0 24 24" width={TAB_BAR_ICON_SIZE}>
      <Path
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
