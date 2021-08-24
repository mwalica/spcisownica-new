import styled from 'styled-components';
import TitleH3 from '../../styles/TitleH3';
import Paragraph from '../../styles/Paragraph';

import Img1 from '../../asstes/jak_sie_uczyc.jpg';
import Img2 from '../../asstes/bezpieczny_internet.jpg';
import Img3 from '../../asstes/porady_dla_rodzicow.jpg';

const Main = () => {
  return (
    <Wrapper>
      <TitleHeader>
        <TitleH3>Rady dla rodziców</TitleH3>
        <Author>
          <span>Autor:</span> Klaudia Brańka
        </Author>
      </TitleHeader>
      <Container>
        <img src={Img1} alt="plakat - jak się uczyć?" />
        <img src={Img2} alt="plakat - bezpieczny internet" />
        <img src={Img3} alt="plakat - porady dla rodziców" />
      </Container>

      <Paragraph>
        <strong>Grupy psychologiczno-pedagogicznej</strong> dla rodziców i
        uczniów stworzona na Facebooku
        <br />
        *tutaj link przekierowujący Was do niej: <a href="https://www.facebook.com/groups/1300101273520899/" target="_blank" rel="noreferrer">https://www.facebook.com/groups/1300101273520899/</a>
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
