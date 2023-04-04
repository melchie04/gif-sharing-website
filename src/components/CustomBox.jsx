import React from "react";
import { Box } from "@mui/material";

const CustomBox = ({ children }) => {
  return (
    <Box
      color="transparent"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      p="1rem"
    >
      {children}
    </Box>
  );
};

export default CustomBox;
