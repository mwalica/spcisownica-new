import { useContext, useEffect } from 'react';

import styled from 'styled-components';

import PreschoolcPostCard from './PreschoolcPostCard';

import PreschoolcPostsContext from '../context/preschoolcposts/preschoolcPostsContext';

const PreschoolcPosts = ({ amount }) => {
  const preschoolcPostsContext = useContext(PreschoolcPostsContext);
  const { posts, getPosts } = preschoolcPostsContext;
  console.log(posts);
  const result = amount ? posts.slice(0, amount) : posts;
  console.log(result);
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <Wrapper>
      {result.map((post) => (
        <PreschoolcPostCard post={post} key={post.id} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export default PreschoolcPosts;
