import { ADD_TO_CART, CHECK_CART, REMOVE_FROM_CART } from '../Actions/types';

export default function rootReducer(state = {}, action) {
  const category = action.category;
  
  switch (action.type) {
    case ADD_TO_CART:
      let addedEntities = [...state[category], action.id];

      return {
        ...state,
        category: addedEntities,
      };

    case CHECK_CART:
      let inCartStatus = false;

      if (state[category][action.id]) {
        inCartStatus = true;
      }

      return inCartStatus;

    case REMOVE_FROM_CART:
      let updatedEntities = state[category].filter((e) => e.id !== e.id);

      return {
        ...state,
        category: updatedEntities,
      };

    default:
      return state;
  }
}
