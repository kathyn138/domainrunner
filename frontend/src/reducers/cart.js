import { ADD_ENTITY, REMOVE_ENTITY } from '../Actions/types';

export default function rootReducer(state = {}, action) {
  switch (action.type) {
    case ADD_ENTITY:
      if (category === 'characters') {
        let addedChars = [...state.characters, action.id];

        return {
          ...state,
          characters: addedChars,
        };
      } else {
        let addedWeapons = [...state, weapons, action.id];

        return {
          ...state,
          weapons: addedWeapons,
        };
      }

    case REMOVE_ENTITY:
      if (category === 'characters') {
        let updatedChars = state.characters.filter((c) => c.id !== c.id);

        return {
          ...state,
          characters: updatedChars,
        };
      } else {
        let updatedWeapons = state.weapons.filter((w) => w.id !== action.id);

        return { ...state, weapons: updatedWeapons };
      }

    default:
      return state;
  }
}
