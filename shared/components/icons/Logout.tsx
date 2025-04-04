import React, { FC } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const Logout: FC<SvgProps> = ({ ...props }) => {
  return (
    <Svg fill="none" height="24" viewBox="0 0 25 24" width="25" {...props}>
      <Path
        d="M17.9399 14.62L20.4999 12.06L17.9399 9.5"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1.5"
      />
      <Path
        d="M10.26 12.0601H20.43"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1.5"
      />
      <Path
        d="M12.26 20C7.84001 20 4.26001 17 4.26001 12C4.26001 7 7.84001 4 12.26 4"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1.5"
      />
    </Svg>
  );
};
