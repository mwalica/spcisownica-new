import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Aside = () => {
  return (
    <Wrapper>
      <Nav>
        <NavList>
          <NavItem>
            <Item to="/securedata" activeClassName="active">
              Ochrona danych
            </Item>
          </NavItem>

          <NavItem>
            <Item to="/covid" activeClassName="active">
              COVID-19
            </Item>
          </NavItem>
        </NavList>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  flex: 1 1 20%;
  background-color: #f1f1f1;
  @media (min-width: 1024px) {
    display: block;
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


export default Aside;
