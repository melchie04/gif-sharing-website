import React from "react";
import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom } from "@fortawesome/free-solid-svg-icons";
import { useGifContext } from "../../context/ContextProvider";
import CustomBox from "../../components/CustomBox";
import GifItem from "../../components/GifItem";
import Loader from "../../components/Loader";

const Random = () => {
  const { random, loading } = useGifContext();

  return (
    <CustomBox>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Typography variant="h6" color="primary" py="1rem">
            <FontAwesomeIcon icon={faRandom} /> Random GIFs
          </Typography>
          <GifItem {...random} gifItem={random} />
        </>
      )}
    </CustomBox>
  );
};

export default Random;
