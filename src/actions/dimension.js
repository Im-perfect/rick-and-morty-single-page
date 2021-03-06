import request from "superagent";
import { baseUrl } from "../constants";

export const GET_DIMENSIONS = "GET_DIMENSIONS";

export const fetchDimensions = () => {
  return new Promise((resolve, reject) =>
    getDimensionFromLocation(`${baseUrl}/location/?page=1`, [], resolve)
  );
};

const getDimensionFromLocation = (url, dimensions, resolve) => {
  request
    .get(url)
    .then(res => {
      res.body.results.forEach(location => {
        if (!dimensions.includes(location.dimension)) {
          dimensions.push(location.dimension);
        }
      });
      if (res.body.info.next.length) {
        getDimensionFromLocation(res.body.info.next, dimensions, resolve);
      } else {
        resolve(dimensions);
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export const dispatchDimensions = dimensions => {
  return {
    type: GET_DIMENSIONS,
    dimensions
  };
};

export const getDimensionCharacters = name => {
  return request
    .get(`${baseUrl}/location/?dimension=${encodeURI(name)}`)
    .then(res => {
      const characterList = res.body.results
        .map(location =>
          location.residents.map(resident => resident.slice(42)).join(",")
        )
        .join(",");

      return request
        .get(`${baseUrl}/character/${characterList}`)
        .then(res => res.body)
        .catch(error => {
          console.log(error);
        });
    })
    .catch(error => {
      console.log(error);
    });
};
