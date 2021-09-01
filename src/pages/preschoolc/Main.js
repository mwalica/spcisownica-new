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
        <strong>
        Przedszkole Publiczne w Cisownicy
        </strong>
        <br />
        Adres: <strong>Cisownica, ul. Cisowa 83, 43-440 Goleszów</strong>
        <br />
        Telefon: <strong>33 8528573</strong>
      </Paragraph>
      <Paragraph>
      Realizowany program: <br />Program wychowania przedszkolnego, Elżbieta Kordos, PWN
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
