import styled from 'styled-components';
import TitleH3 from '../../styles/TitleH3';
import Paragraph from '../../styles/Paragraph';

const Main = () => {
  return (
    <Wrapper>
      <TitleHeader>
        <TitleH3>Informacje o przedszkolu</TitleH3>
        <Author>
          <span>Autor:</span> Edyta Badura
        </Author>
      </TitleHeader>
      <Paragraph>
        <strong>Oddziały Przedszkolne ZSP w Cisownicy</strong>
        <br />
        Adres:{' '}
        <strong>Goleszów Równia, ul. Osiedlowa 17, 43-440 Goleszów</strong>
        <br />
        Telefon: <strong>33 8528256</strong>
      </Paragraph>
      <Paragraph>
        Realizowany programy: <br />
        <strong>
          Rozwój - wychowanie - edukacja. Program wychowania przedszkolnego.
        </strong>{' '}<br />
        Anna Stalmach - Tkacz, Karina Mucha , Nowa Era
        <br />
        <strong>
          Program wychowania przedszkolnego Wokół Przedszkola
        </strong>{' '}<br />
        Małgorzata Kwaśniewska, Joanna Lendzion, Wiesława Żaba-Żabińska, MAC
        Edukacja
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

export default Main;
