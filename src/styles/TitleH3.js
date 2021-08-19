import styled from 'styled-components';

const TitleH3 = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.h3`
  letter-spacing: 0.07ch;
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.blue};
  padding-bottom: 0.2em;
`;

export default TitleH3;
