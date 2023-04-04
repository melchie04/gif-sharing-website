import React from "react";
import GifList from "../../components/GifList";
import CustomBox from "../../components/CustomBox";
import { useGifContext } from "../../context/ContextProvider";

const TrendingList = () => {
  const { trending, loading } = useGifContext();

  return (
    <CustomBox>
      <GifList gifs={trending} loading={loading} />
    </CustomBox>
  );
};

export default TrendingList;
