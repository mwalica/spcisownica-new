import styled from 'styled-components';
import TitleH3 from '../../styles/TitleH3';
import Paragraph from '../../styles/Paragraph';

const Main = () => {
  return (
    <Wrapper>
      <TitleHeader>
        <TitleH3>Nasz patron</TitleH3>
        <Author>
          <span>Autor:</span> Administrator
        </Author>
      </TitleHeader>
      <Paragraph>
        <strong>Jerzy Gajdzica</strong> albo, jak sam się podpisywał - Jura to
        postać szczególna w historii Cisownicy. Jako prosty chłop, gospodarujący
        na 15-morgowym gospodarstwie, a zarazem furman wożący towary do Krakowa,
        Wieliczki czy na Słowacczyznę, bywał w szerokim świecie, skąd przywoził
        książki, głównie o tematyce religijnej i historycznej. To zamiłowanie do
        książek, a także umiejętność czytania i pisania Jura Gajdzica wyniósł z
        rodzinnego domu w Cisownicy, gdzie języka ojczystego uczono się z
        Biblii, postylli czy kancjonałów ewangelickich. Jura Gajdzica sam
        oprawiał zakupione książki w deskę i skórę, a następnie ozdobnie je
        wytłaczał i okuwał. Swoje książki również pieczętował, umieszczając u
        dołu karty tytułowej własne nazwisko. Pieczęć z napisem "Jura Gajdzica"
        przygotował sobie jako wklejkę na osobnych karteczkach. Był to
        najstarszy chłopski ekslibris polski. Jura Gajdzica jest też autorem
        pamiętnika Dlo pamięci Narodu ludzkiego, w którym zapisywał ważne
        wydarzenia z lat 1805-1823. Zapiski te podają lokalne wydarzenia
        historyczne, zawierają też interesujące uwagi dotyczące pogody,
        nieurodzaju, drożyzny czy chorób. Na uwagę zasługuje fakt, iż pamiętnik
        pochodzi z czasów gdy polska wieś była pogrążona w analfabetyzmie, a
        szlachcic często podpisywał się trzema krzyżykami.{' '}
        <strong>
          Na wniosek Rady Pedagogicznej 28 września 1960 roku Kuratorium Okręgu
          Szkolnego w Katowicach nadało naszej szkole imię Jury Gajdzicy
        </strong>
        .
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
