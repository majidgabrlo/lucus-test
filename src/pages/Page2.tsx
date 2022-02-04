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

  const picturesInScreenSize = () => {
    if (window.innerWidth < 500) return 1;
    if (window.innerWidth < 800) return 2;
    return 4;
  };

  return (
    <div
      className="md:flex flex-col"
      style={{ maxHeight: window.innerWidth > 600 ? "95vh" : "unset" }}
    >
      <input
        className="shadow appearance-none border rounded mb-3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Title"
      />
      {!imageList.length && <div>Type to search for images in Unsplash</div>}
      <ImageList variant="masonry" cols={picturesInScreenSize()} gap={8}>
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
