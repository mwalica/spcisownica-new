import styled from 'styled-components';
import TitleH3 from '../../styles/TitleH3';
import TitleH5 from '../../styles/TitleH5';
import TitleH6 from '../../styles/TitleH6';
import Paragraph from '../../styles/Paragraph';
import OlList from '../../styles/OlList';

import Advice1 from '../../asstes/rady1.jpg';
import Advice2 from '../../asstes/rady2.jpg';
import Advice3 from '../../asstes/rady3.jpg';
import Advice4 from '../../asstes/rady4.jpg';

const Main = () => {
  return (
    <Wrapper>
      <TitleHeader>
        <TitleH3>Rady psychologa</TitleH3>
        <Author>
          <span>Autor:</span> Joanna Talaga i Klaudia Brańka
        </Author>
      </TitleHeader>
      <Container>
        <img src={Advice1} alt="plakat - rady psychologa 1" />
        <img src={Advice2} alt="plakat - rady psychologa 2" />
        <img src={Advice3} alt="plakat - rady psychologa 3" />
        <img src={Advice4} alt="plakat - rady psychologa 4" />
      </Container>
      <TitleH5>
        Co możemy zrobić, aby zmotywować dziecko do uczenia się w domu?
      </TitleH5>
      <Paragraph>
        Czas nauki zdalnej jest czasem trudnym zarówno dla dziecka jak i dla
        rodzica. Podczas pobytu w domu dziecko ma wiele przyjemniejszych, w jego
        odczuciu zajęć, niż siedzenie nad książkami. Jest jednak kilka
        elementów, które w dużym stopniu pomagają wzbudzać i podtrzymywać
        motywację do nauki dziecka w warunkach domowych i nie tylko.
      </Paragraph>
      <TitleH6>1. Harmonogram</TitleH6>
      <Paragraph>
        To, co pomaga dziecku zmobilizować się do pracy, to dobra organizacja
        czasu nauki. Bardzo ważny jest stabilny harmonogram. Wyznaczmy dokładnie
        godziny przeznaczone na odrabianie lekcji i naukę. Pomóżmy dziecku
        zabrać się do lekcji. Najlepiej, aby odrabiało je o stałej porze, w
        miejscu, gdzie jest cicho i spokojnie, gdzie dziecko może się
        skoncentrować i nic go nie rozprasza. Szczególną uwagę należy zwrócić na
        to czy w tle nie jest włączony telewizor, komputer, radia itp., gdyż
        sprzęty multimedialne potrafią niezwykle skutecznie odciągać dziecko od
        nauki. Przed przystąpieniem do nauki dobrze jest przygotować sobie
        wszystkie książki i pomoce, tak aby później nie przerywać pracy.
        Odrabianie lekcji warto rozpocząć od najtrudniejszego zadania, kiedy
        jest się jeszcze wypoczętym. Wskazane jest również rozdzielanie
        materiału na krótsze partie, włączanie przerw. Zwłaszcza w przypadku
        małych dzieci, jest to bardzo ważne.{' '}
      </Paragraph>
      <TitleH6>2. Systematyczność</TitleH6>
      <Paragraph>
        Ważna jest systematyczność. Należy zadbać o to, by przestrzegać stałych
        pór, wyznaczonych na naukę i zadania do wykonania przez dziecko. Co
        więcej, czasem dziecko po prostu nie wie, w jaki sposób zabrać się do
        pracy. Podpowiedzmy dziecku, co może zrobić, aby wykorzystać czas
        przeznaczany na naukę w sposób jak najbardziej efektywny – wskażmy na co
        powinno poświęcić czas w pierwszej kolejności (czyli zadania trudniejsze
        i wymagające uczenia się w dłuższym czasie niż w ciągu jednego dnia np.
        nauka wiersza). Trudno jest w jeden dzień przygotować się do sprawdzianu
        z całego półrocza, ale kiedy naukę rozłoży się w czasie, wówczas okazuje
        się, że wystarczy każdego dnia opracować jeden czy dwa tematy, aby
        skutecznie opanować cały materiał. Podobnie jest z nauką wiersza bądź
        czytaniem lektur. Nie warto tego zostawiać na ostatnią chwilę. Uczeń
        zachęcony do systematyczności sam szybko zauważy, że przyswajanie wiedzy
        stopniowo i małymi partiami zajmuje stosunkowo niewiele czasu i nie
        wymaga zbyt dużego wysiłku. W systematycznej nauce znaczącą rolę
        odgrywają również rodzice. Są dla dziecka przykładem i wsparciem, ale
        powinni je też kontrolować. Zatem poświęćmy pod koniec dnia chwilkę, by
        sprawdzić czego nowego w danym dniu nauczyło się dziecko bądź jakie
        zadania udało mu się wykonać i pochwalny je za wytrwałość i dobrą pracę.
      </Paragraph>
      <TitleH6>3. Pochwała</TitleH6>
      <Paragraph>
        Duży wpływ na motywację ma także pozytywna ocena rezultatów własnej
        pracy. Każdy lubi, gdy jego starania są doceniane. Pamiętajmy więc, aby
        zauważać nawet niewielkie osiągnięcia dziecka i aby chwalić je nawet za
        drobne postępy. Nie stawiajmy dziecku zbyt wygórowanych wymagań, swoje
        oczekiwania dostosujmy do jego możliwości. Dzieci różnią się między sobą
        pod względem zdolności do nauki, więc nie każdy uczeń może mieć same
        piątki. Warto doceniać nie tylko końcowy efekt pracy (np. w postaci
        ocen), ale również sam fakt przystąpienia do niej, wysiłek wkładany w
        proces uczenia się. Jest to szczególnie ważne w przypadku słabszych
        uczniów, którzy często pomimo dużego nakładu pracy i czasu osiągają nie
        zawsze zadowalające efekty. Jeśli rodzice będą skupiać uwagę jedynie na
        niepowodzeniach dziecka, wówczas szybko straci ono chęć do nauki.
        Najlepszy efekt da pochwała konkretna, wskazująca na pozytywne
        działanie, a nie pochwała dziecka jako takiego np. „Świetnie obliczyłaś
        to zadanie z matematyki”, „Znalazłaś bardzo dobrą drogę do rozwiązania
        tego zadania”, „Fantastycznie narysowałaś to drzewo”, zamiast zdań typu:
        „Jak zawsze jesteś dobra z matematyki”, czy też „Masz niezłe zdolności
        plastyczne”. Poza tym od czasu do czasu potrzebna jest też tzw.
        marchewka, czyli nagroda. Może nią być jakiś upominek, ulubione danie
        dziecka wybrane przez nie na obiad, ulubiony deser, cokolwiek – w
        zależności od upodobań. Nie powinno się natomiast płacić pieniędzmi,
        dawać jakiegokolwiek upominku za każde dobre oceny, gdyż nie są to
        skuteczne metody na dłuższą metę.
      </Paragraph>
      <TitleH6>4. Techniki ułatwiające zapamiętywanie</TitleH6>
      <Paragraph>
        W nauce warto stosować różnego rodzaju techniki ułatwiające
        zapamiętywanie. Notatki z wykorzystaniem różnych kolorów, podkreśleń i
        zabawnych rysunków, bazowanie na skojarzeniach, robienie wykresów, map
        myśli. Wszelkiego rodzaju fiszki, czyli słowa klucze i hasła w
        książkach, na tablicy, ścianie, biurku. To wszystko może pomóc dziecku
        lepiej i bardziej trwale opanować materiał.
      </Paragraph>
      <TitleH6>5. Pokazywanie dziecku korzyści z wiedzy</TitleH6>
      <Paragraph>
        Każdy uczeń w jakimś momencie swojej kariery szkolnej zadaje sobie
        pytanie: ,,Po co właściwie tego wszystkiego się uczę?”. Pomóżmy więc
        dziecku dostrzec korzyści, jakie może odnieść z posiadanej wiedzy,
        pokażmy mu, w jaki sposób powiązać ją z codzienną rzeczywistością i jak
        wykorzystać ją w praktyce np. dziecko uczyło się obliczać pole
        prostokąta, więc zapytajmy je czy mogłoby Wam pomóc policzyć ile metrów
        wykładziny, parkietu muszą Państwo kupić do danego pokoju, gdyż w
        niedługim czasie mają Państwo zamiar położyć nową wykładzinę. Dzieci
        stawiające sobie za cel zdobycie wiedzy lepiej się uczą, czerpią większą
        przyjemność z nauki. Tutaj wsparcie rodziców i dawanie przykładu własnym
        postępowaniem jest niezastąpione. Już samo okazanie zainteresowania może
        zdziałać bardzo wiele. Zachęcajmy dziecko do rozmów, do myślenia, do
        wyrażania własnych opinii. Rozbudzajmy w nim zainteresowanie otaczającym
        światem. Pokażmy mu, że nauka naprawdę może być interesująca i
        przyjemna.
      </Paragraph>
      <TitleH6>6. Wsparcie</TitleH6>
      <Paragraph>
        Nie wyręczajmy dziecka w odrabianiu lekcji. To bardzo ważne. Kiedy prosi
        o pomoc, nie podawajmy mu gotowych rozwiązań, ale jedynie na nie
        naprowadźmy, udzielmy wskazówek, wyjaśnijmy wątpliwości. Zachęćmy ucznia
        do samodzielności. Samodzielnie rozwiązane zadanie może dostarczyć
        dziecku dużej satysfakcji, wzmacnia w nim również poczucie, że jest w
        stanie poradzić sobie z trudnościami. Jest to szczególnie ważne,
        ponieważ uczeń posiadający wiarę w swoje siły nie zraża się
        niepowodzeniami, a stawiane przed nim zadania traktuje nie jak uciążliwe
        obowiązki, ale jak przyjemne wyzwanie, któremu jest w stanie sprostać.{' '}
      </Paragraph>
      <TitleH6>7. Współpraca ze szkołą</TitleH6>
      <Paragraph>
        Współpracujmy ze szkołą. Pamiętajmy, że nauczyciel to sprzymierzeniec w
        procesie edukacji dziecka. Wymieniajmy się z nauczycielami swoimi
        spostrzeżeniami, zadawajmy pytania, prośmy o wskazówki i bądźmy dla
        siebie uprzejmi nawzajem, mając na uwadze to, że wszyscy mamy wspólny
        cel i działamy w trosce o dobro dziecka. Brak motywacji do nauki wynika
        najczęściej z niewykształcenia u dziecka nawyków do uczenia się, bądź
        też jest skutkiem doznanych przez dziecko niepowodzeń. Dziecko
        potrzebuje zrozumienia rodziców, wsparcia i wiary, że sobie poradzi!
      </Paragraph>

      <TitleH5>Radzenie sobie z emocjami dzieci w czasie pandemii</TitleH5>
      <Paragraph>
        Nieprzewidywalność. To uczucie, które towarzyszy nam od dłuższego czasu
        i ciągle nie może zostać zastąpione stabilizacją i poczuciem
        bezpieczeństwa, których bardzo potrzebujemy, by utrzymywać zdrowie
        psychiczne. Codziennie śledzimy informacje na temat koronawirusa lub
        docierają one do nas z różnych stron, nawet gdy niekoniecznie tego
        chcemy.
      </Paragraph>
      <Paragraph>
        Obecnie, niemal przez cały czas musimy adaptować się do nowych sytuacji
        wynikających z przebiegu zdarzeń, decyzji władz, wytycznych służb
        sanitarnych itd. Wszystko to w dużej mierze może niepokoić i
        jednocześnie utrudniać nam, a tym samym naszym dzieciom, radzenie sobie
        w obecnej sytuacji.
      </Paragraph>
      <Paragraph>
        Dzieci, mimo tego, że często nie rozumieją w pełni danej sytuacji,
        bardzo wyraźnie odczuwają nastroje dorosłych i przejmują od nich lęk.
        Zauważają też zmiany w codziennej rutynie, która potrzebna jest
        zwłaszcza młodszym dzieciom po to, by czuły się bezpiecznie. Nastolatki
        z kolei mogą przejawiać silniejsze tendencje do popadania w skrajności.
      </Paragraph>
      <Paragraph>
        <strong>
          Co możemy zrobić, aby wspierać dzieci i nastolatki, a tym samym pomóc
          im radzić sobie z emocjami w czasie pandemii?
        </strong>
      </Paragraph>
      <OlList>
        <li>
          Dbajmy o porządek codziennej rutyny – regularny sen, stała pora
          pobudki oraz posiłków, zachowanie dziecięcych rytuałów, ustalenie
          czasu na naukę, odpoczynek, realizację obowiązków, zabawę i różne inne
          aktywności codzienne.{' '}
        </li>
        <li>
          Wyjaśniajmy dziecku przyczyny zmian, które obserwuje – na tyle, na ile
          sami wiemy i potrafimy dziecku wytłumaczyć, ze spokojem starajmy się
          objaśnić, co powoduje, że np. musimy pozostać w domu, albo nosić
          maseczki. Nawet jeśli dziecko nie wszystko zrozumie, sam fakt, że może
          z nami o tym porozmawiać, a my w życzliwy sposób odpowiadamy na jego
          pytania, da mu oparcie i uspokojenie.{' '}
        </li>
        <li>
          Bądźmy obecni nie tylko fizycznie, ale też emocjonalnie – reagujmy z
          empatią na emocje dziecka, okazujmy troskę i zainteresowanie jego
          samopoczuciem, jednakże w granicach rozsądku, tak, by nie był to dla
          dziecka sygnał, że dzieje się coś bardzo niepokojącego.
        </li>
        <li>
          Jasno wyrażajmy, że rozumiemy emocje dziecka – rozmawiajmy z dziećmi o
          emocjach, o tym czym jest lęk, skąd się bierze i po co się pojawia
          oraz jak można sobie z nim radzić (m.in. rozmawiając o nim).
        </li>
        <li>
          Przekierowujmy uwagę dziecka/nastolatka na innych – zachęcając je do
          rozważenia, w jaki sposób mogą wspierać inne osoby (starsze, dzieci,
          lokalną społeczność, ubogich) np. poprzez zabawę lub wspólną naukę z
          młodszym rodzeństwem, pomoc w zrobieniu zakupów starszej sąsiadce czy
          oddanie zbędnych ubrań potrzebującym. Nie chodzi tu o to, by
          unieważniać i pomijać emocje dziecka/nastolatka, ale by je
          przepracować, porozmawiać o nich, a następnie dać młodemu człowiekowi,
          możliwość podjęcia konstruktywnego działania, dzięki któremu będzie
          mieć poczucie, że też może być przydatny.
        </li>
        <li>
          Zadbajmy o ciekawy plan dnia – jeśli dziecko/nastolatek się nudzi, od
          czasu do czasu zachęć je, by wykorzystało to uczucie do dobrych celów
          – poćwiczyło kreatywność i znalazło sobie ciekawe zajęcie, a od czasu
          do czasu samemu zorganizuj coś, co zajmie mu czas w produktywny
          sposób.
        </li>
        <li>
          Upewniajmy się, czy poziom lęku młodego człowieka nie jest za wysoki –
          sprawdźmy, czy posiadane przez dziecko/nastolatka informacje są
          wiarygodne (np. rozmawiając lub urządzając sobie quiz wiedzy o
          koronawirusie).
        </li>
        <li>
          Umożliwiajmy dziecku nawiązywanie i utrzymywanie kontaktów online z
          rówieśnikami – zaproponujmy dziecku rozmowę przez telefon bądź
          komunikator online z jego kolegami/ koleżankami i pomóżmy w jej
          zorganizowaniu. Taka inicjatywa to dbałość o wsparcie społeczne i
          przynależność grupową naszego dziecka, które są bardzo istotne w
          utrzymywaniu prawidłowego zdrowia psychicznego.
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

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.blue};
  }
  img {
    overflow: hidden;
    display: block;
    width: 60%;
    padding: 0.4em;
    box-shadow: ${({ theme }) => theme.xlShadow};
    margin-bottom: 0.5em;
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

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default Main;
