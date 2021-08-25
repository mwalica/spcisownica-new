import { Link } from 'react-router-dom';

import styled from 'styled-components';
import TitleH3 from '../../styles/TitleH3';

const Main = () => {
  return (
    <Wrapper>
      <TitleHeader>
        <TitleH3>Przedszkola</TitleH3>
      </TitleHeader>
      <ButtonGroup>
        {/* <Button>Przedszkole - Cisownica</Button> */}
        <Button to="/preschoolr">Przedszkole - Równia</Button>
      </ButtonGroup>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  flex: 1 1 100%;
  padding: 1em;
  @media (min-width: 1024px) {
    flex: 1 1 60%;
  }
`;

const TitleHeader = styled.div`
  margin-bottom: 2em;
  padding-bottom: 0.5em;
  border-bottom: 1px solid #efefef;
`;

const Author = styled.small`
  span {
    color: ${({ theme }) => theme.author};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled(Link)`
  text-decoration: none;
  padding: 0.6em 1.2em;
  border-radius: 0.25rem;
  box-shadow: ${({ theme }) => theme.mdShadow};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 1em;
  letter-spacing: 0.08em;
  margin-right: 1.5em;
  text-transform: uppercase;
  transition: 0.4s all ease-in;
  background-color: ${({ theme }) => theme.lightBlue};
  border: 1px solid ${({ theme }) => theme.lightBlue};
  color: ${({ theme }) => theme.white};

  &:hover {
    box-shadow: ${({ theme }) => theme.xlShadow};
  }
`;

export default Main;
