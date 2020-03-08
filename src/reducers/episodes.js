import { GET_EPISODES } from "../actions/episode";

const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case GET_EPISODES:
      return action.episodes;
    default:
      return state;
  }
};

export default reducer;
