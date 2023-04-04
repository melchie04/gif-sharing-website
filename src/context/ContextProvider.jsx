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
  const [selectedGif, setSelectedGif] = useState({});
  const initialState = {
    loading: false,
    searchResults: [],
    trending: [],
    favourites: [],
    random: {},
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getTrending = async () => {
    dispatch({ type: Actions.LOADING });
    const res = await axios.get(
      `${baseUrl}/trending?api_key=${apiKey}&limit=10`
    );
    dispatch({ type: Actions.GET_TRENDING, payload: res.data.data });
  };

  useEffect(() => {
    getTrending();
  }, []);

  console.log(state.trending);

  return (
    <GifContext.Provider
      value={{
        ...state,
        selectedGif,
        setSelectedGif,
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
