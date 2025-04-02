import { useState } from "react";
import { Alert } from "react-native";

import { supabase } from "@/shared/lib/supabase";

type AuthError = {
  message: string;
};

export const useAuth = () => {
  const [loading, setLoading] = useState(false);

  // Login with email/password
  const signInWithEmail = async (email: string, password: string) => {
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      return { data, success: true };
    } catch (error) {
      const authError = error as AuthError;

      Alert.alert("Login Error", authError.message);
      return { error: authError, success: false };
    } finally {
      setLoading(false);
    }
  };

  // Registration with email/password
  const signUpWithEmail = async (email: string, password: string, userData = {}) => {
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        options: {
          data: userData,
        },
        password,
      });

      if (error) throw error;

      if (!data.session) {
        Alert.alert("Verify Your Email", "Please check your inbox for email verification!");
      }

      return { data, success: true };
    } catch (error) {
      const authError = error as AuthError;

      Alert.alert("Registration Error", authError.message);
      return { error: authError, success: false };
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const signOut = async () => {
    setLoading(true);

    try {
      const { error } = await supabase.auth.signOut();

      if (error) throw error;
    } catch (error) {
      const authError = error as AuthError;

      Alert.alert("Logout Error", authError.message);
    } finally {
      setLoading(false);
    }
  };

  // Password reset
  const resetPassword = async (email: string) => {
    setLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: "yourapp://reset-password",
      });

      if (error) throw error;

      Alert.alert("Password Reset", "Check your email for the password reset link");

      return { success: true };
    } catch (error) {
      const authError = error as AuthError;
      Alert.alert("Reset Error", authError.message);
      return { error: authError, success: false };
    } finally {
      setLoading(false);
    }
  };

  // Update password
  const updatePassword = async (newPassword: string) => {
    setLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) throw error;

      Alert.alert("Success", "Your password has been updated");

      return { success: true };
    } catch (error) {
      const authError = error as AuthError;

      Alert.alert("Update Error", authError.message);
      return { error: authError, success: false };
    } finally {
      setLoading(false);
    }
  };

  // OAuth provider login
  const signInWithProvider = async (provider: "apple" | "google") => {
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        options: {
          redirectTo: "yourapp://auth/callback",
        },
        provider,
      });

      if (error) throw error;

      return { data, success: true };
    } catch (error) {
      const authError = error as AuthError;

      Alert.alert("Social Login Error", authError.message);
      return { error: authError, success: false };
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    resetPassword,
    signInWithEmail,
    signInWithProvider,
    signOut,
    signUpWithEmail,
    updatePassword,
  };
};
