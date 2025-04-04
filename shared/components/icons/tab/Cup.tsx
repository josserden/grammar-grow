import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

import { TAB_BAR_ICON_SIZE } from "@/shared/constants/common";
import { TabIconProps } from "@/shared/types/TabBarIcon.types";

export const Cup: FC<TabIconProps> = ({ color, focused }) => {
  if (focused) {
    return (
      <Svg fill="none" height={TAB_BAR_ICON_SIZE} viewBox="0 0 24 24" width={TAB_BAR_ICON_SIZE}>
        <Path
          d="M11.25 18.25H9C7.9 18.25 7 19.15 7 20.25V20.5H6C5.59 20.5 5.25 20.84 5.25 21.25C5.25 21.66 5.59 22 6 22H18C18.41 22 18.75 21.66 18.75 21.25C18.75 20.84 18.41 20.5 18 20.5H17V20.25C17 19.15 16.1 18.25 15 18.25H12.75V15.96C12.5 15.99 12.25 16 12 16C11.75 16 11.5 15.99 11.25 15.96V18.25Z"
          fill="white"
        />
        <Path
          d="M18.48 11.64C19.14 11.39 19.72 10.98 20.18 10.52C21.11 9.49 21.72 8.26 21.72 6.82C21.72 5.38 20.59 4.25 19.15 4.25H18.59C17.94 2.92 16.58 2 15 2H9.00003C7.42003 2 6.06003 2.92 5.41003 4.25H4.85003C3.41003 4.25 2.28003 5.38 2.28003 6.82C2.28003 8.26 2.89003 9.49 3.82003 10.52C4.28003 10.98 4.86003 11.39 5.52003 11.64C6.56003 14.2 9.06003 16 12 16C14.94 16 17.44 14.2 18.48 11.64ZM14.84 8.45L14.22 9.21C14.12 9.32 14.05 9.54 14.06 9.69L14.12 10.67C14.16 11.27 13.73 11.58 13.17 11.36L12.26 11C12.12 10.95 11.88 10.95 11.74 11L10.83 11.36C10.27 11.58 9.84003 11.27 9.88003 10.67L9.94003 9.69C9.95003 9.54 9.88003 9.32 9.78003 9.21L9.16003 8.45C8.77003 7.99 8.94003 7.48 9.52003 7.33L10.47 7.09C10.62 7.05 10.8 6.91 10.88 6.78L11.41 5.96C11.74 5.45 12.26 5.45 12.59 5.96L13.12 6.78C13.2 6.91 13.38 7.05 13.53 7.09L14.48 7.33C15.06 7.48 15.23 7.99 14.84 8.45Z"
          fill="white"
        />
      </Svg>
    );
  }

  return (
    <Svg fill="none" height={TAB_BAR_ICON_SIZE} viewBox="0 0 24 24" width={TAB_BAR_ICON_SIZE}>
      <Path
        d="M12.1499 16.5V18.6"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <Path
        d="M7.1499 22H17.1499V21C17.1499 19.9 16.2499 19 15.1499 19H9.1499C8.0499 19 7.1499 19.9 7.1499 21V22V22Z"
        stroke={color}
        stroke-miterlimit="10"
        stroke-width="1.5"
      />
      <Path
        d="M6.1499 22H18.1499"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <Path
        d="M12 16C8.13 16 5 12.87 5 9V6C5 3.79 6.79 2 9 2H15C17.21 2 19 3.79 19 6V9C19 12.87 15.87 16 12 16Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <Path
        d="M5.47004 11.6501C4.72004 11.4101 4.06004 10.9701 3.54004 10.4501C2.64004 9.4501 2.04004 8.2501 2.04004 6.8501C2.04004 5.4501 3.14004 4.3501 4.54004 4.3501H5.19004C4.99004 4.8101 4.89004 5.3201 4.89004 5.8501V8.8501C4.89004 9.8501 5.10004 10.7901 5.47004 11.6501Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <Path
        d="M18.53 11.6501C19.28 11.4101 19.94 10.9701 20.46 10.4501C21.36 9.4501 21.96 8.2501 21.96 6.8501C21.96 5.4501 20.86 4.3501 19.46 4.3501H18.81C19.01 4.8101 19.11 5.3201 19.11 5.8501V8.8501C19.11 9.8501 18.9 10.7901 18.53 11.6501Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
    </Svg>
  );
};
