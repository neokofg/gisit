import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Auth = {
  logged: boolean;
  user: string | null;
};

const initialState: Auth = {
  logged: false,
  user: null,
};

const ModalSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.logged = action.payload;
      if (action.payload) state.user = localStorage.getItem("token");
    },
  },
});

export const { setAuth } = ModalSlice.actions;
export default ModalSlice.reducer;
