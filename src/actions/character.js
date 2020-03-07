import request from "superagent";
import { baseUrl } from "../constants";

export const GET_CHARACTERS = "GET_CHARACTERS";

export const getCharacters = () => (dispatch, getState) => {
  if (getState().characters) return;
  request
    .get(`${baseUrl}/character`)
    .then(res => {
      dispatch({
        type: GET_CHARACTERS,
        characters: res.body.results
      });
    })
    .catch(error => {
      console.log(error);
    });
};
