import styled from 'styled-components';
import TitleH3 from '../../styles/TitleH3';
import TitleH6 from '../../styles/TitleH6';
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
        <strong>
          Oddziały Przedszkolne ZSP im. Jury Gajdzicy w Cisownicy
        </strong>
        <br />
        Adres: <strong>Goleszów Równia, ul. Osiedlowa 17, 43-440 Goleszów</strong>
        <br />
        Telefon: <strong>33 8528256</strong>
      </Paragraph>
      <Paragraph>
      Realizowany program: <br />Nasze przedszkole. Program edukacji przedszkolnej wspomagający rozwój aktywności dzieci. Grupa MAC S.A. 2017
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
