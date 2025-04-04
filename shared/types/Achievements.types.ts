/* eslint-disable no-unused-vars */
import { ViewProps } from "react-native";
import { SvgProps } from "react-native-svg";

export interface AchievementIconProps extends SvgProps {
  icon: AchievementIconEnum;
}

export interface AchievementProps {
  icon: AchievementIconEnum;
  id: number;
  title: string;
}

export interface AchievementItemProps {
  item: AchievementProps;
}

export enum AchievementIconEnum {
  FluentFox = "FluentFox",
  GrammarGuru = "GrammarGuru",
  LetterBoss = "LetterBoss",
  MegaBrain = "MegaBrain",
  QuickMind = "QuickMind",
  QuizBoss = "QuizBoss",
  QuizLegend = "QuizLegend",
  RookieLinguist = "RookieLinguist",
  SharpMind = "SharpMind",
  WiseOwl = "WiseOwl",
  WordNinja = "WordNinja",
  WordSleuth = "WordSleuth",
}

export interface AchievementsComponentProps extends ViewProps {
  type: "horizontal" | "vertical";
}
