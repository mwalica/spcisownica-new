import { useReducer } from 'react';
import axios from 'axios';

import PostsContext from './postsContext';
import postsReducer from './postsReducer';

import { GET_POSTS, SET_CURRENT_POST, CLEAR_CURRENT_POST } from '../types';

const PostsState = (props) => {
  const initialState = {
    posts: [],
    current: null,
  };

  const [state, dispatch] = useReducer(postsReducer, initialState);

  //get posts
  const getPosts = async () => {
    try {
      const res = await axios.get('http://localhost:1337/blogs');
      dispatch({ type: GET_POSTS, payload: res.data });
    } catch (err) {
      console.log(err);
    }
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
