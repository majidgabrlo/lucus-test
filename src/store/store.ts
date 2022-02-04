import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";
import post from "./posts/postSlice";
import image from './pictures/picturesSlice'
export const store = configureStore({
  reducer: {
    auth,
    post,
    image
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
