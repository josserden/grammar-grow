import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

import { TAB_BAR_ICON_SIZE } from "@/shared/constants/common";
import { TabIconProps } from "@/shared/types/TabBarIcon.types";

export const Play: FC<TabIconProps> = ({ color, focused }) => {
  if (focused) {
    return (
      <Svg fill="none" height={TAB_BAR_ICON_SIZE} viewBox="0 0 24 24" width={TAB_BAR_ICON_SIZE}>
        <Path
          d="M5 12.5V8.94954C5 4.54139 8.12756 2.73624 11.9546 4.94032L15.0422 6.71555L18.1297 8.49078C21.9568 10.6949 21.9568 14.3051 18.1297 16.5092L15.0422 18.2845L11.9546 20.0597C8.12756 22.2638 5 20.4586 5 16.0505V12.5Z"
          fill="white"
        />
      </Svg>
    );
  }

  return (
    <Svg fill="none" height={TAB_BAR_ICON_SIZE} viewBox="0 0 24 24" width={TAB_BAR_ICON_SIZE}>
      <Path
        d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
