import React from "react";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/styled-engine";

const GlowingButton = ({ onClick, children }) => {
  return <AnimatedButton onClick={onClick}>{children}</AnimatedButton>;
};

const glowingAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
`;

const AnimatedButton = styled("button")({
  fontWeight: "bold",
  width: "140px",
  height: "30px",
  border: "none",
  outline: "none",
  color: "#fff",
  backgroundColor: "#e74f82",
  cursor: "pointer",
  position: "relative",
  zIndex: 0,
  borderRadius: "10px",
  "&::before": {
    content: '""',
    background: `linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c0,
      #ff0000
    )`,
    position: "absolute",
    top: "-2px",
    left: "-2px",
    backgroundSize: "400%",
    zIndex: -1,
    filter: "blur(5px)",
    width: "calc(100% + 4px)",
    height: "calc(100% + 4px)",
    animation: `${glowingAnimation} 20s linear infinite`,
    opacity: 1,
    transition: "opacity 0.3s ease-in-out",
    borderRadius: "10px",
  },
  "&:active": {
    color: "#000",
  },
  "&:active::after": {
    background: "transparent",
  },
  "&::after": {
    zIndex: -1,
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "#e74f82",
    left: 0,
    top: 0,
    borderRadius: "10px",
  },
});

export default GlowingButton;
