import styled from 'styled-components';
import TitleH3 from '../../styles/TitleH3';
import Paragraph from '../../styles/Paragraph';

import { docsUrl } from '../../util/url';

const Main = () => {
  return (
    <Wrapper>
      <TitleHeader>
        <TitleH3>Stypendia</TitleH3>
        <Author>
          <span>Autor:</span> Administrator
        </Author>
      </TitleHeader>
      <Paragraph>
        W Szkole Podstawowej imp. Jury Gajdzicy w Cisownicy przyznawane są
        stypedia:
      </Paragraph>
      <List>
        <ListItem>
          Stypendium za wyniki w nauce oraz osiągnięcia sportowe <br />
          <a
            href={`${docsUrl}regulamin_stypendium.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            Stypendium Szkolne - regulamin
          </a>
        </ListItem>
        <ListItem>
          Stypendium profesora Sławka dla najlepszych uczniów Szkołay
          Podstawowej im. Jury Gajdzicy w Cisownicy <br />
          <a
            href={`${docsUrl}regulamin_stypendium_prof_slawka.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            Stypendium prof. Sławka - regulamin
          </a>
        </ListItem>
      </List>
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

const List = styled.ol`
  line-height: 1.8;
  margin-left: 1.5em;
  margin-bottom: 1.5em;
`;

const ListItem = styled.li`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.blue};
  }
`;

export default Main;
