import { GET_ENTITIES } from '../Actions/types';

export default function rootReducer(state = {}, action) {
  switch (action.type) {
    case GET_ENTITIES:
      return {
        ...state,
        characters: action.characters,
        weapons: action.weapons,
      };

    default:
      return state;
  }
}
