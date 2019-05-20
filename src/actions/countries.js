import axios from 'axios';
import { SHOW_LOADER, FETCH_COUNTRIES, HIDE_LOADER, GET_COUNTRY } from '../types';
const baseURL = 'https://restcountries.eu/rest/v2';

export let fetchCountries = (region) => {
  return async dispatch => {
    dispatch({ type: SHOW_LOADER });

    const endpoint = `${baseURL}/region/${region}`;
    const res = await axios.get(endpoint);

    dispatch({
      type: FETCH_COUNTRIES,
      payload: res.data
    });

    dispatch({ type: HIDE_LOADER });
  }
}

export let getCountry = (country) => {
  return async dispatch => {
    dispatch({ type: SHOW_LOADER });

    const endpoint = `${baseURL}/name/${country}`;
    const res = await axios.get(endpoint);

    dispatch({
      type: GET_COUNTRY,
      payload: res.data
    });

    dispatch({ type: HIDE_LOADER });
  }
}
