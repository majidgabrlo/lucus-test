import { createSlice } from "@reduxjs/toolkit";
import { RootObject } from "./imageType";

interface initialStateInterFace {
  imageList: RootObject[];
  error: string;
}

const initialState: initialStateInterFace = {
  imageList: [],
  error: "",
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.imageList = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setImages, setError } = postsSlice.actions;

export default postsSlice.reducer;
