import React, { FC } from "react";
import Svg, { G, Path, SvgProps } from "react-native-svg";

export const HeaderDecor: FC<SvgProps> = ({ ...props }) => {
  return (
    <Svg fill="none" height="124" viewBox="0 0 390 124" width="100%" {...props}>
      <G clipPath="url(#clip0_438_3907)">
        <Path
          d="M578 -242C578 -41.0601 406.843 122 195.5 122C-15.843 122 -187 -41.0601 -187 -242C-187 -442.94 -15.843 -606 195.5 -606C406.843 -606 578 -442.94 578 -242Z"
          fill="#F5BE66"
          stroke="#3A2E32"
          strokeWidth="4"
        />
      </G>
    </Svg>
  );
};
