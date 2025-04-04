import React from "react";

import { GradeList } from "@/shared/components/screens/play/GradeList";
import { PlayHeader } from "@/shared/components/screens/play/PlayHeader";
import { Wrapper } from "@/shared/components/ui/Wrapper";

const Index = () => {
  return (
    <Wrapper alignment="start">
      <PlayHeader />
      <GradeList />
    </Wrapper>
  );
};

export default Index;
