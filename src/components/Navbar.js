import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <NavMenu>
          <NavItem>
            <Item to="/" activeClassName="active">
              Home
            </Item>
          </NavItem>
          <NavItem>
            <Item to="/info" activeClassName="active">
              Informacje
            </Item>
          </NavItem>
          <NavItem>
            <Item to="/secureschool" activeClassName="active">
              Bezpieczeństwo
            </Item>
          </NavItem>
          <NavItem>
            <Item to="/parentcouncil" activeClassName="active">
              Rodzice
            </Item>
          </NavItem>
          <NavItem>
            <Item to="/notices" activeClassName="active">
              Ogłoszenia
            </Item>
          </NavItem>
          <NavItem>
            <Item to="/recruit" activeClassName="active">
              Nabór
            </Item>
          </NavItem>
          <NavItem>
            <Item to="/blogs" activeClassName="active">
              Wydarzenia
            </Item>
          </NavItem>
          <NavItem>
            <Item to="/documents" activeClassName="active">
              Dokumenty
            </Item>
          </NavItem>
          <NavItem>
            <Item to="/preschools" activeClassName="active">
              Przedszkola
            </Item>
          </NavItem>
        </NavMenu>
        <AdminButton>
          <a
            href="https://spcisownica.admin.datocms.com"
            target="_blank"
            rel="noreferrer"
          >
            Logowanie
          </a>
        </AdminButton>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 5vh;
  max-height: 50px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
  max-width: 1280px;
  height: 100%;
`;

const NavMenu = styled.ul`
  list-style: none;
  align-items: center;
  height: 100%;
  display: flex;
`;

const NavItem = styled.li``;

const Item = styled(NavLink)`
  /* text-transform: uppercase; */
  display: inline-block;
  text-decoration: none;
  color: ${({ theme }) => theme.darkGray};
  transition: 0.4s all ease-in;
  padding: 0.4em 0.3em;
  border-radius: 6px;

  @media (min-width: 1025px) {
    letter-spacing: 0.05rem;
    padding: 0.4em 0.8em;
  }

  &:hover {
    background-color: rgb(0, 0, 0, 0.03);
  }
  &.active {
    color: ${({ theme }) => theme.darkBlue};
  }
`;

const AdminButton = styled.div`
  display: none;
  align-items: center;
  a {
    background-color: ${({ theme }) => theme.blue};
    text-decoration: none;
    color: rgba(255, 255, 255, 0.95);
    padding: 0.4em 0.8em;
    border-radius: 0.25rem;
    transition: 0.4s all ease-in;
    box-shadow: ${({ theme }) => theme.lgShadow};
    &:hover {
      box-shadow: ${({ theme }) => theme.xlShadow};
    }
  }
  @media (min-width: 1280px) {
    display: flex;
  }
`;

export default Navbar;
