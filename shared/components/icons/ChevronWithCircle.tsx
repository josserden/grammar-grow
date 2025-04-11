import React, { FC } from "react";
import Svg, { Path, Rect } from "react-native-svg";

export const ChevronWithCircle: FC = ({ ...props }) => {
  return (
    <Svg fill="none" height="40" viewBox="0 0 40 40" width="40" {...props}>
      <Rect height="39" rx="19.5" stroke="black" width="39" x="0.5" y="0.5" />
      <Path
        d="M22.06 25.2534L17.7134 20.9067C17.2 20.3934 17.2 19.5534 17.7134 19.04L21.3667 15.3867L22.06 14.6934"
        stroke="#272727"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
