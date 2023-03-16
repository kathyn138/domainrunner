import { ADD_TO_CART, REMOVE_FROM_CART, POPULATE_CART } from '../Actions/types';

export default function rootReducer(state = [], action) {
  let id;

  if (action.payload) {
    id = action.payload.id;
  }

  switch (action.type) {
    case ADD_TO_CART:
      let addedState = [...state, action.payload];
      localStorage.setItem('cart', JSON.stringify(addedState));

      return addedState;

    case REMOVE_FROM_CART:
      let filteredState = state.filter((e) => e.id !== id);

      return filteredState;

    case POPULATE_CART:
      return [...action.payload];

    default:
      return state;
  }
}
