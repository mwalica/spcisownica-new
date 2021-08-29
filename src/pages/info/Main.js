import styled from 'styled-components';
import TitleH3 from '../../styles/TitleH3';
import TitleH4 from '../../styles/TitleH4';
import Paragraph from '../../styles/Paragraph';

const Main = () => {
  return (
    <Wrapper>
      <TitleHeader>
        <TitleH3>O szkole</TitleH3>
        <Author>
          <span>Autor:</span> Administrator
        </Author>
      </TitleHeader>

      <TitleH5>Zespół Szkolno-Przedszkolny w Cisownicy</TitleH5>
      <List>
        <ListItem>
          Adres: <span>Cisownica, ul. Cisowa 79, 43-440 Goleszów</span>
        </ListItem>
        <ListItem>
          E-mail: <span>spcisownica@oswiata.goleszow.info.pl</span>
        </ListItem>
        <ListItem>
          Elektroniczna skrzynka podawcza EPUAP:{' '}
          <span>/SPCisownica/domyslna</span>
        </ListItem>
        <ListItem>
          Telefon: <span>33 8528233</span>
        </ListItem>
        <ListItem>
          Organ prowadzący: <span>Gmina Goleszów</span>
        </ListItem>
        <ListItem>
          Dyrektor: <span>mgr Przemysław Misiarz</span>
        </ListItem>
        <ListItem>
          V-ce dyrektor: <span>mgr Aleksandra Chmiel</span>
        </ListItem>
        <ListItem>
          Liczba nauczycieli: <span>28</span>
        </ListItem>
        <ListItem>
          Liczba oddziały: <span>12</span>
        </ListItem>
        <ListItem>
          Liczba uczniów: <span>200</span>
        </ListItem>
        <ListItem>
          Liczba sal:{' '}
          <span>
            8 sal lekcyjnych, sala gimnastyczna, basen, boisko wielofunkcyjne,
            biblioteka, pracownia komputerowa, świetlica, stołówka
          </span>
        </ListItem>
      </List>

      <TitleH4>Na co kładziemy nacisk?</TitleH4>
      <Paragraph>
        Staramy się wykształcić w naszych uczniach cechy niezbędne we
        współczesnym świecie, takie jak: samodzielność, komunikatywność,
        asertywność, indywidualizm, umiejętność dokonywania samooceny. Cechy te
        staramy się kształtować poprzez dobór aktywizujących metod nauczania na
        wszystkich zajęciach lekcyjnych i pozalekcyjnych. Kładziemy także nacisk
        na to, aby nasi uczniowie pamiętali o swoich korzeniach ucząc ich
        historii, tradycji i kultury naszego regionu. Staramy się, aby w naszej
        szkole na co dzień panowała serdeczna atmosfera i mocna więź pomiędzy
        uczniami i nauczycielami. Dzięki temu udaje się nam zorganizować wiele
        imprez szkolnych i środowiskowych. Do stałych imprez należą: <strong>ślubowanie
        i pasowanie uczniów klasy I, Dzień Nauczyciela, Spotkanie Świąteczne,
        dyskoteka andrzejkowa, mikołajki, dyskoteka i bal karnawałowy, powitanie
        wiosny, Dzień Otwarty Szkoły, Piknik Szkolny</strong> i wiele innych. Prócz tego
        organizujemy liczne imprezy wewnątrzklasowe, takie jak: <strong>Dzień Babci i
        Dziadka, Dzień Matki i Ojca, zabawy i wycieczki klasowe</strong>.
      </Paragraph>

      <TitleH4>Zajęcia pozalekcyjne</TitleH4>

      <Paragraph>
        Dla wszystkich chętnych uczniów organizowane są zajęcia pozalekcyjne.
        Odbywają się zajęcia: kółka matematycznego, przyrodniczego, kultury
        angielskiej, teatralnego, plastycznego, origami i turystycznego. Ponadto
        uczniowie mogą uczestniczyć w zajęciach logopedycznych. Ze względu na
        bardzo dobrą bazę sportową uczniowie licznie uczestniczą w zajęciach
        rekreacyjno-sportowych, w sekcjach piłki nożnej i pływackiej. Uczniowie
        zdolni mają możliwość uczestniczenia w wielu konkursach, zarówno
        międzyszkolnych jak i międzyklasowych. Należą do nich konkursy o zasięgu
        ogólnopolskim oraz konkursy organizowane przez instytucje i organizacje
        regionalne, czy wreszcie organizowane przez nauczycieli i uczniów naszej
        szkoły, często we współpracy z rodzicami.
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

const TitleH5 = styled.h5`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.darkBlue};
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  padding: 0.4em;
  line-height: 1.6;
  span {
    color: ${({ theme }) => theme.darkBlue};
    font-weight: 600;
  }
`;

export default Main;
