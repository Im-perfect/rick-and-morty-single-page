import request from "superagent";
import { baseUrl } from "../constants";

export const GET_LOCATIONS = "GET_LOCATIONS";

export const getLocations = () => (dispatch, getState) => {
  if (getState().locations) return;
  request
    .get(`${baseUrl}/location`)
    .then(res => {
      dispatch({
        type: GET_LOCATIONS,
        locations: res.body.results
      });
    })
    .catch(error => {
      console.log(error);
    });
};
