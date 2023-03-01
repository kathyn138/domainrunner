import {
    GET_ENTITIES
  } from '../Actions/types';

  export default function rootReducer(state = [], action) {
    switch (action.type) {
  
      case GET_ENTITIES:
        return [...action.entites];
  
      // case ADDPOST:
      //   return sortByVote([...state, makeTitleFromPost(action.post)]);
  
      // case EDITPOST:
      //   return state.map(
      //     title => title.id === action.payload.id ?
      //     makeTitleFromPost(action.payload.post) : title);
  
      // case REMOVEPOST:
      //   return state.filter(title => title.id !== action.id);
  
      // case VOTE:
      //   return sortByVote(state.map(
      //     title => title.id === action.payload.postId ?
      //       { ...title, votes: action.payload.votes } : title));
  
      default:
        return state;
    }
  }