import { configureStore } from "@reduxjs/toolkit";
import { colorReducer } from "./Slice";

export const store = configureStore({
  reducer: {
    color: colorReducer,
  },
});
