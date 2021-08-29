import { useContext } from 'react';
import { Link } from 'react-router-dom';

import ReactMarkdown from 'react-markdown';

import styled from 'styled-components';
import TitleH3 from '../../styles/TitleH3';

import PreschoolrPostsContext from '../../context/preschoolrposts/preschoolrPostsContext';

const Main = () => {
  const preschoolrPostsContext = useContext(PreschoolrPostsContext);
  const { current } = preschoolrPostsContext;

  if (!current) {
    return (
      <Wrapper>
        <Container>
          <Link className="back" to="/preschoolrblogs">Powrót</Link>
        </Container>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <TitleHeader>
        <TitleH3>{current.title}</TitleH3>
      </TitleHeader>
      <ReactMarkdown>{current.description}</ReactMarkdown>
      <Figure>
        {current.images.map((img) => (
          <img key={img.url} src={img.url} alt={img.alt} />
        ))}
      </Figure>
      <Container>
        <Link className="back" to="/preschoolrblogs">
          &lt; Powrót
        </Link>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  flex: 1 1 100%;
  padding: 1em;
  @media (min-width: 1024px) {
    flex: 1 1 60%;
  }

  p {
    line-height: 1.8;
  }
  ul {
    padding-left: 0.8em;
    list-style: circle;
    line-height: 1.8;
  }
  ol {
    padding-left: 0.8em;
    line-height: 1.8;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.blue};
  }
  a.back {
    text-decoration: none;
    padding: 0.3em 0.6em;
    border-radius: 0.25rem;
    box-shadow: ${({ theme }) => theme.mdShadow};
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 0.8em;
    letter-spacing: 0.04em;
    margin-right: 1.5em;
    /* text-transform: uppercase; */
    font-weight: 400;
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

const TitleHeader = styled.div`
  margin-bottom: 2em;
  padding-bottom: 0.5em;
  border-bottom: 1px solid #efefef;
`;

const Figure = styled.figure`
  margin-bottom: 2em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  img {
    overflow: hidden;
    display: block;
    width: 60%;
    padding: 0.4em;
    box-shadow: ${({ theme }) => theme.xlShadow};
    margin-bottom: 0.5em;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default Main;
