import { createSlice } from "@reduxjs/toolkit";

interface userSliceType{
    access_token:null | string |undefined;
}
const initialState:userSliceType = {
  access_token:null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAccessToken(state, action) {
      state.access_token = action.payload;
    },
  },
});

export const { setAccessToken } = userSlice.actions;
export default userSlice.reducer;
