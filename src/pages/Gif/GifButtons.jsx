import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faCode,
  faArrowLeft,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faTumblr,
  faPinterestP,
  faRedditAlien,
} from "@fortawesome/free-brands-svg-icons";
import {
  FacebookShareButton,
  TwitterShareButton,
  TumblrShareButton,
  PinterestShareButton,
  RedditShareButton,
} from "react-share";
import GlowingButton from "../../components/GlowingButton";

const GifButtons = ({
  selectedGif: {
    embed_url,
    url: link,
    images: {
      original: { url },
    },
  },
}) => {
  const [selectedButton, setSelectedButton] = useState("");
  const [copyLink, setCopyLink] = useState("Copy Gif Link");
  const [copyCode, setCopyCode] = useState("Copy Code");

  const copyGifLink = async () => {
    try {
      setCopyLink("Link Copied!");
      await navigator.clipboard.writeText(url);
    } catch (error) {
      console.error("Failed to copy:", error);
    } finally {
      setTimeout(() => {
        setCopyLink("Copy Gif Link");
      }, 3000);
    }
  };

  const generateIframe = () => {
    return `<iframe src="${embed_url}" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="${link}">via GIPHY</a></p>`;
  };

  const copyGenerateCode = async () => {
    try {
      setCopyCode("Code Copied!");
      await navigator.clipboard.writeText(generateIframe());
    } catch (error) {
      console.error("Failed to copy:", error);
    } finally {
      setTimeout(() => {
        setCopyCode("Copy Code");
      }, 3000);
    }
  };

  return (
    <>
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
          <GlowingButton onClick={() => setSelectedButton("")}>
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </GlowingButton>
        </Link>
        <GlowingButton onClick={() => setSelectedButton("share")}>
          <FontAwesomeIcon icon={faPaperPlane} /> Share GIFs
        </GlowingButton>
        <GlowingButton onClick={() => setSelectedButton("embed")}>
          <FontAwesomeIcon icon={faCode} /> Embed GIFs
        </GlowingButton>
      </Box>
      {selectedButton === "share" ? (
        <>
          <Box
            color="transparent"
            display="flex"
            justifyContent="center"
            alignItems="center"
            py="10px"
            gap="10px"
          >
            <FacebookShareButton url={url}>
              <Box sx={{ ...styles.icon, ...styles.facebook }}>
                <FontAwesomeIcon icon={faFacebookF} />
              </Box>
            </FacebookShareButton>
            <TwitterShareButton url={url}>
              <Box sx={{ ...styles.icon, ...styles.twitter }}>
                <FontAwesomeIcon icon={faTwitter} />
              </Box>
            </TwitterShareButton>
            <TumblrShareButton url={url}>
              <Box sx={{ ...styles.icon, ...styles.tumblr }}>
                <FontAwesomeIcon icon={faTumblr} />
              </Box>
            </TumblrShareButton>
            <PinterestShareButton url={url} media={url}>
              <Box sx={{ ...styles.icon, ...styles.pinterest }}>
                <FontAwesomeIcon icon={faPinterestP} />
              </Box>
            </PinterestShareButton>
            <RedditShareButton url={url}>
              <Box sx={{ ...styles.icon, ...styles.reddit }}>
                <FontAwesomeIcon icon={faRedditAlien} />
              </Box>
            </RedditShareButton>
          </Box>
          <Box
            color="transparent"
            display="flex"
            justifyContent="center"
            alignItems="center"
            py="10px"
            gap="10px"
          >
            <Button variant="outlined" onClick={copyGifLink}>
              <FontAwesomeIcon icon={faLink} />
              <span style={{ paddingLeft: "5px" }}>{copyLink}</span>
            </Button>
          </Box>
        </>
      ) : null}
      {selectedButton === "embed" ? (
        <>
          <Box
            color="transparent"
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            py="10px"
            gap="10px"
          >
            <TextField
              color="primary"
              label="Embed Gif"
              defaultValue={generateIframe()}
              size="small"
              InputLabelProps={{
                style: styles.inputLabel,
              }}
              InputProps={{
                readOnly: true,
                style: styles.input,
              }}
              sx={styles.textfield}
            />
          </Box>
          <Box
            color="transparent"
            display="flex"
            justifyContent="center"
            alignItems="center"
            py="10px"
            gap="10px"
          >
            <Button variant="outlined" onClick={copyGenerateCode}>
              <FontAwesomeIcon icon={faCode} />
              <span style={{ paddingLeft: "5px" }}>{copyCode}</span>
            </Button>
          </Box>
        </>
      ) : null}
    </>
  );
};

const styles = {
  facebook: {
    backgroundColor: "#4267b2",
  },
  twitter: {
    backgroundColor: "#1da1f2",
  },
  tumblr: {
    backgroundColor: "#34526f",
  },
  pinterest: {
    backgroundColor: "#e60023",
  },
  reddit: {
    backgroundColor: "#ff4500",
  },
  icon: {
    color: "#ffffff",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    borderRadius: "3px",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  inputLabel: {
    color: "#e474e4",
  },
  input: {
    color: "#ffffff",
  },
  textfield: {
    width: "250px",
    maxWidth: "100%",
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#e474e4",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#e474e4",
    },
    "&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#e474e4",
    },
  },
};

export default GifButtons;
