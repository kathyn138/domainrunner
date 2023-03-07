import { ADD_TO_CART, REMOVE_FROM_CART } from '../Actions/types';

const INITIALSTATE = { characters: [], weapons: [] };

export default function rootReducer(state = INITIALSTATE, action) {
  // TODO: check why undefined at first for action.payload
  // TODO: check if this is ok error handling bc what happens if
  // category and id are undefined? it'll throw an error on frontend
  let category;
  let id;

  if (action.payload) {
    category = action.payload.category;
    id = action.payload.id;
  }

  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [category]: [...state[category], id],
      };

    case REMOVE_FROM_CART:
      let updatedEntities = state[category].filter((e) => e !== id);

      return {
        ...state,
        [category]: updatedEntities,
      };

    default:
      return state;
  }
}
