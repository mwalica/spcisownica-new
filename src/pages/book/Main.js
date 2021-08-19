import styled from 'styled-components';
import TitleH3 from '../../styles/TitleH3';
import TitleH5 from '../../styles/TitleH5';
import Paragraph from '../../styles/Paragraph';

const Main = () => {
  return (
    <Wrapper>
      <TitleHeader>
        <TitleH3>Biblioteka - regulamin</TitleH3>
        <Author>
          <span>Autor:</span> Elżbieta Stanieczek
        </Author>
      </TitleHeader>
      <TitleH5>
        Regulamin wypożyczania i udostępniania bezpłatnych podręczników oraz
        materiałów edukacyjnych
      </TitleH5>
      <List>
        <ListItem>
          Podręczniki i materiały edukacyjne gromadzone są w bibliotece szkolnej
          i stanowią własność szkoły.
        </ListItem>
        <ListItem>
          Każdy podręcznik posiada numer inwentarzowy i jest przypisany do
          konkretnego ucznia.
        </ListItem>
        <ListItem>
          Podręczniki są wypożyczane na okres wskazany przez wychowawcę, jednak
          nie dłużej niż okres jednego roku szkolnego.
        </ListItem>
        <ListItem>
          Podręczniki należy zwrócić do biblioteki szkolnej w wyznaczonym
          wcześniej terminie.
        </ListItem>
        <ListItem>
          Udostępnione książki należy chronić przed zniszczeniem i zgubieniem.
          Wypożyczający powinien zwrócić uwagę na ich stan a zauważone
          uszkodzenia niezwłocznie zgłosić nauczycielowi bibliotekarzowi.
        </ListItem>
        <ListItem>
          Wypożyczający ponosi pełną odpowiedzialność materialną w przypadku
          zgubienia lub zniszczenia podręcznika.*{' '}
        </ListItem>
        <ListItem>
          Wypożyczający jest zobowiązany do przechowywania podręcznika w
          okładce.{' '}
        </ListItem>
        <ListItem>
          Podręczniki należy szanować jako dobro wspólne. W podręczniku nie
          wolno niczego pisać i zaznaczać. Podręczniki należy w wyznaczonym do
          tego miejscu podpisać – imieniem i nazwiskiem.
        </ListItem>
        <ListItem>
          W przypadku zmiany szkoły przez ucznia podręczniki należy zwrócić do
          biblioteki szkolnej.{' '}
        </ListItem>
        <ListItem>
          Na bieżąco należy dokonywać drobnych napraw czy ewentualnie wymiany
          okładki.
        </ListItem>
        <ListItem>
          {' '}
          Wypożyczający podpisuje oświadczenie, które jest zobowiązaniem do
          stosowania zasad niniejszego regulaminu.
        </ListItem>
      </List>
      <hr />
      <Paragraph>
        *W przypadku zniszczenia, zgubienia lub nieoddania do biblioteki
        szkolnej wypożyczonych podręczników / materiałów edukacyjnych, rodzice
        /opiekunowie prawni/ ponoszą odpowiedzialność finansową zgodnie z art.
        22 ak ust. 3 ustawy o systemie oświaty (Dz.U.z 20014r. poz.811)
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

  hr {
    border: 0;
    border-bottom: 1px solid #efefef;
    margin-bottom: 2em;
  }

  p {
    color: ${({theme}) => theme.blue}
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

const List = styled.ol`
  line-height: 1.8;
  margin-left: 1.5em;
  margin-bottom: 1.5em;
`;

const ListItem = styled.li``;

export default Main;
