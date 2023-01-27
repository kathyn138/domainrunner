import { ADD_ENTITY, REMOVE_ENTITY } from './types';

export function addEntity(id) {
  return function (dispatch) {
    return dispatch({
      type: ADD_ENTITY, 
      id
    });
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