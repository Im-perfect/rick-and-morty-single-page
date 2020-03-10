import request from "superagent";
import { baseUrl } from "../constants";

export const GET_EPISODES = "GET_EPISODES";
export const GET_EPISODE_DETAILS = "GET_EPISODE_DETAILS";

export const getEpisodes = pageId => (dispatch, getState) => {
  request
    .get(`${baseUrl}/episode/?page=${pageId}`)
    .then(res => {
      dispatch({
        type: GET_EPISODES,
        payload: res.body
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const getEpisodeDetails = id => (dispatch, getState) => {
  if (getState().episodes) {
    return new Promise((resolve, reject) => {
      dispatch({
        type: GET_EPISODE_DETAILS,
        episode: getState().episodes.find(episode => episode.id === id)
      });
      resolve();
    });
  }

  return request
    .get(`${baseUrl}/episode/${id}`)
    .then(res => {
      dispatch({
        type: GET_EPISODE_DETAILS,
        episode: res.body
      });
    })
    .catch(error => {
      console.log(error);
    });
};
