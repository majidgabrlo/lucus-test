import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/hooks";
import { getPictures as getPicturesAction } from "../store/pictures/picturesActions";
import { RootState } from "../store/store";
import { ImageList, ImageListItem } from "@mui/material";
import useDebounce from "../hooks/useDebouncer";

function Page2() {
  const [term, setTerm] = useState("");
  const debouncedTerm = useDebounce<string>(term, 2000);
  const { imageList } = useSelector((state: RootState) => state.image);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getPictures(debouncedTerm);
  }, [debouncedTerm]);


  const getPictures = (term: string) => {
    dispatch(getPicturesAction(term));
  };

  return (
    <div className="flex flex-col" style={{ maxHeight: "95vh" }}>
      <input
        className="shadow appearance-none border rounded mb-3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Title"
      />
      <ImageList variant="masonry" cols={4} gap={8}>
        {imageList.map((item) => (
          <ImageListItem key={item.blur_hash}>
            <img
              src={item.urls.regular}
              alt={item.description}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default Page2;
