import { createSlice } from "@reduxjs/toolkit";
import {RootObject} from './imageType'

interface initialStateInterFace {
  route: string;
  imageList: RootObject[];
}

const initialState: initialStateInterFace = {
  route: "",
  imageList: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.imageList = action.payload;
    },
    setRoute:(state,action)=>{
        state.route=action.payload
    }
  },
});

export const { setImages,setRoute } = postsSlice.actions;

export default postsSlice.reducer;
