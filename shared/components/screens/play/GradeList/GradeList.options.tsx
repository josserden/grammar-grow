import React from "react";

import { Journey } from "@/shared/components/icons/grade/Journey";
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
    icon: <Journey />,
    href: `${ROUTES.PLAY}/${GradeLevelRankEnum.RISING_STAR}`,
    tier: 2,
    color: COLORS.BLUE_300,
  },
  {
    rank: "Proficient Learner",
    icon: <Journey />,
    href: `${ROUTES.PLAY}/${GradeLevelRankEnum.PROFICIENT_LEARNER}`,
    tier: 3,
    color: COLORS.PINK_700,
  },
  {
    rank: "Skilled Navigator",
    icon: <Journey />,
    href: `${ROUTES.PLAY}/${GradeLevelRankEnum.SKILLED_NAVIGATOR}`,
    tier: 4,
    color: COLORS.YELLOW_500,
  },
  {
    rank: "Global Communicator",
    icon: <Journey />,
    href: `${ROUTES.PLAY}/${GradeLevelRankEnum.GLOBAL_COMMUNICATOR}`,
    tier: 5,
    color: COLORS.ORANGE_700,
  },
  {
    rank: "Academic Challenger",
    icon: <Journey />,
    href: `${ROUTES.PLAY}/${GradeLevelRankEnum.ACADEMIC_CHALLENGER}`,
    tier: 6,
    color: COLORS.TEAL_500,
  },
  {
    rank: "Master of Proficiency",
    icon: <Journey />,
    href: `${ROUTES.PLAY}/${GradeLevelRankEnum.MASTER_OF_PROFICIENCY}`,
    tier: 7,
    color: COLORS.BLUE_300,
  },
  {
    rank: "Elite Thinker",
    icon: <Journey />,
    href: `${ROUTES.PLAY}/${GradeLevelRankEnum.ELITE_THINKER}`,
    tier: 8,
    color: COLORS.PINK_700,
  },
  {
    rank: "Language Virtuoso",
    icon: <Journey />,
    href: `${ROUTES.PLAY}/${GradeLevelRankEnum.LANGUAGE_VIRTUOSO}`,
    tier: 9,
    color: COLORS.YELLOW_500,
  },
  {
    rank: "Graduate Explorer",
    icon: <Journey />,
    href: `${ROUTES.PLAY}/${GradeLevelRankEnum.GRADUATE_EXPLORER}`,
    tier: 10,
    color: COLORS.ORANGE_700,
  },
  {
    rank: "Business Strategist",
    icon: <Journey />,
    href: `${ROUTES.PLAY}/${GradeLevelRankEnum.BUSINESS_STRATEGIST}`,
    tier: 11,
    color: COLORS.TEAL_500,
  },
  {
    rank: "Ultimate Achiever",
    icon: <Journey />,
    href: `${ROUTES.PLAY}/${GradeLevelRankEnum.ULTIMATE_ACHIEVER}`,
    tier: 12,
    color: COLORS.BLUE_300,
  },
];
