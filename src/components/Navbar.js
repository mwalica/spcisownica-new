import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <NavMenu>
          <NavItem>
            <Item to="/info" activeClassName="active">Informacje</Item>
          </NavItem>
          <NavItem>
            <Item to="/security" activeClassName="active">Bezpieczeństwo</Item>
          </NavItem>
          <NavItem>
            <Item to="/parent" activeClassName="active">Rodzice</Item>
          </NavItem>
          <NavItem>
            <Item to="/document" activeClassName="active">Dokumenty</Item>
          </NavItem>
          <NavItem>
            <Item to="/datasecurity" activeClassName="active">Ochrona danych</Item>
          </NavItem>
        </NavMenu>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 5vh;
  max-height: 50px;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: 1280px;
  height: 100%;
`;

const NavMenu = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavItem = styled.li`
 
`;

const Item = styled(NavLink)`
  /* text-transform: uppercase; */
  display: inline-block;
  text-decoration: none;
  color: ${({ theme }) => theme.darkGray};
  letter-spacing: 0.05rem;
  transition: 0.4s all ease-in;
  padding: 0.4em 0.8em;
  border-radius: 6px;

  &:hover {
    background-color: rgb(0, 0, 0, 0.03);
  }
  &.active {
    color: ${({theme}) => theme.darkBlue};
  }
`;

export default Navbar;