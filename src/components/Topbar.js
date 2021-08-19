import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
<i class="far fa-envelope"></i>;

const Topbar = () => {
  return (
    <Wrapper>
      <Container>
        <List>
          <li>
            <a href="tel:338528233">
              <FontAwesomeIcon icon={faPhone} /> 33 8528233&nbsp;&nbsp;|
            </a>
          </li>
          <li>
            &nbsp;&nbsp;
            <a href="mailto: spcisownica@oswiata.goleszow.info.pl">
              <FontAwesomeIcon icon={faEnvelope} /> spcisownica@oswiata.goleszow.info.pl&nbsp;&nbsp;|
            </a>
          </li>
          <li><a href="http://spcisownica.biposwiata.pl/" target="_blank" rel="noreferrer">&nbsp;&nbsp;BIP</a></li>
        </List>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.amber};
  height: 4vh;
  max-height: 40px;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: 1280px;
  display: flex;
  align-items: center;
  height: 100%;
  color: rgba(255, 255, 255, 0.8);
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  font-weight: 300;
  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
  }
`;

export default Topbar;
