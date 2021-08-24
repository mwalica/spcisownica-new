import styled from 'styled-components';
import Paragraph from '../../styles/Paragraph';
import TitleH3 from '../../styles/TitleH3';
import TitleH5 from '../../styles/TitleH5';

const Main = () => {
  return (
    <Wrapper>
      <TitleHeader>
        <TitleH3>Bezpieczeństwo cyfrowe</TitleH3>
        <Author>
          <span>Autor:</span> Administrator
        </Author>
      </TitleHeader>
      <TitleH5>Zasady postępowania dla uczniów</TitleH5>
      <List>
        <Paragraph>
          <ListItem>
            Nie udostępniaj w sieci swoich danych, takich jak imię, nazwisko,
            adres, numer telefonu
          </ListItem>
          <ListItem>
            Nie zakładaj profili na portalach społecznościowych bez wiedzy i
            zgody rodziców
          </ListItem>
          <ListItem>Nie udostępniaj swoich zdjęć nieznanym osobom</ListItem>
          <ListItem>
            Nie rób zdjęć i nie nagrywaj filmów z udziałem osób, które sobie
            tego nie życzą
          </ListItem>
          <ListItem>
            Nie umawiaj się z osobami znanymi tylko przez internet
          </ListItem>
          <ListItem>
            Informuj rodziców lub nauczycieli, jeśli zdarzy się, że kontaktuje
            się z Tobą przez internet osoba, której nie znasz
          </ListItem>
          <ListItem>
            Informuj rodziców lub nauczycieli o każdej podejrzanej sytuacji, w
            której czujesz się niepewnie
          </ListItem>
          <ListItem>
            Zgłaszaj rodzicom lub nauczycielom każdą sytuację, w której zostałeś
            obrażony, np. w prywatnych komentarzach
          </ListItem>
          <ListItem>
            Podchodź z rozwagą do informacji znalezionych w sieci – nie
            wszystkie są prawdziwe
          </ListItem>
          <ListItem>
            Nie wykorzystuj zdjęć, których nie jesteś autorem (np. publikując je
            na swoich profilach społecznościowych)
          </ListItem>
          <ListItem>
            Pamiętaj, że nikt nie jest anonimowy w internecie – nawet jeśli nie
            podajesz swojego prawdziwego imienia, łatwo można zweryfikować, że
            to Ty zamieściłeś w internecie jakąś informację/komentarz/zdjęcie
          </ListItem>
          <ListItem>
            Komentując posty i zdjęcia innych, a także pisząc wiadomości
            tekstowe, pamiętaj o kulturze, nie używaj wulgaryzmów, nie obrażaj
            innych
          </ListItem>
          <ListItem>
            Nie podłączaj do komputera Pendrive’ów, co do których nie masz
            pewności, że są bezpieczne
          </ListItem>
          <ListItem>Nie klikaj w podejrzane linki</ListItem>
          <ListItem>
            Jeśli masz jakiekolwiek wątpliwości, skonsultuj się z rodzicem lub
            nauczycielem
          </ListItem>
        </Paragraph>
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
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.blue};
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
