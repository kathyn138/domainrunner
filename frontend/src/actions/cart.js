import { ADD_ENTITY, REMOVE_ENTITY } from './types';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

function handleError(error) {
  return {
    type: 'ERROR',
    error,
  };
}

export function addEntity(category, id) {
  return function (dispatch) {
    return dispatch({
      type: ADD_ENTITY,
      category,
      id,
    });
  };
}

export function removeEntity(category, id) {
  return function (dispatch) {
    return dispatch({
      type: REMOVE_ENTITY,
      category,
      id,
    });
  };
}
