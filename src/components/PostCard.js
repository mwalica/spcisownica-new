import { useContext } from 'react';

import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';


import PostsContext from '../context/posts/postsContext';

const PostCard = ({ post }) => {
  const postsContext = useContext(PostsContext);
  const { setCurrentPost } = postsContext;

  const detailHandler = () => {
    setCurrentPost(post);
  };

  return (
    <Wrapper>
      <Card>
        <ImgConatiner>
          <img src={post.startImage.url} alt="wydarzenia" />
        </ImgConatiner>
        <ContentContainer>
          <div className="title-container">
            <h4>{post.Title}</h4>
            <small>
              {post.Date}, <span>{post.Author}</span>
            </small>
          </div>

          <ReactMarkdown>{post.Description.slice(0, 200)}</ReactMarkdown>
          <Container>
          <Link className="read-more" to={`blogs/${post.slug}`} onClick={detailHandler}>
            więcej &gt;
          </Link>
          </Container>
         
        </ContentContainer>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1em;
  flex: 1 1 50%;
`;

const Card = styled.div`
  width: 100%;
  box-shadow: ${({ theme }) => theme.lgShadow};
`;

const ImgConatiner = styled.div`
  img {
    overflow: hidden;
    width: 100%;
    display: block;
  }
`;

const ContentContainer = styled.div`
  padding: 0.8em 0.6em;
  .title-container {
    margin-bottom: 1em;
    h4 {
      margin: 1em 0 0.5em;
      font-size: 1.2em;
      font-weight: 400;
      color: ${({ theme }) => theme.red};
    }
    small {
      font-weight: 300;
      span {
        color: ${({ theme }) => theme.author};
      }
    }
  }

  p {
    line-height: 1.6;
    margin-bottom: 1em;
    font-size: 0.9em;
  }
  a.read-more {
    text-decoration: none;
    padding: 0.3em 0.6em;
    border-radius: 0.25rem;
    box-shadow: ${({ theme }) => theme.mdShadow};
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 0.8em;
    letter-spacing: 0.04em;
    font-weight: 400;
    margin-right: 1.5em;
    /* text-transform: uppercase; */
    transition: 0.4s all ease-in;
    background-color: ${({ theme }) => theme.blue};
    border: 1px solid ${({ theme }) => theme.blue};
    /* color: ${({ theme }) => theme.white}; */
    color: rgba(255, 255, 255, 0.8);

    &:hover {
      box-shadow: ${({ theme }) => theme.xlShadow};
    }
  }
`;

const Container = styled.div`
display: flex;
justify-content: flex-start;
`;

export default PostCard;
