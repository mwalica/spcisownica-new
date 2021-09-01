import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { docsUrl } from '../util/url';

const SidebarInfo = () => {
  return (
    <Wrapper>
      <Nav>
        <NavList>
          <NavItem>
            <Item to="/info" activeClassName="active">
              O szkole
            </Item>
          </NavItem>
          <NavItem>
            <Item
              as="a"
              href={`${docsUrl}plan_lekcji_2021_2022.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Plan Lekcji
            </Item>
          </NavItem>
          <NavItem>
            <Item to="/history" activeClassName="active">
              Historia
            </Item>
          </NavItem>
          <NavItem>
            <Item to="/patron" activeClassName="active">
              Patron
            </Item>
          </NavItem>
          <NavItem>
            <Item to="/teachers" activeClassName="active">
              Nauczyciele
            </Item>
          </NavItem>
          <NavItem>
            <Item to="/library" activeClassName="active">
              Biblioteka
            </Item>
          </NavItem>
          <NavItem>
            <Item to="/scholarship" activeClassName="active">
              Stypendia
            </Item>
          </NavItem>
          <NavItem>
            <Item to="/ueproject" activeClassName="active">
              Projekt UE
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

export default SidebarInfo;
