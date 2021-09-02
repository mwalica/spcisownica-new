import { useReducer } from 'react';

import PreschoolcPostsContext from './preschoolcPostsContext';
import preschoolcPostsReducer from './preschoolcPostsReducer';

import {
  GET_PRESCHOOLC_POSTS,
  SET_PRESCHOOLC_CURRENT_POST,
  CLEAR_PRESCHOOLC_CURRENT_POST,
  DATO_TOKEN,
} from '../types';

const PreschoolcPostsState = (props) => {
  const initialState = {
    posts: [],
    current: null,
  };

  const [state, dispatch] = useReducer(preschoolcPostsReducer, initialState);

  //get posts

  const getPosts = async () => {
    await fetch('https://graphql.datocms.com', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${DATO_TOKEN}`,
      },
      body: JSON.stringify({
        query:
          '{allCispreschools {id title date description author slug images {alt url} startImage {url alt} video {thumbnailUrl title}}}',
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.allCispreschools);
        dispatch({ type: GET_PRESCHOOLC_POSTS, payload: res.data.allCispreschools });
      })
      .catch((err) => console.log(err));
  };

  //set current post
  const setCurrentPost = (post) => {
    dispatch({ type: SET_PRESCHOOLC_CURRENT_POST, payload: post });
  };

  //clear current post
  const clearCurrentPost = () => {
    dispatch({ type: CLEAR_PRESCHOOLC_CURRENT_POST });
  };

  return (
    <PreschoolcPostsContext.Provider
      value={{
        posts: state.posts,
        current: state.current,
        getPosts,
        setCurrentPost,
        clearCurrentPost,
      }}
    >
      {props.children}
    </PreschoolcPostsContext.Provider>
  );
};

export default PreschoolcPostsState;
