import request from "superagent";
import { baseUrl } from "../constants";

export const GET_EPISODES = "GET_EPISODES";
export const GET_EPISODE_DETAILS = "GET_EPISODE_DETAILS";

export const getEpisodes = () => (dispatch, getState) => {
    if (getState().episodes) return;
    request
      .get(`${baseUrl}/episode`)
      .then(res => {
        dispatch({
          type: GET_EPISODES,
          episodes: res.body.results
        });
      })
      .catch(error => {
        console.log(error);
      });
  };