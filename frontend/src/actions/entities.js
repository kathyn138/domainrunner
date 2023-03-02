import { ADD_ENTITY, GET_ENTITIES, REMOVE_ENTITY } from './types';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

function handleError(error) {
  return {
    type: 'ERROR',
    error,
  };
}

export function addEntity(id) {
  return function (dispatch) {
    return dispatch({
      type: ADD_ENTITY,
      id,
    });
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
      dispatch(getEntities(charsResponse.data, weaponsResponse.data));
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}

export function removeEntity(id) {
  return function (dispatch) {
    return dispatch({
      type: REMOVE_ENTITY,
      id,
    });
  };
}
