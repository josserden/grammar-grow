import React, { FC } from "react";
import Svg, { Ellipse, SvgProps } from "react-native-svg";

export const PlayDecor: FC<SvgProps> = ({ ...props }) => {
  return (
    <Svg fill="none" height="234" viewBox="0 0 320 234" width="100%" {...props}>
      <Ellipse cx="159.5" cy="176.5" fill="black" fillOpacity="0.05" rx="175.5" ry="176.5" />
    </Svg>
  );
};
