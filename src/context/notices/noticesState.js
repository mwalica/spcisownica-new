import { useReducer } from 'react';

import NoticesContext from './noticesContext';
import noticesReducer from './noticesReducer';

import { GET_NOTICES, DATO_TOKEN } from '../types';



const NoticesState = (props) => {
  const initialState = {
    notices: [],
  };

  const [state, dispatch] = useReducer(noticesReducer, initialState);

  //get notices
  const getNotices = async () => {
    await fetch('https://graphql.datocms.com', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${DATO_TOKEN}`,
      },
      body: JSON.stringify({
        query: '{allNotices {id title description images {alt url}}}'
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: GET_NOTICES, payload: res.data.allNotices });
      })
      .catch((err) => console.log(err));
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
