import AsyncStorage from "@react-native-async-storage/async-storage";

export const AsyncStorageService = {
  getAllItems: async (): Promise<null | readonly string[]> => {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (error) {
      console.error("Error getting all items from AsyncStorage:", error);
      return null;
    }
  },

  getItem: async (key: string): Promise<null | string> => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.error("Error getting item from AsyncStorage:", error);
      return null;
    }
  },

  removeItem: async (key: string): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing item from AsyncStorage:", error);
    }
  },

  setItem: async (key: string, value: string): Promise<void> => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error("Error setting item in AsyncStorage:", error);
    }
  },
};

export const STORAGE_KEY = {
  APP_STORAGE: "app_storage",
  ONBOARDING_COMPLETED: "onboarding_completed",
  SUPABASE_TOKEN: "supabase_token",
};
