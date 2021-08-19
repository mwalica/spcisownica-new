import styled from 'styled-components';

const TitleH5 = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.h5`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 300;
  color: ${({ theme }) => theme.orange};
  margin: 0.3em 0;
`;

export default TitleH5;
