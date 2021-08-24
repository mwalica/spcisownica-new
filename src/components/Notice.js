import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import TitleH6 from '../styles/TitleH6';

const Notice = ({ notice }) => {
  return (
    <Wrapper>
      <TitleH6>{notice.title}</TitleH6>
      <ReactMarkdown>{notice.Description}</ReactMarkdown>
      <Figure>
        {notice.Image.map((img) => (
          <img key={img.id} src={img.url} alt={img.name} />
        ))}
      </Figure>
      <hr />
    </Wrapper>
  );
};

const Wrapper = styled.div`
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

export default Notice;
