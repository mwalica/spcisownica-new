import { useContext, useEffect } from 'react';

import styled from 'styled-components';

import PostCard from './PostCard';

import PostsContext from '../context/posts/postsContext';

const Posts = ({ amount }) => {
  const postsContext = useContext(PostsContext);
  const { posts, getPosts } = postsContext;
  const result = amount ? posts.slice(0, amount) : posts;

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <Wrapper>
      {result.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export default Posts;
