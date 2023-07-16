import { createSlice } from "@reduxjs/toolkit";

const initialState: dashboardSliceType = {
  activeTab: "dashboard",
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setActiveTabData(state, action) {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTabData } = dashboardSlice.actions;
export default dashboardSlice.reducer;
