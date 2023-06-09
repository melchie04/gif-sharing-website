import React from "react";
import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { useGifContext } from "../../context/ContextProvider";
import CustomBox from "../../components/CustomBox";
import GifList from "../../components/GifList";
import Loader from "../../components/Loader";

const TrendingList = () => {
  const { trending, loading } = useGifContext();

  return (
    <CustomBox>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Typography variant="h6" color="primary" py="1rem">
            <FontAwesomeIcon icon={faArrowTrendUp} /> Trending GIFs
          </Typography>
          <GifList gifs={trending} />
        </>
      )}
    </CustomBox>
  );
};

export default TrendingList;
