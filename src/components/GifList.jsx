import React from "react";
import Masonry from "react-masonry-css";
import "../styles/MasonryStyles.css";
import GifItem from "./GifItem";

const GifList = ({ gifs }) => {
  const colByGifs =
    gifs.length === 1 ? 1 : gifs.length === 2 ? 2 : gifs.length === 3 ? 3 : 4;

  return (
    <>
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
        {gifs.map((gif) => (
          <GifItem key={gif.id} {...gif} gifItem={gif} />
        ))}
      </Masonry>
    </>
  );
};

export default GifList;
