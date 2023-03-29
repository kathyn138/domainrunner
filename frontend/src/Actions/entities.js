import { GET_ENTITIES } from './types';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

function handleError(error) {
  return {
    type: 'ERROR',
    error,
  };
}

function getEntities(characters, weapons) {
  return {
    type: GET_ENTITIES,
    characters,
    weapons,
  };
}
export function getEntitiesFromAPI() {
  return async function thunk(dispatch) {
    try {
      let charsResponse = await axios.get(`${BASE_URL}/characters`);
      let weaponsResponse = await axios.get(`${BASE_URL}/weapons`);
      return dispatch(getEntities(charsResponse.data, weaponsResponse.data));
    } catch (error) {
      return dispatch(handleError(error));
    }
  };
}
