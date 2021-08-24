import styled from 'styled-components';

const TitleH6 = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.h6`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 400;
  color: ${({ theme }) => theme.red};
  margin: 0.3em 0;
`;

export default TitleH6;
