import React from "react";

import { AchievementsList } from "@/shared/components/screens/achievements/AchievementsList";
import { Wrapper } from "@/shared/components/ui/Wrapper";

const Achievements = () => {
  return (
    <Wrapper alignment="start" topInset={false}>
      <AchievementsList type="vertical" />
    </Wrapper>
  );
};

export default Achievements;
