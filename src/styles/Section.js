import styled from 'styled-components';

const Section = ({children}) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 80%;
  max-width: 1280px;
  min-height: 70vh;
  background-color: ${({theme}) => theme.white}
`;

export default Section;
