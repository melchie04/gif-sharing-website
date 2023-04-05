import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useGifContext } from "../../context/ContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faCode,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import GlowingButton from "../../components/GlowingButton";
import CustomBox from "../../components/CustomBox";
import GifContainer from "../../components/GifContainer";

const index = () => {
  const { selectedGif } = useGifContext();
  return (
    <CustomBox>
      <GifContainer {...selectedGif} GifContainer={selectedGif} />
      <Box
        color="transparent"
        display="flex"
        justifyContent="center"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        py="2rem"
        gap="2rem"
      >
        <Link to="/">
          <GlowingButton>
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </GlowingButton>
        </Link>
        <a href={selectedGif.url} target="_blank">
          <GlowingButton>
            <FontAwesomeIcon icon={faPaperPlane} /> Share GIFs
          </GlowingButton>
        </a>
        <a href={selectedGif.embed_url} target="_blank">
          <GlowingButton>
            <FontAwesomeIcon icon={faCode} /> Embed GIFs
          </GlowingButton>
        </a>
      </Box>
    </CustomBox>
  );
};

export default index;
