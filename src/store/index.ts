import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth.slice";
import modalSlice from "./modal.slice";
import mapSlice from "./map.slice";
const store = configureStore({
  reducer: {
    modal: modalSlice,
    auth: authSlice,
    map: mapSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
