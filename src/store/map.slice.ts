import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Modal = {
  activeDistrict: string | null;
  activeGeoTIFF: "tas" | "pr" | "bio";
};

const initialState: Modal = {
  activeDistrict: null,
  activeGeoTIFF: "tas",
};
const MapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setActiveDistrict(state, action: PayloadAction<string | null>) {
      state.activeDistrict = action.payload;
    },
    setActiveGeoTIFF(state, action: PayloadAction<"tas" | "pr" | "bio">) {
      state.activeGeoTIFF = action.payload;
    },
  },
});

export const { setActiveDistrict } = MapSlice.actions;
export const { setActiveGeoTIFF } = MapSlice.actions;
export default MapSlice.reducer;
