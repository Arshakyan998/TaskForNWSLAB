import { createAsyncThunk } from "@reduxjs/toolkit";
import serviceWorker from "../serviceWorker";

export const getCategorys = createAsyncThunk("GET/CATEGORYS", async (_, ThunkAPI) => {
  try {
    const data = await serviceWorker.getCategorysAsync();

    return ThunkAPI.fulfillWithValue(data);
  } catch (error) {
    return ThunkAPI.rejectWithValue("Error unable to access server");
  }
});
