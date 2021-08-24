import styled from 'styled-components';
import TitleH3 from '../../styles/TitleH3';

import { docsUrl } from '../../util/url';

const Main = () => {
  return (
    <Wrapper>
      <TitleHeader>
        <TitleH3>Ochrona danych osobowych</TitleH3>
        <Author>
          <span>Autor:</span> Administrator
        </Author>
      </TitleHeader>
      <List>
        <ListItem>
          Inspektor Ochrony Danych: <strong>Paulina Jochacy</strong>
        </ListItem>
        <ListItem>
          E-mail: <a href="mailto: iod@cuw.goleszow.pl">iod@cuw.goleszow.pl</a>
        </ListItem>
        <ListItem>
          Dokument do pobrania:{' '}
          <a
            href={`${docsUrl}przetwarzanie_danych_osobowych.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            Informacja o przetwarzaniu danych osobowych
          </a>
        </ListItem>
      </List>
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

const List = styled.ul`
  list-style: none;
  line-height: 1.8;
  margin-left: 1.5em;
  margin-bottom: 1.5em;
`;

const ListItem = styled.li`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.blue};
  }
`;

export default Main;
