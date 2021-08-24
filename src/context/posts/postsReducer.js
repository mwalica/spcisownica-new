import { GET_POSTS, SET_CURRENT_POST, CLEAR_CURRENT_POST } from '../types';

const postsReducer = (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      console.log('getpost reducer run');
      return { ...state, posts: action.payload };
    case SET_CURRENT_POST:
      return { ...state, current: action.payload };
      case CLEAR_CURRENT_POST:
        return { ...state, current: null };
    default:
      return state;
  }
};

export default postsReducer;
