import React from "react";

import { Achiever } from "@/shared/components/icons/grade/Achiever";
import { Challenger } from "@/shared/components/icons/grade/Challenger";
import { Communicator } from "@/shared/components/icons/grade/Communicator";
import { Explorer } from "@/shared/components/icons/grade/Explorer";
import { Journey } from "@/shared/components/icons/grade/Journey";
import { Learner } from "@/shared/components/icons/grade/Learner";
import { Navigator } from "@/shared/components/icons/grade/Navigator";
import { Proficiency } from "@/shared/components/icons/grade/Proficiency";
import { Star } from "@/shared/components/icons/grade/Star";
import { Strategist } from "@/shared/components/icons/grade/Strategist";
import { Thinker } from "@/shared/components/icons/grade/Thinker";
import { Virtuoso } from "@/shared/components/icons/grade/Virtuoso";
import { GradeCardTestProps } from "@/shared/components/screens/play/GradeCard/GradeCard.types";
import { GradeLevelRankEnum } from "@/shared/components/screens/play/GradeList/GradeList.types";
import { COLORS } from "@/shared/constants/colors";
import { ROUTES } from "@/shared/constants/routes";

export const tests: GradeCardTestProps[] = [
  {
    rank: "Beginner's Journey",
    icon: <Journey />,
    href: `${ROUTES.PLAY}/${GradeLevelRankEnum.BEGINNERS_JOURNEY}`,
    tier: 1,
    color: COLORS.TEAL_500,
  },
  {
    rank: "Rising Star",
    icon: <Star />,
    href: `${ROUTES.PLAY}/${GradeLevelRankEnum.RISING_STAR}`,
    tier: 2,
    color: COLORS.BLUE_300,
  },
  {
    rank: "Proficient Learner",
    icon: <Learner />,
    href: `${ROUTES.PLAY}/${GradeLevelRankEnum.PROFICIENT_LEARNER}`,
    tier: 3,
    color: COLORS.PINK_700,
  },
  {
    rank: "Skilled Navigator",
    icon: <Navigator />,
    href: `${ROUTES.PLAY}/${GradeLevelRankEnum.SKILLED_NAVIGATOR}`,
    tier: 4,
    color: COLORS.YELLOW_500,
  },
  {
    rank: "Global Communicator",
    icon: <Communicator />,
    href: `${ROUTES.PLAY}/${GradeLevelRankEnum.GLOBAL_COMMUNICATOR}`,
    tier: 5,
    color: COLORS.ORANGE_700,
  },
  {
    rank: "Academic Challenger",
    icon: <Challenger />,
    href: `${ROUTES.PLAY}/${GradeLevelRankEnum.ACADEMIC_CHALLENGER}`,
    tier: 6,
    color: COLORS.TEAL_500,
  },
  {
    rank: "Master of Proficiency",
    icon: <Proficiency />,
    href: `${ROUTES.PLAY}/${GradeLevelRankEnum.MASTER_OF_PROFICIENCY}`,
    tier: 7,
    color: COLORS.BLUE_300,
  },
  {
    rank: "Elite Thinker",
    icon: <Thinker />,
    href: `${ROUTES.PLAY}/${GradeLevelRankEnum.ELITE_THINKER}`,
    tier: 8,
    color: COLORS.PINK_700,
  },
  {
    rank: "Language Virtuoso",
    icon: <Virtuoso />,
    href: `${ROUTES.PLAY}/${GradeLevelRankEnum.LANGUAGE_VIRTUOSO}`,
    tier: 9,
    color: COLORS.YELLOW_500,
  },
  {
    rank: "Graduate Explorer",
    icon: <Explorer />,
    href: `${ROUTES.PLAY}/${GradeLevelRankEnum.GRADUATE_EXPLORER}`,
    tier: 10,
    color: COLORS.ORANGE_700,
  },
  {
    rank: "Business Strategist",
    icon: <Strategist />,
    href: `${ROUTES.PLAY}/${GradeLevelRankEnum.BUSINESS_STRATEGIST}`,
    tier: 11,
    color: COLORS.TEAL_500,
  },
  {
    rank: "Ultimate Achiever",
    icon: <Achiever />,
    href: `${ROUTES.PLAY}/${GradeLevelRankEnum.ULTIMATE_ACHIEVER}`,
    tier: 12,
    color: COLORS.BLUE_300,
  },
];
