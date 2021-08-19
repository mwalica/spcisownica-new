import styled from 'styled-components';
import TitleH3 from '../../styles/TitleH3';
import Paragraph from '../../styles/Paragraph';

const Main = () => {
  return (
    <Wrapper>
      <TitleHeader>
        <TitleH3>Historia szkoły</TitleH3>
        <Author>
          <span>Autor:</span> Administrator
        </Author>
      </TitleHeader>
      <Paragraph>
        Historia naszej szkoły sięga roku 1790, kiedy to rozpoczęła działalność
        pierwsza jednoklasowa szkoła ewangelicka. Nauka odbywała się w
        wynajętym, drewnianym budynku. Pierwszym nauczycielem tejże szkoły był
        Jan Pellar pochodzący z Cisownicy. W 1835 r. powstał nowy, murowany
        budynek szkolny, a w 1850 r. wystawiono przy nim wieżę, w której
        umieszczono dzwony. Podobnie jak wszystkie ówczesne szkoły ewangelickie,
        szkoła cisownicka była utrzymywaną przez zbór szkołą prywatną i nie
        otrzymywała żadnych dotacji z funduszy państwowych. Po ustawie o
        świeckości szkoły z 1869 r., pomimo wielkiej ofiarności mieszkańców
        problemy finansowe stały się główną przyczyną przekształcenia szkoły w
        latach 80-tych XIX wieku w szkolę publiczną.
      </Paragraph>
      <Paragraph>
        Z biegiem lat budynek szkoły okazał się niewystarczający. Gmina
        otrzymała polecenie wybudowania nowej dwuklasowej publicznej szkoły
        powszechnej. Powstała ona między innymi dzięki inicjatywie i wielkiemu
        zaangażowaniu ówczesnego kierownika szkoły Jana Ożany. Jemu Cisownica
        zawdzięcza wybudowanie dwuklasowej szkoły, oddanej w 1898 r. (obecnie
        mieści się w nim przedszkole). Mimo nowego i większego budynku warunki
        nauki były ciężkie. W dwóch pomieszczeniach odbywały się zajęcia
        siedmiu, a później ośmiu oddziałów. Przystąpiono więc do budowy nowej
        szkoły, którą ukończono w 1939 roku. Nowa szkoła była budynkiem
        dwupiętrowym, w którym mieściły się cztery klasy, kancelaria, kuchnia i
        jadalnia. Rozpoczęcie nowego roku szkolnego uniemożliwił wybuch II wojny
        światowej. Cisownica została włączona do Rzeszy Niemieckiej. Nauka
        rozpoczęła się 22 lutego 1940 r. Była to szkoła niemiecka.
      </Paragraph>
      <Paragraph>
        Po wyzwoleniu nauka w polskiej szkole rozpoczęła się 4 czerwca 1945 r.
        Do szkoły uczęszczało 182 uczniów. W następnych latach liczba
        mieszkańców Cisownicy się powiększyła, gdyż Cementownia Goleszów
        wybudowała na terenie wsi 7 dwunastorodzinnych bloków mieszkalnych.
        Spowodowało to wzrost liczby uczniów. Sytuacja ta zmusiła kierownictwo
        szkoły do ponownego przejścia na dwuzmianowy system nauki, a zajęcia
        klas I i II odbywały się w budynku starej szkoły, gdzie mieściło się
        także przedszkole. W związku z tym znów zaistniała potrzeba budowy bądź
        rozbudowy szkoły. Pierwsza decyzja zapadła w 1947 r. – postanowiono
        wybudować nową szkołę i w pobliżu niej dom dla nauczycieli, a istniejący
        budynek przeznaczyć na Dom Dziecka. W latach 1948-49 wybudowany został
        dom nauczycielski, nie wybudowano jednak szkoły.
      </Paragraph>
      <Paragraph>
        W 1984 r. rozpoczęła się rozbudowa szkoły, a w 1985 r. rozpoczęto remont
        kapitalny istniejącego budynku. Całość została oddana do użytku wiosną
        1987 roku, zakończono tym samym tzw. I etap rozbudowy szkoły. Drugi etap
        to budowa sali gimnastycznej i basenu. Otwarcie sali gimnastycznej
        nastąpiło 32.11.1994 roku, a kryty basen otwarto 18.12.1997 roku.
      </Paragraph>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  flex: 1 1 100%;
  padding: 1em;
  @media(min-width: 1024px) {
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

export default Main;
