import React from "react";

import { GradeList } from "@/shared/components/screens/play/GradeList";
import { levels } from "@/shared/components/screens/play/GradeList/GradeList.options";
import { PlayHeader } from "@/shared/components/screens/play/PlayHeader";
import { Wrapper } from "@/shared/components/ui/Wrapper";

const Index = () => {
  return (
    <Wrapper alignment="start">
      <PlayHeader />
      <GradeList levels={levels} />
    </Wrapper>
  );
};

export default Index;
