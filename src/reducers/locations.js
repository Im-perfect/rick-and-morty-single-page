import { GET_LOCATIONS } from "../actions/location";

const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case GET_LOCATIONS:
      return action.locations;
    default:
      return state;
  }
};

export default reducer;
