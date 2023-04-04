import React, { useState } from "react";
import CustomBox from "../../components/CustomBox";
import SearchBox from "../../components/SearchBox";
import HomeButtons from "./HomeButtons";
import TrendingList from "./TrendingList";

const index = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  const handleSearchClick = () => {
    // Handle search click logic here
  };

  return (
    <CustomBox>
      <SearchBox
        value={searchValue}
        onChange={handleSearchChange}
        onKeyDown={handleSearchKeyDown}
        onClick={handleSearchClick}
      />
      <HomeButtons />
      <TrendingList />
    </CustomBox>
  );
};

export default index;
