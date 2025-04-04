import React from "react";

import { PlayCarousel } from "@/shared/components/screens/play/PlayCarousel";
import { PlayHeader } from "@/shared/components/screens/play/PlayHeader";
import { Wrapper } from "@/shared/components/ui/Wrapper";

const Index = () => {
  return (
    <Wrapper alignment="start">
      <PlayHeader />
      <PlayCarousel />
    </Wrapper>
  );
};

export default Index;
