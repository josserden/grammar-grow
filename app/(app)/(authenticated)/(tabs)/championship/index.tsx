import React from "react";
import { View } from "react-native";

import { ComingSoon } from "@/shared/components/icons/ComingSoon";
import { Typography } from "@/shared/components/ui/Typography";
import { Wrapper } from "@/shared/components/ui/Wrapper";

const Index = () => {
  return (
    <Wrapper>
      <View className="relative">
        <Typography variant="title" className="absolute left-1/2 top-8 z-50 -translate-x-1/2">
          Coming soon...
        </Typography>
        <ComingSoon />
      </View>
    </Wrapper>
  );
};

export default Index;
