import styled from 'styled-components';
import TitleH3 from '../../styles/TitleH3';

import Notices from '../../components/Notices';
import Posts from '../../components/Posts';

const Main = () => {
  return (
    <Wrapper>
      <TitleHeader>
        <TitleH3>Ogłoszenia</TitleH3>
      </TitleHeader>
      <Notices amount={2} />
      <TitleHeader>
        <TitleH3>Wydarzenia</TitleH3>
      </TitleHeader>
      <Posts amount={2} />
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


export default Main;
