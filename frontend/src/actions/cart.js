import { ADD_TO_CART, REMOVE_FROM_CART } from './types';

export function handleError(error) {
  return {
    type: 'ERROR',
    error,
  };
}

export function addToCart(entity) {
  return function (dispatch) {
    return dispatch({
      type: ADD_TO_CART,
      payload: entity,
    });
  };
}

export function removeFromCart(id) {
  return function (dispatch) {
    return dispatch({
      type: REMOVE_FROM_CART,
      payload: { id },
    });
  };
}
