import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Modal = {
  active: boolean;
  type: "login" | "register";
};

const initialState: Modal = {
  active: false,
  type: "login",
};
const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setActive(state, action: PayloadAction<boolean>) {
      state.active = action.payload;
    },
    setType(state, action: PayloadAction<"login" | "register">) {
      state.type = action.payload;
    },
  },
});

export const { setActive } = ModalSlice.actions;
export const { setType } = ModalSlice.actions;
export default ModalSlice.reducer;
