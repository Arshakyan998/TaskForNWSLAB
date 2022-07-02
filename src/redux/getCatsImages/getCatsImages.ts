import { options } from "./catsImagesTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import serviceWorker from "../serviceWorker";

export const getCatsImages = createAsyncThunk(
  "GET/CATS_IMAGES",
  async ({ page = 1, id }: options, ThunkAPI) => {
    try {
      const data = await serviceWorker.getCatsImages(page, id);

      return ThunkAPI.fulfillWithValue(data);
    } catch (e) {
      return ThunkAPI.rejectWithValue("unable to access server");
    }
  }
);
