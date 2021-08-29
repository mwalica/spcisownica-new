import { GET_PRESCHOOLR_POSTS, SET_PRESCHOOLR_CURRENT_POST, CLEAR_PRESCHOOLR_CURRENT_POST } from '../types';

const preschoolrPostsReducer = (state, action) => {
  switch (action.type) {
    case GET_PRESCHOOLR_POSTS:
      console.log('getpost reducerpreschooler run');
      return { ...state, posts: action.payload };
    case SET_PRESCHOOLR_CURRENT_POST:
      return { ...state, current: action.payload };
      case CLEAR_PRESCHOOLR_CURRENT_POST:
        return { ...state, current: null };
    default:
      return state;
  }
};

export default preschoolrPostsReducer;
