import { GET_EPISODE_DETAILS } from "../actions/episode";

const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case GET_EPISODE_DETAILS:
      return action.episode;
    default:
      return state;
  }
};

export default reducer;
