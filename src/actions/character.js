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

export const getLocationCharacters = characterList => {
  return request
    .get(`${baseUrl}/character/${characterList}`)
    .then(res => {
      return res.body.constructor === Object ? [res.body] : res.body;
    })
    .catch(error => {
      console.log(error);
    });
};

export const getEpisodeCharacters = characterList => {
  return request
    .get(`${baseUrl}/character/${characterList}`)
    .then(res => {
      return res.body.constructor === Object ? [res.body] : res.body;
    })
    .catch(error => {
      console.log(error);
    });
};
