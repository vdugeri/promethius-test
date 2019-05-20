import axios from 'axios';
import { FETCH_COUNTRIES } from '../types';
const baseURL = 'https://restcountries.eu/rest/v2';

export let fetchCountries = (region) => {
  return async dispatch => {

    const endpoint = `${baseURL}/region/${region}`;
    const res = await axios.get(endpoint);

    dispatch({
      type: FETCH_COUNTRIES,
      payload: res.data
    });
  }
}
