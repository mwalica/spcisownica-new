import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SidebarSecure = () => {
  return (
    <Wrapper>
      <Nav>
        <NavList>
          <NavItem>
            <Item to="/secureschool" activeClassName="active">
              Bezpieczna szkoła
            </Item>
          </NavItem>
          <NavItem>
            <Item to="/securedigital" activeClassName="active">
              Bezpieczeństwo cyfrowe
            </Item>
          </NavItem>
        
        </NavList>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1 1 100%;
  background-color: #f1f1f1;
  @media (min-width: 1024px) {
    flex: 1 1 20%;
  }
`;

const Nav = styled.nav``;

const NavList = styled.ul`
  list-style: none;
  padding: 1em;
`;

const NavItem = styled.li`
  border-bottom: 1px solid #cecece;
  padding: 0.8em 0;
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.darkGray};
  text-transform: uppercase;
  transition: 0.4s all ease-in;
  &:hover {
    color: ${({ theme }) => theme.darkBlue};
  }
  &.active {
    color: ${({ theme }) => theme.darkBlue};
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.darkGray};
  text-transform: uppercase;
  transition: 0.4s all ease-in;
  &:hover {
    color: ${({ theme }) => theme.darkBlue};
  }
  &.active {
    color: ${({ theme }) => theme.darkBlue};
  }
`;

export default SidebarSecure;
