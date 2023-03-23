import { GET_ENTITIES } from '../Actions/types';

export default function rootReducer(state = {}, action) {
  switch (action.type) {
    case GET_ENTITIES:
      return {
        ...state,
        characters: action.characters,
        weapons: action.weapons,
      };

    // case ADDPOST:
    //   return sortByVote([...state, makeTitleFromPost(action.post)]);

    // case REMOVEPOST:
    //   return state.filter(title => title.id !== action.id);

    default:
      return state;
  }
}
