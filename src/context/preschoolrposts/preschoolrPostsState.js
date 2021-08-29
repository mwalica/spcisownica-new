import { useReducer } from 'react';

import PreschoolrPostsContext from './preschoolrPostsContext';
import preschoolrPostsReducer from './preschoolrPostsReducer';

import {
  GET_PRESCHOOLR_POSTS,
  SET_PRESCHOOLR_CURRENT_POST,
  CLEAR_PRESCHOOLR_CURRENT_POST,
  DATO_TOKEN,
} from '../types';

const PreschoolrPostsState = (props) => {
  const initialState = {
    posts: [],
    current: null,
  };

  const [state, dispatch] = useReducer(preschoolrPostsReducer, initialState);

  //get posts

  const getPosts = async () => {
    await fetch('https://graphql.datocms.com', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${DATO_TOKEN}`,
      },
      body: JSON.stringify({
        query:
          '{allPreschools {id title date description author slug images {alt url} startImage {url alt} video {thumbnailUrl title}}}',
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.allPreschools);
        dispatch({ type: GET_PRESCHOOLR_POSTS, payload: res.data.allPreschools });
      })
      .catch((err) => console.log(err));
  };

  //set current post
  const setCurrentPost = (post) => {
    dispatch({ type: SET_PRESCHOOLR_CURRENT_POST, payload: post });
  };

  //clear current post
  const clearCurrentPost = () => {
    dispatch({ type: CLEAR_PRESCHOOLR_CURRENT_POST });
  };

  return (
    <PreschoolrPostsContext.Provider
      value={{
        posts: state.posts,
        current: state.current,
        getPosts,
        setCurrentPost,
        clearCurrentPost,
      }}
    >
      {props.children}
    </PreschoolrPostsContext.Provider>
  );
};

export default PreschoolrPostsState;
