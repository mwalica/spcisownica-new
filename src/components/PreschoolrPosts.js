import { useContext, useEffect } from 'react';

import styled from 'styled-components';

import PreschoolrPostCard from './PreschoolrPostCard';

import PreschoolrPostsContext from '../context/preschoolrposts/preschoolrPostsContext';

const PreschoolrPosts = ({ amount }) => {
  const preschoolrPostsContext = useContext(PreschoolrPostsContext);
  const { posts, getPosts } = preschoolrPostsContext;
  console.log(posts);
  const result = amount ? posts.slice(0, amount) : posts;
  console.log(result);
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <Wrapper>
      {result.map((post) => (
        <PreschoolrPostCard post={post} key={post.id} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export default PreschoolrPosts;
