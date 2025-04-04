import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { View } from "react-native";

import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/shared/components/form/Input";
import { AuthProviders } from "@/shared/components/screens/login/AuthProviders";
import { ProviderButton } from "@/shared/components/screens/login/ProviderButton";
import { SignPrompt } from "@/shared/components/screens/login/SignPrompt";
import { Button } from "@/shared/components/ui/Button";
import { CustomLink } from "@/shared/components/ui/CustomLink";
import { Typography } from "@/shared/components/ui/Typography";
import { Wrapper } from "@/shared/components/ui/Wrapper";
import { ROUTES } from "@/shared/constants/routes";
import { useAuth } from "@/shared/hooks/useAuth";
import { LoginFormSchema, LoginFormSchemaType } from "@/shared/schemas/login.schema";

const defaultValues = {
  email: "d-h11@ukr.net",
  password: "12345678",
};

const Login = () => {
  const form = useForm<LoginFormSchemaType>({
    defaultValues,
    mode: "onChange",
    resolver: zodResolver(LoginFormSchema),
  });

  const { loading, signInWithEmail } = useAuth();

  const onSubmit = async (data: LoginFormSchemaType) => {
    const result = await signInWithEmail(data.email, data.password);

    console.log(result);
  };

  const isLoading = loading || form.formState.isSubmitting;

  return (
    <Wrapper alignment="center">
      <View className="mb-8 self-start">
        <Typography className="mb-3" variant="title">
          Welcome back!
        </Typography>
        <Typography>Learn English with us again</Typography>
      </View>

      <FormProvider {...form}>
        <View className="mb-14 w-full">
          <Input className="mb-5" name="email" placeholder="Email" />
          <Input className="mb-5" name="password" placeholder="Password" secureTextEntry />

          <CustomLink
            href={ROUTES.FORGOT_PASSWORD}
            className="mb-5 self-end"
            title="Forgot Password?"
          />

          <Button className="w-full" disabled={isLoading} onPress={form.handleSubmit(onSubmit)}>
            {isLoading ? "Loading..." : "Login"}
          </Button>
        </View>
      </FormProvider>

      <AuthProviders>
        <ProviderButton type="apple" />
        <ProviderButton type="google" />
      </AuthProviders>

      <SignPrompt href={ROUTES.REGISTER} linkText="Sign up" prompt="Don’t have an account?" />
    </Wrapper>
  );
};

export default Login;
