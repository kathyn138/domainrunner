import { ADD_TO_CART, REMOVE_FROM_CART } from './types';

function handleError(error) {
  return {
    type: 'ERROR',
    error,
  };
}

export function addToCart(category, id) {
  return function (dispatch) {
    return dispatch({
      type: ADD_TO_CART,
      payload: { category, id },
    });
  };
}

export function removeFromCart(category, id) {
  return function (dispatch) {
    return dispatch({
      type: REMOVE_FROM_CART,
      payload: { category, id },
    });
  };
}
