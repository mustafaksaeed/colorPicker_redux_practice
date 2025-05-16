import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "red",
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    picker: (state, action) => {
      state.color += action.payload;
    },
  },
});

export const colorReducer = colorSlice.reducer;
export const { picker } = colorSlice.actions;
