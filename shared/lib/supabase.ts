import "react-native-url-polyfill/auto";

import { createClient } from "@supabase/supabase-js";

import { AsyncStorageService, STORAGE_KEY } from "@/shared/lib/storage";

const supabaseUrl = "https://zfpojwogrnzwzdoepncb.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmcG9qd29ncm56d3pkb2VwbmNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4MDk2MDUsImV4cCI6MjA1ODM4NTYwNX0.tw-LQCYGYgiZ_VcYtCJ4Rxyr7mHFGP6pYrrOC5eYfzo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    detectSessionInUrl: false,
    persistSession: true,
    storage: AsyncStorageService,
    storageKey: STORAGE_KEY.SUPABASE_TOKEN,
  },
});
