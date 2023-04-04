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

const index = () => {
  const {
    selectedGif: { title, embed_url, link, url },
  } = useGifContext();
  return (
    <CustomBox>
      <Box
        sx={{
          borderRadius: "10px",
          border: "2px solid",
          borderColor: "primary.main",
          overflow: "hidden",
          backgroundColor: "primary.main",
          maxWidth: "100%",
        }}
      >
        <img src={url} alt={title} style={{ width: "100%" }} />
      </Box>
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
        <a href={link} target="_blank">
          <GlowingButton>
            <FontAwesomeIcon icon={faPaperPlane} /> Share GIFs
          </GlowingButton>
        </a>
        <a href={embed_url} target="_blank">
          <GlowingButton>
            <FontAwesomeIcon icon={faCode} /> Embed GIFs
          </GlowingButton>
        </a>
      </Box>
    </CustomBox>
  );
};

export default index;
