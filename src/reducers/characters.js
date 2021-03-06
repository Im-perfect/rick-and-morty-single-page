import { GET_CHARACTERS } from "../actions/character";

const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return action.payload.results;
    default:
      return state;
  }
};

export default reducer;
