import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useGifContext } from "../context/ContextProvider";

const GifContainer = ({
  id,
  title,
  embed_url,
  url: link,
  images: {
    original: { url },
  },
}) => {
  const { rendered, addToFavorites, removeFromFavorites } = useGifContext();

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
    <Box sx={{ position: "relative" }}>
      {url ? (
        <>
          <img
            src={url}
            alt={title}
            style={{
              maxWidth: "100%",
              borderRadius: "10px",
              border: "2px solid",
              borderColor: "#e474e4",
            }}
          />
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
        </>
      ) : null}
    </Box>
  );
};

export default GifContainer;
