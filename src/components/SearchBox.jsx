import React from "react";
import { Box, InputBase, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBox = ({ value, onChange, onKeyDown, onClick }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      backgroundColor="#ffffff"
      border="1px solid"
      borderColor="secondary.main"
      borderRadius="25px"
      width="90%"
      maxWidth="700px"
      p="5px 20px"
    >
      <InputBase
        placeholder="Search..."
        style={{
          fontSize: "1.2rem",
          marginLeft: 8,
          flex: 1,
        }}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <IconButton
        type="button"
        aria-label="search"
        sx={{
          "&:hover": {
            backgroundColor: "rgba(163, 80, 163, 0.2)",
          },
        }}
        onClick={onClick}
      >
        <Search color="secondary" />
      </IconButton>
    </Box>
  );
};

export default SearchBox;
