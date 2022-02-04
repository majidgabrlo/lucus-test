import { Dispatch } from "@reduxjs/toolkit";

import { setImages } from "./picturesSlice";
import axios from "../../axios/unsplash.axios";

export const getPictures = (route: string) => async (dispatch: Dispatch) => {
  const response = await axios.get("search/photos", {
    params: {
      query: route,
    },
  });
  dispatch(setImages(response.data.results));
};
