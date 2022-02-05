import { Dispatch } from "@reduxjs/toolkit";

import { setImages,setError } from "./picturesSlice";
import axios from "../../axios/unsplash.axios";

export const getPictures = (route: string) => async (dispatch: Dispatch) => {
  dispatch(setError(""))
  try {
    const response = await axios.get("search/photos", {
      params: {
        query: route,
      },
    });
    dispatch(setImages(response.data.results));
  } catch (error:any) {
    dispatch(setError(error.message))
  }
};
