import { Dispatch } from "@reduxjs/toolkit";

import { setError, setPosts } from "./postSlice";
import axios from "../../axios/post.axios";

interface routeType{
  page:number
  userId?:number
}

export const getAllPosts = (route: routeType) => async (dispatch: Dispatch) => {
  dispatch(setError(""))
  try {
    const posts = await axios.get(`/posts`, {
      params: {
        _limit: 7,
        _page:route.page,
        userId:route.userId ? route.userId :null
      },
    });
    dispatch(setPosts(posts.data));
  } catch (error:any) {
    dispatch(setError(error.message))
  }
};
