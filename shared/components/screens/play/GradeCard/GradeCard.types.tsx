import { ReactNode } from "react";
import { SharedValue } from "react-native-reanimated";

import { Href } from "expo-router";

export interface GradeCardProps {
  animationValue: SharedValue<number>;
  level: GradeCardLevelProps;
}

export interface GradeCardLevelProps {
  rank: string;
  icon: ReactNode;
  href: Href;
  tier: number;
}

export interface GradeListProps {
  levels: Pick<GradeCardProps, "level">[];
}
