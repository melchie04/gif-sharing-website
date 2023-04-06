import React, { useState } from "react";
import Masonry from "react-masonry-css";
import "../styles/MasonryStyles.css";
import GifItem from "./GifItem";
import Loader from "./Loader";
import { Box } from "@mui/material";

const GifList = ({ gifs }) => {
  const [imgLoadCount, setImgLoadCount] = useState(1);
  const colByGifs =
    gifs.length === 1 ? 1 : gifs.length === 2 ? 2 : gifs.length === 3 ? 3 : 4;

  return (
    <Box mx={{ xs: "5%", sm: "10%" }}>
      <Masonry
        breakpointCols={{
          default: colByGifs,
          1100: colByGifs > 3 ? 3 : colByGifs,
          800: colByGifs > 2 ? 2 : colByGifs,
          500: 1,
        }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {gifs.slice(0, imgLoadCount).map((gif) => (
          <GifItem
            key={gif.id}
            {...gif}
            gifItem={gif}
            imgLoadCount={imgLoadCount}
            setImgLoadCount={setImgLoadCount}
          />
        ))}
      </Masonry>
      {gifs && gifs.length <= imgLoadCount ? null : <Loader />}
    </Box>
  );
};

export default GifList;
