import { ADD_TO_CART, CHECK_CART, REMOVE_FROM_CART } from './types';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

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
      category,
      id,
    });
  };
}

export function checkCart(category, id) {
  return function (dispatch) {
    return dispatch({
      type: CHECK_CART,
      category,
      id,
    });
  };
}

export function removeFromCart(category, id) {
  return function (dispatch) {
    return dispatch({
      type: REMOVE_FROM_CART,
      category,
      id,
    });
  };
}
