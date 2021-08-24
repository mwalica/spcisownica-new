import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

const SidebarParent = () => {
  return (
    <Wrapper>
      <Nav>
        <NavList>
          <NavItem>
            <Item to="/parentcouncil" activeClassName="active">
              Rada Rodziców
            </Item>
          </NavItem>
          <NavItem>
            <Item to="/parentsubscription" activeClassName="active">
              Składka
            </Item>
          </NavItem>
          <NavItem>
            <Item to="/recruit" activeClassName="active">
              Nabór
            </Item>
          </NavItem>
          <NavItem>
            <Item to="/adviceforparent" activeClassName="active">
              Rady dla rodziców
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
@media(min-width: 1024px) {
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
  color: ${({theme}) => theme.darkGray};
  text-transform: uppercase;
  transition: 0.4s all ease-in;
  &:hover {
    color: ${({theme}) => theme.darkBlue};
  }
  &.active {
    color: ${({theme}) => theme.darkBlue};
  }
`;

export default SidebarParent;
