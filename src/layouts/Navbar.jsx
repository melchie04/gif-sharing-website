import React from "react";
import { Fab, useScrollTrigger, Typography, Box } from "@mui/material";
import logo from "../assets/icons/gifshare.png";
import JumpingLogo from "../components/JumpingLogo";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export function BackToTop(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    const anchor = document.querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Fab
      color="secondary"
      size="small"
      aria-label="scroll back to top"
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        visibility: trigger ? "visible" : "hidden",
        opacity: trigger ? 1 : 0,
        transition: "opacity 0.2s",
      }}
      onClick={handleClick}
    >
      {children}
    </Fab>
  );
}

const Navbar = () => {
  return (
    <>
      <ElevationScroll>
        <Box
          color="transparent"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box id="back-to-top-anchor" width="50px" mt="30px">
            <JumpingLogo logo={logo} />
          </Box>
          <Typography
            variant="h3"
            component="div"
            color="primary"
            fontFamily="Alkatra"
            pt="2rem"
          >
            GifShare
          </Typography>
        </Box>
      </ElevationScroll>
    </>
  );
};

export default Navbar;
