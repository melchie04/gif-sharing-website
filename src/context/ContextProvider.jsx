import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import { reducer } from "../reducer/Reducer";
import Actions from "../utils/Actions";

const GifContext = createContext();

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = "https://api.giphy.com/v1/gifs";

const ContextProvider = ({ children }) => {
  const [rendered, setRendered] = useState("trending");
  const [selectedGif, setSelectedGif] = useState({});
  const [query, setQuery] = useState("");
  const initialState = {
    loading: false,
    trending: [],
    searchResults: [],
    random: {},
    favorites: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getTrending = async () => {
    dispatch({ type: Actions.LOADING });
    const res = await axios.get(
      `${baseUrl}/trending?api_key=${apiKey}&limit=10`
    );
    dispatch({ type: Actions.GET_TRENDING, payload: res.data.data });
  };

  const getRandom = async () => {
    dispatch({ type: Actions.LOADING });
    const res = await axios.get(`${baseUrl}/random?api_key=${apiKey}`);
    dispatch({ type: Actions.GET_RANDOM, payload: res.data.data });
  };

  const getSearchResults = async (query) => {
    dispatch({ type: Actions.LOADING });
    const res = await axios.get(
      `${baseUrl}/search?api_key=${apiKey}&q=${query}&limit=10`
    );
    dispatch({ type: Actions.GET_SEARCH, payload: res.data.data });
  };

  const addToFavorites = (gif) => {
    const storedItems =
      JSON.parse(window.localStorage.getItem("myFavorites")) || [];
    const existingItem = storedItems.find((item) => item.id === gif.id);

    if (!existingItem) {
      const items = [...storedItems, gif];
      window.localStorage.setItem("myFavorites", JSON.stringify(items));
      alert("Added to Favorites");
    } else {
      alert("Already Exist");
    }
  };

  const removeFromFavorites = (gif) => {
    const storedItems =
      JSON.parse(window.localStorage.getItem("myFavorites")) || [];
    const items = storedItems.filter((item) => item.id !== gif.id);
    window.localStorage.setItem("myFavorites", JSON.stringify(items));
    alert("Removed from Favorites");
    getFavorites();
  };

  const getFavorites = () => {
    dispatch({ type: Actions.LOADING });
    const storedItems =
      JSON.parse(window.localStorage.getItem("myFavorites")) || [];
    dispatch({ type: Actions.GET_FAVORITES, payload: storedItems });
  };

  useEffect(() => {
    getTrending();
  }, []);

  console.log(state.trending);

  return (
    <GifContext.Provider
      value={{
        ...state,
        rendered,
        setRendered,
        selectedGif,
        setSelectedGif,
        getTrending,
        getRandom,
        getSearchResults,
        query,
        setQuery,
        addToFavorites,
        removeFromFavorites,
        getFavorites,
      }}
    >
      {children}
    </GifContext.Provider>
  );
};

export default ContextProvider;

export const useGifContext = () => {
  return useContext(GifContext);
};
