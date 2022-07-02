import { iCategorys } from "./../../globalTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { iInitalState } from "./categorysTypes";

import { getCategorys } from "./getCategorys";

const categorys = createSlice({
  initialState: {
    categorys: [],
    error: "",
    isLoading: true,
  } as iInitalState,
  name: "CATEGORYS",
  reducers: {},
  extraReducers: {
    [getCategorys.fulfilled.type]: (
      state,
      action: PayloadAction<iCategorys[]>
    ) => {
      state.isLoading = false;
      state.categorys = action.payload;
    },
    [getCategorys.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getCategorys.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export default categorys;
