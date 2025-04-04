import React, { FC, PropsWithChildren } from "react";
import { View } from "react-native";

import { HeaderDecor } from "@/shared/components/icons/HeaderDecor";
import { Avatar } from "@/shared/components/ui/Avatar";
import { Typography } from "@/shared/components/ui/Typography";
import { Wrapper } from "@/shared/components/ui/Wrapper";
import { cn } from "@/shared/lib/utils";

interface ProfileScreenWrapperProps extends PropsWithChildren {
  withAppVersion?: boolean;
  withoutAvatar?: boolean;
  withoutDecor?: boolean;
}

export const ProfileScreenWrapper: FC<ProfileScreenWrapperProps> = ({
  children,
  withAppVersion,
  withoutAvatar,
  withoutDecor,
}) => {
  return (
    <>
      <Wrapper alignment="start" padding="none" topInset={false}>
        <View className="relative w-full">
          {withAppVersion && <View className="h-[134px] w-full bg-yellow-500" />}

          {!withoutDecor && <HeaderDecor />}

          {!withoutAvatar && <Avatar className="absolute -bottom-1/2 left-1/2 -translate-x-1/2" />}

          {withAppVersion && (
            <Typography className="absolute bottom-8 left-1/2 -translate-x-1/2 font-montserrat-medium">
              Version 1.0.0
            </Typography>
          )}
        </View>

        <View className={cn("w-full flex-1 px-4 pb-4", withoutDecor ? "mt-8" : "mt-24")}>
          {children}
        </View>
      </Wrapper>
    </>
  );
};
