import styled from 'styled-components';

const OlList = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.ol`
  line-height: 1.8;
  margin-left: 1.5em;
  margin-bottom: 1.5em;
`;

export default OlList;
