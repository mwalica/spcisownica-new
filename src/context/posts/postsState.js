import { useReducer } from 'react';

import PostsContext from './postsContext';
import postsReducer from './postsReducer';

import {
  GET_POSTS,
  SET_CURRENT_POST,
  CLEAR_CURRENT_POST,
  DATO_TOKEN,
} from '../types';

const PostsState = (props) => {
  const initialState = {
    posts: [],
    current: null,
  };

  const [state, dispatch] = useReducer(postsReducer, initialState);

  //get posts

  const getPosts = async () => {
    await fetch('https://graphql.datocms.com', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${DATO_TOKEN}`,
      },
      body: JSON.stringify({
        query:
          '{allBlogs {id title date description author slug images {alt url} startImage {url alt} video {thumbnailUrl title}}}',
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.allBlogs);
        dispatch({ type: GET_POSTS, payload: res.data.allBlogs });
      })
      .catch((err) => console.log(err));
  };

  //set current post
  const setCurrentPost = (post) => {
    dispatch({ type: SET_CURRENT_POST, payload: post });
  };

  //clear current post
  const clearCurrentPost = () => {
    dispatch({ type: CLEAR_CURRENT_POST });
  };

  return (
    <PostsContext.Provider
      value={{
        posts: state.posts,
        current: state.current,
        getPosts,
        setCurrentPost,
        clearCurrentPost,
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsState;
