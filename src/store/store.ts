import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";
import post from "./posts/postSlice";
export const store = configureStore({
  reducer: {
    auth,
    post,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
