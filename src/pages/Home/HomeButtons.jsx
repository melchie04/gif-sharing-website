import React from "react";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faArrowTrendUp,
  faRandom,
} from "@fortawesome/free-solid-svg-icons";
import GlowingButton from "../../components/GlowingButton";

const HomeButtons = ({
  handleFavoritesClick,
  handleTrendingClick,
  handleRandomClick,
}) => {
  return (
    <Box
      color="transparent"
      display="flex"
      justifyContent="center"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
      py="2rem"
      gap="2rem"
    >
      <GlowingButton onClick={handleFavoritesClick}>
        <FontAwesomeIcon icon={faHeart} /> Favorites
      </GlowingButton>
      <GlowingButton onClick={handleTrendingClick}>
        <FontAwesomeIcon icon={faArrowTrendUp} /> Trending GIFs
      </GlowingButton>
      <GlowingButton onClick={handleRandomClick}>
        <FontAwesomeIcon icon={faRandom} /> Random GIFs
      </GlowingButton>
    </Box>
  );
};

export default HomeButtons;
