import { Dispatch } from "@reduxjs/toolkit";

import { setPosts, setRoute } from "./postSlice";
import axios from "../../axios/post.axios";

export const setRouteAction = (route: string) => (dispatch: Dispatch) => {
  dispatch(setRoute(route));
};

export const getAllPosts = (route: string) => async (dispatch: Dispatch) => {
  if (!route.includes("?") && !route.includes('_limit')) {
    route = `${route}?_limit=7`;
  } else {
    route = `${route}&_limit=7`;
  }
  const posts = await axios.get(`/posts${route}`);

  console.log("pp", posts);

  dispatch(setPosts(posts.data));
};
