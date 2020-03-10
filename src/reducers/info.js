import { GET_CHARACTERS } from "../actions/character";
import { GET_LOCATIONS } from "../actions/location";
import { GET_EPISODES } from "../actions/episode";

const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return action.payload.info;
    case GET_LOCATIONS:
      return action.payload.info;
    case GET_EPISODES:
      return action.payload.info;
    default:
      return state;
  }
};

export default reducer;
