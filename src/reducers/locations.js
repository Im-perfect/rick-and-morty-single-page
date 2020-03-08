import { GET_LOCATIONS } from "../actions/location";

const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case GET_LOCATIONS:
      return action.payload.results;
    default:
      return state;
  }
};

export default reducer;
