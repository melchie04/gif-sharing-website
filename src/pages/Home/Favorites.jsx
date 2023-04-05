import React from "react";
import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useGifContext } from "../../context/ContextProvider";
import CustomBox from "../../components/CustomBox";
import GifList from "../../components/GifList";
import Loader from "../../components/Loader";

const Favorites = () => {
  const { favorites, loading } = useGifContext();

  return (
    <CustomBox>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Typography variant="h6" color="primary" py="1rem">
            <FontAwesomeIcon icon={faHeart} /> Favorites
          </Typography>
          {favorites ? <GifList gifs={favorites} /> : null}
        </>
      )}
    </CustomBox>
  );
};

export default Favorites;
