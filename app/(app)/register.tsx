import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { View } from "react-native";

import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/shared/components/form/Input";
import { AuthProviders } from "@/shared/components/screens/login/AuthProviders";
import { ProviderButton } from "@/shared/components/screens/login/ProviderButton";
import { SignPrompt } from "@/shared/components/screens/login/SignPrompt";
import { Button } from "@/shared/components/ui/Button";
import { Typography } from "@/shared/components/ui/Typography";
import { Wrapper } from "@/shared/components/ui/Wrapper";
import { ROUTES } from "@/shared/constants/routes";
import { useAuth } from "@/shared/hooks/useAuth";
import { RegisterFormSchema, RegisterFormSchemaType } from "@/shared/schemas/register.schema";

const defaultValues = {
  confirmPassword: "12345678",
  email: "d-h11@ukr.net",
  name: "John Doe",
  password: "12345678",
};

const Register = () => {
  const form = useForm<RegisterFormSchemaType>({
    defaultValues,
    mode: "onChange",
    resolver: zodResolver(RegisterFormSchema),
  });

  const { loading, signUpWithEmail } = useAuth();

  const onSubmit = async (data: RegisterFormSchemaType) => {
    const result = await signUpWithEmail(data.email, data.password, {
      full_name: data.name,
    });

    console.log(result);
  };

  const isLoading = loading || form.formState.isSubmitting;

  return (
    <Wrapper>
      <View className="mb-8 self-start">
        <Typography className="mb-3" variant="title">
          Welcome back!
        </Typography>
        <Typography>Learn English with us again</Typography>
      </View>

      <FormProvider {...form}>
        <View className="mb-14 w-full">
          <Input className="mb-5" name="name" placeholder="Name" />
          <Input className="mb-5" name="email" placeholder="Email" />
          <Input className="mb-5" name="password" placeholder="Password" secureTextEntry />
          <Input
            className="mb-10"
            name="confirmPassword"
            placeholder="Repeat Password"
            secureTextEntry
          />

          <Button className="w-full" disabled={isLoading} onPress={form.handleSubmit(onSubmit)}>
            {isLoading ? "Loading..." : "Register"}
          </Button>
        </View>
      </FormProvider>

      <AuthProviders>
        <ProviderButton type="apple" />
        <ProviderButton type="google" />
      </AuthProviders>

      <SignPrompt href={ROUTES.LOGIN} linkText="Sign in" prompt="Already have an account?" />
    </Wrapper>
  );
};

export default Register;
