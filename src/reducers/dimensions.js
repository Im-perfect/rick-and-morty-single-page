import { GET_DIMENSIONS } from "../actions/dimension";

const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case GET_DIMENSIONS:
      return action.dimensions;
    default:
      return state;
  }
};

export default reducer;
