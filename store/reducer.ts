import { combineReducers } from "@reduxjs/toolkit";
import dashboardReducer from "./dashboard/dashboardSlice";
import userReducer from "./user/userSlice"

export const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  user:userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
