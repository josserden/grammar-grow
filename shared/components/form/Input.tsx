import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Text, TextInput, TextInputProps, View } from "react-native";

import { cn } from "@/shared/lib/utils";
import { LoginFormSchemaType } from "@/shared/schemas/login.schema";
import { RegisterFormSchemaType } from "@/shared/schemas/register.schema";

interface InputProps extends TextInputProps {
  name: keyof (RegisterFormSchemaType & LoginFormSchemaType);
  placeholder: string;
}

export const Input: FC<InputProps> = (props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<RegisterFormSchemaType>();

  const errorMessage = errors?.[props.name]?.message as string;

  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange, value } }) => (
        <View className={cn("relative", props.className)}>
          <TextInput
            className={cn(
              "w-full rounded-full border bg-transparent px-[18px] py-[14px] font-montserrat-regular text-zinc-900 placeholder:font-montserrat-regular placeholder:text-zinc-900/50",
              errorMessage ? "border-rose-500" : "border-zinc-900"
            )}
            onChangeText={onChange}
            placeholder={props.placeholder}
            secureTextEntry={props.secureTextEntry}
            value={value}
          />

          {errorMessage && (
            <Text className="absolute -bottom-4 left-5 text-xs text-rose-500">{errorMessage}</Text>
          )}
        </View>
      )}
    />
  );
};
