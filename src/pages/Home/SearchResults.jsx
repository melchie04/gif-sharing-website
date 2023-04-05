import React from "react";
import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { useGifContext } from "../../context/ContextProvider";
import CustomBox from "../../components/CustomBox";
import GifList from "../../components/GifList";
import Loader from "../../components/Loader";

const SearchResults = () => {
  const { query, searchResults, loading } = useGifContext();

  return (
    <CustomBox>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Typography variant="h6" color="primary" py="1rem">
            <FontAwesomeIcon icon={faList} /> Search for "{query}"
          </Typography>
          {searchResults ? <GifList gifs={searchResults} /> : null}
        </>
      )}
    </CustomBox>
  );
};

export default SearchResults;
