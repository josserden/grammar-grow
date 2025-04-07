import { useGlobalSearchParams } from "expo-router";

import {
  GradeLevelRankEnum,
  GradeLevelRankNameEnum,
} from "@/shared/components/screens/play/GradeList/GradeList.types";

export const useTestTitle = () => {
  const { test } = useGlobalSearchParams();

  const renderTestTitle = () => {
    switch (test) {
      case GradeLevelRankEnum.BEGINNERS_JOURNEY:
        return GradeLevelRankNameEnum.BEGINNERS_JOURNEY;
      case GradeLevelRankEnum.RISING_STAR:
        return GradeLevelRankNameEnum.RISING_STAR;
      case GradeLevelRankEnum.PROFICIENT_LEARNER:
        return GradeLevelRankNameEnum.PROFICIENT_LEARNER;
      case GradeLevelRankEnum.SKILLED_NAVIGATOR:
        return GradeLevelRankNameEnum.SKILLED_NAVIGATOR;
      case GradeLevelRankEnum.GLOBAL_COMMUNICATOR:
        return GradeLevelRankNameEnum.GLOBAL_COMMUNICATOR;
      case GradeLevelRankEnum.ACADEMIC_CHALLENGER:
        return GradeLevelRankNameEnum.ACADEMIC_CHALLENGER;
      case GradeLevelRankEnum.MASTER_OF_PROFICIENCY:
        return GradeLevelRankNameEnum.MASTER_OF_PROFICIENCY;
      case GradeLevelRankEnum.ELITE_THINKER:
        return GradeLevelRankNameEnum.ELITE_THINKER;
      case GradeLevelRankEnum.LANGUAGE_VIRTUOSO:
        return GradeLevelRankNameEnum.LANGUAGE_VIRTUOSO;
      case GradeLevelRankEnum.GRADUATE_EXPLORER:
        return GradeLevelRankNameEnum.GRADUATE_EXPLORER;
      case GradeLevelRankEnum.BUSINESS_STRATEGIST:
        return GradeLevelRankNameEnum.BUSINESS_STRATEGIST;
      case GradeLevelRankEnum.ULTIMATE_ACHIEVER:
        return GradeLevelRankNameEnum.ULTIMATE_ACHIEVER;
    }
  };

  return { title: renderTestTitle() };
};
