import React, { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { AppState } from "react-native";

import { Session, User } from "@supabase/supabase-js";

import { useAuth } from "@/shared/hooks/useAuth";
import { supabase } from "@/shared/lib/supabase";

type AuthProps = {
  initialized?: boolean;
  session: null | Session;
  signOut?: () => void;
  user: null | User;
};

AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export const AuthContext = createContext<Partial<AuthProps>>({});

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }

  return context;
};

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<null | User>();
  const [session, setSession] = useState<null | Session>(null);
  const [initialized, setInitialized] = useState<boolean>(false);

  const { signOut } = useAuth();

  useEffect(() => {
    // Listen for changes to authentication state
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session);
      setUser(session ? session.user : null);
      setInitialized(true);
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  const value = {
    initialized,
    session,
    signOut,
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
