import { ADD_TO_CART, REMOVE_FROM_CART } from '../Actions/types';

export default function rootReducer(state = [], action) {
  let id;

  if (action.payload) {
    id = action.payload.id;
  }

  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];

    case REMOVE_FROM_CART:
      let updatedState = state.filter((e) => e.id !== id);

      return updatedState;

    default:
      return state;
  }
}
