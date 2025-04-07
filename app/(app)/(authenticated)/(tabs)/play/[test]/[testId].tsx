import React from "react";

import { useGlobalSearchParams } from "expo-router";

import { Typography } from "@/shared/components/ui/Typography";
import { Wrapper } from "@/shared/components/ui/Wrapper";

const TestId = () => {
  const { test } = useGlobalSearchParams();

  return (
    <Wrapper>
      <Typography variant="title">Test: {test}</Typography>
    </Wrapper>
  );
};

export default TestId;
