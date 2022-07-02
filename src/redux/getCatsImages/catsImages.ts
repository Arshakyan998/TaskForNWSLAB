import { iCatsImages } from "./../../globalTypes";
import { getCatsImages } from "./getCatsImages";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { iInitalState } from "./catsImagesTypes";

const catsImages = createSlice({
  name: "CATS/IMAGES",
  initialState: {
    date: [],
    error: "",
    isLoading: false,
    currentId: null,
    currentPage: 1,
    contentLength: 0,
  } as iInitalState,
  reducers: {
    pageId: (state, action: PayloadAction<number>) => {
      state.currentId = action.payload;
    },
    changeCurrenPage: (state) => {
      state.currentPage = state.currentPage + 1;
    },
    initalCurrentPage: (state) => {
      state.currentPage = 1;
      if (state.date.length) {
        state.date = [];
      }
    },
    changeContentLength: (state, action: PayloadAction<number>) => {
      state.contentLength = action.payload;
    },
  },
  extraReducers: {
    [getCatsImages.fulfilled.type]: (
      state,
      action: PayloadAction<iCatsImages[]>
    ) => {
      state.date = state.date.length
        ? [...state.date, ...action.payload]
        : action.payload;
      state.isLoading = false;
    },
    [getCatsImages.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getCatsImages.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default catsImages;
