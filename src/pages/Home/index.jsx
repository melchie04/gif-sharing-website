import React, { useState } from "react";
import { useGifContext } from "../../context/ContextProvider";
import CustomBox from "../../components/CustomBox";
import SearchBox from "../../components/SearchBox";
import HomeButtons from "./HomeButtons";
import TrendingList from "./TrendingList";
import Random from "./Random";
import SearchResults from "./SearchResults";
import Favorites from "./Favorites";

const index = () => {
  const [searchValue, setSearchValue] = useState("");
  const {
    rendered,
    setRendered,
    getTrending,
    getRandom,
    getSearchResults,
    setQuery,
    getFavorites,
  } = useGifContext();

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  const handleSearchClick = () => {
    if (searchValue) {
      setQuery(searchValue);
      getSearchResults(searchValue);
      setRendered("search");
    }
  };

  const handleFavoritesClick = () => {
    getFavorites();
    setSearchValue("");
    setRendered("favorites");
  };

  const handleTrendingClick = () => {
    getTrending();
    setRendered("trending");
    setSearchValue("");
  };

  const handleRandomClick = () => {
    getRandom();
    setRendered("random");
    setSearchValue("");
  };

  const content = () => {
    switch (rendered) {
      case "trending":
        return <TrendingList />;
      case "favorites":
        return <Favorites />;
      case "random":
        return <Random />;
      case "search":
        return <SearchResults />;
      default:
        return <TrendingList />;
    }
  };

  return (
    <CustomBox>
      <SearchBox
        value={searchValue}
        onChange={handleSearchChange}
        onKeyDown={handleSearchKeyDown}
        onClick={handleSearchClick}
      />
      <HomeButtons
        handleFavoritesClick={handleFavoritesClick}
        handleTrendingClick={handleTrendingClick}
        handleRandomClick={handleRandomClick}
      />
      {content()}
    </CustomBox>
  );
};

export default index;
