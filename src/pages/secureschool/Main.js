import styled from 'styled-components';
import TitleH3 from '../../styles/TitleH3';
import Paragraph from '../../styles/Paragraph';
import {docsUrl} from '../../util/url'

const Main = () => {
  return (
    <Wrapper>
      <TitleHeader>
        <TitleH3>Bezpieczna szkoła</TitleH3>
        <Author>
          <span>Autor:</span> Administrator
        </Author>
      </TitleHeader>
      <Paragraph>
        Dokument opracowany w Departamencie Wychowania i Kształcenia
        Integracyjnego Ministerstwa Edukacji Narodowej z udziałem ekspertów, po
        konsultacji z innymi resortami i instytucjami odpowiedzialnymi za
        bezpieczeństwo. 
      </Paragraph>
      <Paragraph>
      <a href={`${docsUrl}bezpieczna_szkola.pdf`} target="_blank" rel="noreferrer">BEZPIECZNA SZKOŁA Zagrożenia i zalecane działania profilaktyczne w zakresie bezpieczeństwa fizycznego i cyfrowego uczniów</a>
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
