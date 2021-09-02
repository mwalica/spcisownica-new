import { GET_PRESCHOOLC_POSTS, SET_PRESCHOOLC_CURRENT_POST, CLEAR_PRESCHOOLC_CURRENT_POST } from '../types';

const preschoolcPostsReducer = (state, action) => {
  switch (action.type) {
    case GET_PRESCHOOLC_POSTS:
      console.log('getpost reducerpreschoolec run');
      return { ...state, posts: action.payload };
    case SET_PRESCHOOLC_CURRENT_POST:
      return { ...state, current: action.payload };
      case CLEAR_PRESCHOOLC_CURRENT_POST:
        return { ...state, current: null };
    default:
      return state;
  }
};

export default preschoolcPostsReducer;
