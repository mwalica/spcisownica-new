import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import routes from '../util/routes';

const Bottombar = () => {
  const { pathname } = useLocation();

  const [route] = routes.filter((route) => {
    return route.path === pathname;
  });


  return (
    <Wrapper>
      <Sidebar />
      <Mid><p><FontAwesomeIcon icon={faChevronRight} /> {route ? route.name : ""}</p></Mid>
      <Sidebar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 5vh;
  max-height: 50px;
  margin: 0 auto;
  width: 80%;
  max-width: 1280px;
`;

const Sidebar = styled.div`
  display: none;
  background-color: ${({ theme }) => theme.red};
  flex: 1 1 20%;
  @media (min-width: 1024px) {
    display: block;
  }
`;

const Mid = styled.div`
  background-color: ${({ theme }) => theme.amber};
  flex: 1 1 60%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1em;
  color: rgba(255, 255, 255, 0.75);
`;

export default Bottombar;
