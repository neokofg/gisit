import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth.slice";
import modalSlice from "./modal.slice";
const store = configureStore({
  reducer: {
    modal: modalSlice,
    auth: authSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
