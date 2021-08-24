import styled from 'styled-components';
import TitleH3 from '../../styles/TitleH3';
import TitleH5 from '../../styles/TitleH5';
import Paragraph from '../../styles/Paragraph';

const Main = () => {
  return (
    <Wrapper>
      <TitleHeader>
        <TitleH3>Składka na Radę Rodziców</TitleH3>
        <Author>
          <span>Autor:</span> Przemysław Misiarz
        </Author>
      </TitleHeader>

      <TitleH5>
        Członkowie zarządu Rady Rodziców działającej przy SP Cisownica
      </TitleH5>
      <Paragraph>
        Wysokość składki na Radę Rodziców w roku szkolnym 2020/2021 wynosi:
      </Paragraph>
      <List>
        <ListItem>
          <strong>50 złotych</strong> za 1 dziecko
        </ListItem>
        <ListItem><strong>30 złotych</strong> za 2 dziecko</ListItem>
        <ListItem>3 dziecko i kolejne zwolnione jest ze składki</ListItem>
      </List>

      <Paragraph>
        Wpłaty na Radę Rodziców można dokonać u wychowawcy lub przelewem na
        konto Rady Rodziców z dopiskiem wpłata na Radę Rodziców za dziecko
        ..................... (imię i nazwisko należy wpisać).
      </Paragraph>
      <Paragraph>
        Bank Spółdzielczy w Cieszynie/oddział Goleszów <br />
        <strong>Nr konta 63 8113 1020 2002 0049 4317 0001</strong>
      </Paragraph>
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
  margin-bottom: 1em;
`;

const ListItem = styled.li`
  padding: 0.2em 0.8em;
`;

export default Main;
