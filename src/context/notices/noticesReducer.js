import { GET_NOTICES } from '../types';

const noticesReducer = (state, action) => {
  switch (action.type) {
    case GET_NOTICES:
      return { ...state, notices: action.payload };
    default:
      return state;
  }
};

export default noticesReducer;
