import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export const PlaySm: FC = ({ ...props }) => {
  return (
    <Svg fill="none" height="15" viewBox="0 0 14 15" width="14" {...props}>
      <Path
        d="M0.166748 7.41666V4.45795C0.166748 0.784486 2.77305 -0.719804 5.96222 1.11693L8.53521 2.59628L11.1082 4.07564C14.2974 5.91237 14.2974 8.92095 11.1082 10.7577L8.53521 12.237L5.96222 13.7164C2.77305 15.5531 0.166748 14.0488 0.166748 10.3754V7.41666Z"
        fill="black"
      />
    </Svg>
  );
};
