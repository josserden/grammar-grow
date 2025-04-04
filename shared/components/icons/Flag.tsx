import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

export const Flag: FC = () => {
  return (
    <Svg fill="none" height="44" viewBox="0 0 36 44" width="36">
      <Path
        d="M36 42.1483V0H0V22V42.1483C0 42.9436 0.883384 43.4207 1.54841 42.9845L17.4516 32.5548C17.7846 32.3364 18.2154 32.3364 18.5484 32.5548L34.4516 42.9845C35.1166 43.4207 36 42.9436 36 42.1483Z"
        fill="black"
      />
    </Svg>
  );
};
