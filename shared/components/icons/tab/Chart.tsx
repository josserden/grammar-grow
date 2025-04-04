import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

import { TAB_BAR_ICON_SIZE } from "@/shared/constants/common";
import { TabIconProps } from "@/shared/types/TabBarIcon.types";

export const Chart: FC<TabIconProps> = ({ color, focused }) => {
  if (focused) {
    return (
      <Svg fill="none" height={TAB_BAR_ICON_SIZE} viewBox="0 0 24 24" width={TAB_BAR_ICON_SIZE}>
        <Path
          d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z"
          fill="white"
        />
        <Path
          d="M5.6 8.37988H4C3.45 8.37988 3 8.82988 3 9.37988V17.9999C3 18.5499 3.45 18.9999 4 18.9999H5.6C6.15 18.9999 6.6 18.5499 6.6 17.9999V9.37988C6.6 8.81988 6.15 8.37988 5.6 8.37988Z"
          fill="white"
        />
        <Path
          d="M12.8 5.18994H11.2C10.65 5.18994 10.2 5.63994 10.2 6.18994V17.9999C10.2 18.5499 10.65 18.9999 11.2 18.9999H12.8C13.35 18.9999 13.8 18.5499 13.8 17.9999V6.18994C13.8 5.63994 13.35 5.18994 12.8 5.18994Z"
          fill="white"
        />
        <Path
          d="M19.9999 2H18.3999C17.8499 2 17.3999 2.45 17.3999 3V18C17.3999 18.55 17.8499 19 18.3999 19H19.9999C20.5499 19 20.9999 18.55 20.9999 18V3C20.9999 2.45 20.5499 2 19.9999 2Z"
          fill="white"
        />
      </Svg>
    );
  }
  return (
    <Svg fill="none" height={TAB_BAR_ICON_SIZE} viewBox="0 0 24 24" width={TAB_BAR_ICON_SIZE}>
      <Path
        d="M3 22H21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M5.59998 8.37988H4C3.45 8.37988 3 8.82988 3 9.37988V17.9999C3 18.5499 3.45 18.9999 4 18.9999H5.59998C6.14998 18.9999 6.59998 18.5499 6.59998 17.9999V9.37988C6.59998 8.82988 6.14998 8.37988 5.59998 8.37988Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M12.7999 5.18994H11.2C10.65 5.18994 10.2 5.63994 10.2 6.18994V17.9999C10.2 18.5499 10.65 18.9999 11.2 18.9999H12.7999C13.3499 18.9999 13.7999 18.5499 13.7999 17.9999V6.18994C13.7999 5.63994 13.3499 5.18994 12.7999 5.18994Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        d="M19.9999 2H18.3999C17.8499 2 17.3999 2.45 17.3999 3V18C17.3999 18.55 17.8499 19 18.3999 19H19.9999C20.5499 19 20.9999 18.55 20.9999 18V3C20.9999 2.45 20.5499 2 19.9999 2Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
