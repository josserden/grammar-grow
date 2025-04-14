import { StateCreator } from "zustand";

import { ModalSliceTypes } from "@/shared/store/slices/modal/modalSlice.types";

const initialState: ModalSliceTypes = {
  isVisible: false,
};

export const createModalSlice: StateCreator<ModalSliceTypes> = (set) => ({
  ...initialState,
  open: () => set({ isVisible: true }),
  close: () => set({ isVisible: false }),
});
