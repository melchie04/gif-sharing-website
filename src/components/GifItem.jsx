import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useGifContext } from "../context/ContextProvider";

const GifItem = ({
  id,
  title,
  embed_url,
  rendered,
  url: link,
  images: {
    original: { url },
  },
}) => {
  const { setSelectedGif } = useGifContext();
  const [loadingColor, setLoadingColor] = useState(getRandomColor());

  function getRandomColor() {
    const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const handleGifClick = () => {
    setSelectedGif({ title, embed_url, link, url });
  };

  return (
    <Box
      sx={{
        borderRadius: "10px",
        border: "2px solid",
        borderColor: "primary.main",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "loadingColor",
      }}
    >
      <Link to={`/gif/${id}`}>
        <img
          src={url}
          alt={title}
          width="100%"
          height="100%"
          onClick={handleGifClick}
          onLoad={() => setLoadingColor("")}
          style={{ backgroundColor: loadingColor, cursor: "pointer" }}
        />
      </Link>
      <Box
        sx={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
        }}
      >
        <FontAwesomeIcon
          icon={faHeart}
          color="#ff3131"
          fontSize="1.8rem"
          style={{
            cursor: "pointer",
          }}
          beat
          onMouseOver={(e) => {
            e.currentTarget.classList.add("fa-bounce");
          }}
          onMouseLeave={(e) => {
            e.currentTarget.classList.remove("fa-bounce");
          }}
        />
      </Box>
    </Box>
  );
};

export default GifItem;
