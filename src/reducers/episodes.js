import { GET_EPISODES } from "../actions/episode";

const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case GET_EPISODES:
      return action.payload.results;
    default:
      return state;
  }
};

export default reducer;
