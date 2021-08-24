import { useReducer } from 'react';
import axios from 'axios';

import NoticesContext from './noticesContext';
import noticesReducer from './noticesReducer';

import { GET_NOTICES } from '../types';

const NoticesState = (props) => {
  const initialState = {
    notices: [],
  };

  const [state, dispatch] = useReducer(noticesReducer, initialState);

  //get notices
  const getNotices = async () => {
    try {
      const res = await axios.get('http://localhost:1337/notices');
      dispatch({ type: GET_NOTICES, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <NoticesContext.Provider
      value={{
        notices: state.notices,
        getNotices,
      }}
    >
      {props.children}
    </NoticesContext.Provider>
  );
};

export default NoticesState;
