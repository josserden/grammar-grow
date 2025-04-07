import { GradeListProps } from "@/shared/components/screens/play/GradeCard/GradeCard.types";

export const levels: GradeListProps["levels"][] = [
  {
    rank: "Bronze",
    icon: "BronzeIcon",
    href: "/play/bronze",
    tier: 1,
  },
  {
    rank: "Silver",
    icon: "SilverIcon",
    href: "/play/silver",
    tier: 2,
  },
  {
    rank: "Gold",
    icon: "GoldIcon",
    href: "/play/gold",
    tier: 3,
  },
  {
    rank: "Platinum",
    icon: "PlatinumIcon",
    href: "/play/platinum",
    tier: 4,
  },
];
