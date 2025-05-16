import { configureStore } from "@reduxjs/toolkit";
import { colorReducer } from "./Slice";

export const Store = configureStore({
  reducer: {
    color: colorReducer,
  },
});
