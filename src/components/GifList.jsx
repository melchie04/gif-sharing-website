import React from "react";
import Masonry from "react-masonry-css";
import "../styles/MasonryStyles.css";
import GifItem from "./GifItem";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  800: 2,
  500: 1,
};

const GifList = ({ gifs, loading }) => {
  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {gifs.map((gif) => (
          <GifItem key={gif.id} {...gif} gifItem={gif} />
        ))}
      </Masonry>
    </>
  );
};

export default GifList;
