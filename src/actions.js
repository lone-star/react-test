
import {
  SEARCH,
  ADD_CAR
} from './constants';

export function search(query) {
  return {
    type: SEARCH,
    query: query
  };
}

export function addCar(make, model, color) {
  return {
    type: ADD_CAR,
    make: make,
    model: model,
    color: color
  };
}
