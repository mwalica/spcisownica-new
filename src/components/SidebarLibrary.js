import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SidebarLibrary = () => {
  return (
    <Wrapper>
      <Nav>
        <NavList>
          <NavItem>
            <Item to="/library" activeClassName="active">
              Regulamin
            </Item>
          </NavItem>
          <NavItem>
            <Link href="https://m020129.molnet.mol.pl/" target="_blank" rel="noopener noreferrer">
              Biblioteka online
            </Link>
          </NavItem>
          <NavItem>
            <Link href="http://spcisownica.edu.pl/dokumenty/biblioteka_on_line.pdf" target="_blank" rel="noopener noreferrer">
              Biblioteka instrukcje
            </Link>
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

export default SidebarLibrary;
