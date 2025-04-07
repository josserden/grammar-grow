import React, { FC } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const Lock: FC<SvgProps> = ({ ...props }) => {
  return (
    <Svg width="68" height="68" viewBox="0 0 68 68" fill="none" {...props}>
      <Path
        d="M17 28.3334V22.6667C17 13.2884 19.8333 5.66675 34 5.66675C48.1667 5.66675 51 13.2884 51 22.6667V28.3334"
        stroke="#4C4F52"
        strokeWidth="3.16279"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M33.9998 52.4167C37.9119 52.4167 41.0832 49.2454 41.0832 45.3333C41.0832 41.4213 37.9119 38.25 33.9998 38.25C30.0878 38.25 26.9165 41.4213 26.9165 45.3333C26.9165 49.2454 30.0878 52.4167 33.9998 52.4167Z"
        stroke="#4C4F52"
        strokeWidth="3.16279"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M48.1665 62.3333H19.8332C8.49984 62.3333 5.6665 59.4999 5.6665 48.1666V42.4999C5.6665 31.1666 8.49984 28.3333 19.8332 28.3333H48.1665C59.4998 28.3333 62.3332 31.1666 62.3332 42.4999V48.1666C62.3332 59.4999 59.4998 62.3333 48.1665 62.3333Z"
        stroke="#4C4F52"
        strokeWidth="3.16279"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
