import React from "react";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/styled-engine";

const JumpingLogo = ({ logo }) => {
  return (
    <AnimatedImage src={logo} alt="GifShare Logo" width="100%" height="100%" />
  );
};

const jumpAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const AnimatedImage = styled("img")({
  animation: `${jumpAnimation} 0.5s ease-in-out infinite`,
});

export default JumpingLogo;
