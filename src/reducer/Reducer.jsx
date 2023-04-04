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
    default:
      break;
  }

  return state;
};
