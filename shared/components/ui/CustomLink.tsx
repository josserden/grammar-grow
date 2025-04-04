import React, { FC } from "react";
import { TouchableOpacity } from "react-native";

import { Link, LinkProps } from "expo-router";

import { Typography } from "@/shared/components/ui/Typography";
import { cn } from "@/shared/lib/utils";

interface CustomLinkProps extends LinkProps {
  title: string;
  titleClassName?: string;
}

export const CustomLink: FC<CustomLinkProps> = ({
  children,
  href,
  className,
  titleClassName,
  title,
  ...props
}) => {
  return (
    <Link asChild href={href} {...props}>
      <TouchableOpacity className={cn(className)}>
        <Typography className={cn(titleClassName)}>{title}</Typography>
        {children}
      </TouchableOpacity>
    </Link>
  );
};
