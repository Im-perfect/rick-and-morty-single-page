import request from "superagent";
import { baseUrl } from "../constants";

export const GET_DIMENSIONS = "GET_DIMENSIONS";

export const fetchDimensions = () => {
  let dimensions = [];
  return getDimensionFromLocation(
    `${baseUrl}/location/?page=1`,
    dimensions
  ).then(() => dimensions);
};

const getDimensionFromLocation = (url, dimensions) => {
  return request
    .get(url)
    .then(res => {
      res.body.results.forEach(location => {
        if (!dimensions.includes(location.dimension)) {
          dimensions.push(location.dimension);
        }
      });
      if (res.body.info.next.length) {
        getDimensionFromLocation(res.body.info.next);
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export const getDimensions = dimensions => {
  return {
    type: GET_DIMENSIONS,
    dimensions
  };
};