import { createJSONStorage, persist } from "zustand/middleware";
import { create } from "zustand/react";

import { AsyncStorageService, STORAGE_KEY } from "@/shared/lib/storage";
import { createModalSlice } from "@/shared/store/slices/modal/createModalSlice";
import { ModalSliceTypes } from "@/shared/store/slices/modal/modalSlice.types";

export interface AppStoreProps extends ModalSliceTypes {}

export const useAppStore = create<AppStoreProps>()(
  persist(
    (...store) => ({
      ...createModalSlice(...store),
    }),
    {
      name: STORAGE_KEY.APP_STORAGE,
      storage: createJSONStorage(() => AsyncStorageService),
      partialize: (state) => ({}),
    }
  )
);
