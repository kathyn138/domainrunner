import { ADD_ENTITY, GET_ENTITIES, REMOVE_ENTITY } from './types';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

function handleError(error) {
  return {
    type: "ERROR",
    error
  };
}

export function addEntity(id) {
  return function (dispatch) {
    return dispatch({
      type: ADD_ENTITY, 
      id
    });
  };
}

function getEntities(entities) {
  console.log('in getetities')
  return {
    type: GET_ENTITIES, 
    entities
  };
}
export function getEntitiesFromAPI(entities) {
  return async function thunk(dispatch) {
    try {
      let response = await axios.get(`${BASE_URL}/characters`);
      console.log('here')
      dispatch(getEntities(response.data));
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}

export function removeEntity(id) {
  return function (dispatch) {
    return dispatch({
      type: REMOVE_ENTITY, 
      id
    });
  };
}