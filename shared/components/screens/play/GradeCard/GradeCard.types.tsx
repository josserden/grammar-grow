import { ReactNode } from "react";
import { SharedValue } from "react-native-reanimated";

import { Href } from "expo-router";

export interface GradeCardProps {
  animationValue: SharedValue<number>;
  test: GradeCardTestProps;
}

export interface GradeCardTestProps {
  rank: string;
  icon: ReactNode;
  href: Href;
  tier: number;
  color: string;
}

export interface GradeListProps {
  tests: GradeCardTestProps[];
}
