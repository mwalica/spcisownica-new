import styled from 'styled-components';
import TitleH3 from '../../styles/TitleH3';
import TitleH6 from '../../styles/TitleH6';
import OlList from '../../styles/OlList';

const Main = () => {
  return (
    <Wrapper>
      <TitleHeader>
        <TitleH3>
          Procedura przyprowadzania i odbierania dzieci z odziału przedszkolnego
        </TitleH3>
        <Author>
          <span>Autor:</span> Edyta Badura
        </Author>
      </TitleHeader>
      <TitleH6>Przyprowadzanie dziecka do oddziału przedszkolnego</TitleH6>
      <OlList>
        <li>
          Dzieci są przyprowadzane do placówki i odbierane z placówki przez
          opiekunów prawnych bądź przez osoby upoważnione na piśmie przez
          rodziców (upoważnienia znajdują się w dokumentacji nauczyciela). Są
          oni odpowiedzialni za ich bezpieczeństwo w drodze do placówki i z
          placówki do domu.
        </li>
        <li>
          Opiekunowie osobiście powierzają dziecko nauczycielowi – wychowawcy.
        </li>
        <li>
          W godzinach od 8 do 8.30 rodzice (wskazani opiekunowie) przyprowadzają
          dziecko do oddziału przedszkolnego.
        </li>
        <li>
          Rodzice (opiekunowie prawni) zobowiązani są przyprowadzić do placówki
          dzieci zdrowe i czyste. Dziecka chorego lub podejrzanego o chorobę nie
          należy przyprowadzać do placówki.
        </li>
      </OlList>
      <TitleH6>Odbieranie dziecka z oddziału przedszkolnego</TitleH6>
      <OlList>
        <li>
          Dzieci mogą być przyprowadzane i odbierane przez inne osoby
          upoważnione na piśmie przez rodziców (opiekunów prawnych).
          Upoważnienie pozostaje w dokumentacji placówki.
        </li>
        <li>
          Rodzice (opiekunowie prawni) ponoszą odpowiedzialność prawną za
          bezpieczeństwo dziecka odebranego z placówki przez upoważnioną przez
          nich osobę.
        </li>
        <li>
          Z terenu placówki można pozwolić dziecku odejść dopiero wtedy, gdy
          rodzic (osoba upoważniona) dotarł na miejsce pobytu grupy.
        </li>
        <li>
          Rodzice (opiekunowie prawni) zobowiązani są przyprowadzić do placówki
          dzieci zdrowe i czyste. Dziecka chorego lub podejrzanego o chorobę nie
          należy przyprowadzać do placówki.
        </li>
        <li>
          Nauczyciel odmówi wydania dziecka, w przypadku gdy stan osoby
          odbierającej dziecko wskazuje na spożycie alkoholu czy zachowanie
          agresywne. W takim przypadku personel placówki ma obowiązek zatrzymać
          dziecko do czasu wyjaśnienia sprawy. W tych okolicznościach nauczyciel
          zobowiązany jest skontaktować się z drugim rodzicem lub osobą
          upoważniona do odbioru. O zaistniałym fakcie powinien zostać
          poinformowany dyrektor lub jego zastępca.
        </li>
        <li>
          Nauczyciel nie ponosi odpowiedzialności za dziecko pozostające na
          terenie przedszkola pod opieką rodziców (opiekunów prawnych).
        </li>
        <li>
          W przypadku, gdy dziecko nie zostanie odebrane po zakończeniu zajęć,
          nauczyciel zobowiązany jest powiadomić telefonicznie rodziców (
          opiekunów prawnych). Jeśli nie ma możliwości skontaktowania się z
          rodzicami (opiekunami prawnymi) lub osobami upoważnionymi do odbioru,
          nauczyciel powiadamia Dyrektora Szkoły, który w dalszym etapie działań
          podejmuje decyzję o powiadomieniu Policji. W przypadku braku
          możliwości powiadomienia Dyrektora, nauczyciel sam podejmuje decyzję o
          powiadomieniu Policji.
        </li>
        <li>
          Życzenie rodziców dotyczące nieodbierania dziecka przez jednego z
          rodziców musi być poświadczone przez orzeczenie sądowe.
        </li>
        <li>
          Obowiązkiem rodziców (opiekunów prawnych) i nauczyciela jest
          przestrzeganie zasad przyprowadzania i odbierania dzieci.
        </li>
      </OlList>
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

export default Main;
