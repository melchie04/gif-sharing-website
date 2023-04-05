import Actions from "../utils/Actions";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case Actions.LOADING:
      return { ...state, loading: true };
    case Actions.GET_TRENDING:
      return {
        ...state,
        loading: false,
        trending: payload,
      };
    case Actions.GET_RANDOM:
      return {
        ...state,
        loading: false,
        random: payload,
      };
    case Actions.GET_SEARCH:
      return {
        ...state,
        loading: false,
        searchResults: payload,
      };
    case Actions.GET_FAVORITES:
      return {
        ...state,
        loading: false,
        favorites: payload,
      };
    default:
      break;
  }

  return state;
};
