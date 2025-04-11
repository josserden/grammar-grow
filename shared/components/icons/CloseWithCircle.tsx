import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export const CloseWithCircle: FC = ({ ...props }) => {
  return (
    <Svg width="42" height="42" viewBox="0 0 42 42" fill="none" {...props}>
      <Path
        d="M21 41C32 41 41 32 41 21C41 10 32 1 21 1C10 1 1 10 1 21C1 32 10 41 21 41Z"
        stroke="#18181B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.2832 25.7167L25.7165 16.2833"
        stroke="#18181B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M25.7165 25.7167L16.2832 16.2833"
        stroke="#18181B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
