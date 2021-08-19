import styled from 'styled-components';
import TitleH3 from '../../styles/TitleH3';
import TitleH5 from '../../styles/TitleH5';
import Paragraph from '../../styles/Paragraph';
import OlList from '../../styles/OlList';

const Main = () => {
  return (
    <Wrapper>
      <TitleHeader>
        <TitleH3>Deklaracja dostepności</TitleH3>
        <Author>
          <span>Autor:</span> Administrator
        </Author>
      </TitleHeader>
      <TitleH5>Oświadczenie w sprawie dostępności</TitleH5>
      <Paragraph>
        Szkoła Podstawowa im. Jury Gajdzicy w Cisownicy zobowiązuje się zapewnić
        dostępność swojej strony internetowej: http://www.spcisownica.edu.pl
        zgodnie z z ustawą z dnia 4 kwietnia 2019 r. o dostępności cyfrowej
        stron internetowych i aplikacji mobilnych podmiotów publicznych.
      </Paragraph>
      <Paragraph>
        Niniejsze oświadczenie w sprawie dostępności ma zastosowanie do{' '}
        <a href="http://www.spcisownica.edu.pl">
          http://www.spcisownica.edu.pl
        </a>
      </Paragraph>
      <Paragraph>
        Data publikacji strony internetowej: <strong>2018-09-01</strong> <br />
        Data ostatniej istotnej aktualizacji: <strong>2020-12-18</strong>
      </Paragraph>
      <Paragraph>
        Deklarację sporządzono na podstawie samooceny przeprowadzonej przez
        podmiot publiczny.
      </Paragraph>
      <Paragraph>
        Strona internetowa jest częściowo zgodna z ustawą z dnia 4 kwietnia 2019
        r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych
        podmiotów publicznych z powodu niezgodności lub wyłączeń wymienionych
        poniżej:
      </Paragraph>
      <OlList>
        <li>filmy nie posiadają audiodeskrypcji</li>
        <li>
          niektóre zdjęcia z wydarzeń nie posiadają pełnych opisów
          alternatywnych
        </li>
        <li>mapy są wyłączone z obowiązku zapewniania dostępności</li>
        <li>dokumenty w PDF nie są dokumentami edytowalnymi</li>
        <li>część plików nie jest dostępnych cyfrowo</li>
      </OlList>
      <Paragraph>Wygląd strony:</Paragraph>
      <OlList>
        <li>zastosowano prawidłowy kontrast strona internetowa</li>
        <li>
          posiada konsekwentna, spójna i logiczną nawigację ułatwiającą
          przeglądanie treści
        </li>
        <li>
          tytuły stron prawidłowo wdrożone w całym serwisie, każda strona
          posiada swój własny tytuł stworzony w oparciu o jeden ustalony wzorzec
        </li>
        <li>pułapki klawiaturowe – wykluczone</li>
        <li>
          wszelkie informacje zawarte w serwisie są redagowane w sposób
          zrozumiały i czytelny
        </li>
        <li>
          na stronie internetowej można używać standardowych skrótów
          klawiaturowych przeglądarki
        </li>
      </OlList>
      <TitleH5>Informacje zwrotne i dane kontaktowe</TitleH5>
      <Paragraph>
        W przypadku problemów z dostępnością strony internetowej prosimy o
        kontakt z sekretariatem szkoły. Adres email:
        <a href="mailto: spcisownica@oswiata.goleszow.info.pl">
          spcisownica@oswiata.goleszow.info.pl
        </a>
        . Kontaktować można się także dzwoniąc na numer telefonu{' '}
        <a href="tel: 338528233">33 8528233</a> . Tą samą drogą można składać
        wnioski o udostępnienie informacji niedostępnej oraz składać skargi na
        brak zapewnienia dostępności.
      </Paragraph>
      <Paragraph>
        Każdy ma prawo do wystąpienia z żądaniem zapewnienia dostępności
        cyfrowej strony internetowej, aplikacji mobilnej lub jakiegoś ich
        elementu. Można także zażądać udostępnienia informacji za pomocą
        alternatywnego sposobu dostępu, na przykład przez odczytanie
        niedostępnego cyfrowo dokumentu, opisanie zawartości filmu bez
        audiodeskrypcji itp. Żądanie powinno zawierać dane osoby zgłaszającej
        żądanie, wskazanie, o którą stronę internetową lub aplikację mobilną
        chodzi oraz sposób kontaktu. Jeżeli osoba żądająca zgłasza potrzebę
        otrzymania informacji za pomocą alternatywnego sposobu dostępu, powinna
        także określić dogodny dla niej sposób przedstawienia tej informacji.
        Podmiot publiczny powinien zrealizować żądanie niezwłocznie, nie później
        niż w ciągu 7 dni od dnia wystąpienia z żądaniem. Jeżeli dotrzymanie
        tego terminu nie jest możliwe, podmiot publiczny niezwłocznie informuje
        o tym wnoszącego żądanie, kiedy realizacja żądania będzie możliwa, przy
        czym termin ten nie może być dłuższy niż 2 miesiące od dnia wystąpienia
        z żądaniem. Jeżeli zapewnienie dostępności cyfrowej nie jest możliwe,
        podmiot publiczny może zaproponować alternatywny sposób dostępu do
        informacji.
      </Paragraph>
      <Paragraph>
      Po wyczerpaniu wskazanej wyżej procedury można także złożyć wniosek do
        Rzecznika Praw Obywatelskich: <a href="http://www.rpo.gov.pl" target="_blank" rel="noreferrer">www.rpo.gov.pl</a>
      </Paragraph>
      <TitleH5>Dostępność architektoniczna</TitleH5>
      <Paragraph>
      <OlList>
        <li>Wejście do szkoły, dostępne jest od strony ulicy Cisowa. Wejścia od
        innych stron otwierane są tylko okazjonalnie.</li>
        <li>W budynku nie ma udogodnień dla osób niepełnosprawnych.</li>
        <li>Szkoła posiada parking ogólnie dostępny.</li>
        <li>W budynku szkoły nie ma zainstalowanej windy.</li>
        <li>Dla osób na wózkach dostępne są tylko W budynku szkoły nie ma zainstalowanych platform, pochylni, informacji głosowych czy pętli indukcyjnych.</li>
        <li>W budynku nie ma oznaczeń w alfabecie brajla ani oznaczeń kontrastowych lub w druku powiększonym dla osób niewidomych i słabo widzących</li>
      </OlList>
            
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

export default Main;
