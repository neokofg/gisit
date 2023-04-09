import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface User {
  id: number;
  name: string;
  email: string;
}
type Auth = {
  logged: boolean;
  user: User | null;
  token: string | null;
};

const initialState: Auth = {
  logged: false,
  user: null,
  token: null,
};

const ModalSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.logged = action.payload;
      if (action.payload) {
        state.token = localStorage.getItem("token");
      }
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      state.user = user;
      console.log(state.user);
    },
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});

export const { setAuth, setUser } = ModalSlice.actions;
export default ModalSlice.reducer;
