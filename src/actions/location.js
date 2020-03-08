import request from "superagent";
import { baseUrl } from "../constants";

export const GET_LOCATIONS = "GET_LOCATIONS";
export const GET_LOCATION_DETAILS = "GET_LOCATION_DETAILS";

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

export const getLocationDetails = id => (dispatch, getState) => {
  if (getState().locations) {
    return new Promise((resolve, reject) => {
      dispatch({
        type: GET_LOCATION_DETAILS,
        location: getState().locations.find(location => location.id === id)
      });
      resolve();
    });
  }

  return request
    .get(`${baseUrl}/location/${id}`)
    .then(res => {
      dispatch({
        type: GET_LOCATION_DETAILS,
        location: res.body
      });
    })
    .catch(error => {
      console.log(error);
    });
};
