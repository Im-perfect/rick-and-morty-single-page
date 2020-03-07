import { GET_CHARACTERS } from "../actions/character";

const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return action.characters;
    default:
      return state;
  }
};

export default reducer;
