import { configureStore } from "@reduxjs/toolkit";

import { categorys, catsImages } from "./";

export const store = configureStore({
  reducer: {
    categorys: categorys.reducer,
    catsImages: catsImages.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
