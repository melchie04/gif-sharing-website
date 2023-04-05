import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useGifContext } from "../context/ContextProvider";

const GifItem = ({
  id,
  title,
  embed_url,
  url: link,
  images: {
    original: { url },
  },
}) => {
  const { rendered, setSelectedGif, addToFavorites, removeFromFavorites } =
    useGifContext();
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleGifClick = () => {
    setSelectedGif({
      id,
      title,
      embed_url,
      url: link,
      images: {
        original: { url },
      },
    });
  };

  const handleHeartClick = () => {
    if (rendered === "favorites") {
      removeFromFavorites({
        id,
        title,
        embed_url,
        url: link,
        images: {
          original: { url },
        },
      });
    } else {
      addToFavorites({
        id,
        title,
        embed_url,
        url: link,
        images: {
          original: { url },
        },
      });
    }
  };

  return (
    <>
      <Box sx={{ position: "relative" }}>
        {loading ? (
          <CircularProgress
            color="primary"
            sx={{
              position: "absolute",
              top: "1rem",
              left: "45%",
            }}
          />
        ) : null}
        <Link to={`/gif/${id}`}>
          <img
            src={url}
            alt={title}
            width="100%"
            height="100%"
            onClick={handleGifClick}
            onLoad={handleImageLoad}
            style={{
              borderRadius: "10px",
              border: "2px solid",
              borderColor: "#e474e4",
              cursor: "pointer",
              visibility: loading ? "hidden" : "visible",
            }}
          />
        </Link>
        {loading ? null : (
          <Box
            onClick={handleHeartClick}
            sx={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
            }}
          >
            {rendered === "favorites" ? (
              <FontAwesomeIcon
                icon={faTimes}
                color="#ff3131"
                fontSize="1.8rem"
                style={{
                  cursor: "pointer",
                }}
                shake
                onMouseOver={(e) => {
                  e.currentTarget.classList.add("fa-bounce");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.classList.remove("fa-bounce");
                }}
              />
            ) : (
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
            )}
          </Box>
        )}
      </Box>
    </>
  );
};

export default GifItem;
