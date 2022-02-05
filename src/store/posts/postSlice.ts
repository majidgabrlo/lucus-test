import { createSlice } from "@reduxjs/toolkit";

interface posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface initialStateInterFace {
  postsList: posts[];
  error:string
}

const initialState: initialStateInterFace = {
  postsList: [],
  error:""
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.postsList = action.payload;
    },
    setError:(state,action)=>{
      state.error=action.payload
    }
  },
});

export const { setPosts,setError } = postsSlice.actions;

export default postsSlice.reducer;
