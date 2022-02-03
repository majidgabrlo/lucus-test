import { createSlice } from "@reduxjs/toolkit";

interface posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface initialStateInterFace {
  route: string;
  postsList: posts[];
}

const initialState: initialStateInterFace = {
  route: "",
  postsList: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.postsList = action.payload;
    },
    setRoute:(state,action)=>{
        state.route=action.payload
    }
  },
});

export const { setPosts,setRoute } = postsSlice.actions;

export default postsSlice.reducer;
