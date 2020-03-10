import { GET_LOCATION_DETAILS } from "../actions/location";

const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case GET_LOCATION_DETAILS:
      return action.location;
    default:
      return state;
  }
};

export default reducer;
