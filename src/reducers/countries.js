import { FETCH_COUNTRIES, GET_COUNTRY } from '../types';

export let countries = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_COUNTRIES:
      return [...payload];
    default:
      return state;
  }
}

export let country = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_COUNTRY:
      return payload
    default:
      return state;
  }
}
