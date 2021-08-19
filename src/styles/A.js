import styled from 'styled-components';

const A = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.blue};
`;

export default A;
