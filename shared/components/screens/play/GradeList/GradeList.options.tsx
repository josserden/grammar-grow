import React from "react";

import { Beginner } from "@/shared/components/icons/grade/Beginner";
import { GradeCardLevelProps } from "@/shared/components/screens/play/GradeCard/GradeCard.types";
import { GradeLevelRankEnum } from "@/shared/components/screens/play/GradeList/GradeList.types";
import { COLORS } from "@/shared/constants/colors";

export const levels: GradeCardLevelProps[] = [
  {
    rank: "Beginner's Journey",
    icon: <Beginner />,
    href: GradeLevelRankEnum.BEGINNERS_JOURNEY,
    tier: 1,
    color: COLORS.TEAL_500,
  },
  {
    rank: "Rising Star",
    icon: <Beginner />,
    href: GradeLevelRankEnum.RISING_STAR,
    tier: 2,
    color: COLORS.BLUE_300,
  },
  {
    rank: "Proficient Learner",
    icon: <Beginner />,
    href: GradeLevelRankEnum.PROFICIENT_LEARNER,
    tier: 3,
    color: COLORS.PINK_700,
  },
  {
    rank: "Skilled Navigator",
    icon: <Beginner />,
    href: GradeLevelRankEnum.SKILLED_NAVIGATOR,
    tier: 4,
    color: COLORS.YELLOW_500,
  },
  {
    rank: "Global Communicator",
    icon: <Beginner />,
    href: GradeLevelRankEnum.GLOBAL_COMMUNICATOR,
    tier: 5,
    color: COLORS.ORANGE_700,
  },
  {
    rank: "Academic Challenger",
    icon: <Beginner />,
    href: GradeLevelRankEnum.ACADEMIC_CHALLENGER,
    tier: 6,
    color: COLORS.TEAL_500,
  },
  {
    rank: "Master of Proficiency",
    icon: <Beginner />,
    href: GradeLevelRankEnum.MASTER_OF_PROFICIENCY,
    tier: 7,
    color: COLORS.BLUE_300,
  },
  {
    rank: "Elite Thinker",
    icon: <Beginner />,
    href: GradeLevelRankEnum.ELITE_THINKER,
    tier: 8,
    color: COLORS.PINK_700,
  },
  {
    rank: "Language Virtuoso",
    icon: <Beginner />,
    href: GradeLevelRankEnum.LANGUAGE_VIRTUOSO,
    tier: 9,
    color: COLORS.YELLOW_500,
  },
  {
    rank: "Graduate Explorer",
    icon: <Beginner />,
    href: GradeLevelRankEnum.GRADUATE_EXPLORER,
    tier: 10,
    color: COLORS.ORANGE_700,
  },
  {
    rank: "Business Strategist",
    icon: <Beginner />,
    href: GradeLevelRankEnum.BUSINESS_STRATEGIST,
    tier: 11,
    color: COLORS.TEAL_500,
  },
  {
    rank: "Ultimate Achiever",
    icon: <Beginner />,
    href: GradeLevelRankEnum.ULTIMATE_ACHIEVER,
    tier: 12,
    color: COLORS.BLUE_300,
  },
];
