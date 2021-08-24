import styled from 'styled-components';
import TitleH3 from '../../styles/TitleH3';
import OlList from '../../styles/OlList';

import { docsUrl } from '../../util/url';

const Main = () => {
  return (
    <Wrapper>
      <TitleHeader>
        <TitleH3>Przydatne linki</TitleH3>
        <Author>
          <span>Autor:</span> Joanna Talaga i Klaudia Brańka
        </Author>
      </TitleHeader>
      <OlList>
        <li>
          <a
            href={`${docsUrl}nastoletnia_depresja_poradnik_dla_rodzicow.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            Nastoletnia depresja - poradnik dla rodziców
          </a>{' '}
          - forumprzeciwagresji.pl
        </li>
        <li>
          <a
            href={`${docsUrl}depresja_nastoletnia.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            Nastoletnia Depresja
          </a>{' '}
          - opracowanie Monika Kalinowska
        </li>
        <li>
          <a
            href={`${docsUrl}cyberprzemoc1.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            Cyberprzemoc - włącz blokadę na nękanie
          </a>
          - opracowanie Anna Borkowska
        </li>
        <li>
          <a href={`${docsUrl}fomo.pdf`} target="_blank" rel="noreferrer">
            FOMO i nadużywanie nowych technologii
          </a>{' '}
          - opracowanie Marta Witkowska
        </li>
        <li>
          <a
            href={`${docsUrl}domowe_zasady_ekranowe.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            Domowe zasady ekranowe
          </a>{' '}
          - opracowanie Katarzyna Blak-Filus
        </li>
        <li>
          <a
            href={`${docsUrl}jak_radzic_stresem.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            Jak radzić sobie ze stresem?
          </a>{' '}
          - opracowanie Katarzyna Blak-Filus
        </li>
        <li>
          <a href={`${docsUrl}hejt_stop.pdf`} target="_blank" rel="noreferrer">
            Hejt - STOP
          </a>
        </li>
        <li>
          <a
            href={`${docsUrl}jaki_styl_komunikowania.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            Jaki posiadasz styl komunikowania się?
          </a>
          - opracowanie Katarzyna Płuska
        </li>
        <li>
          <a
            href={`${docsUrl}nauka_zdalna_wskazowki.pdff`}
            target="_blank"
            rel="noreferrer"
          >
            Nauka w domu - wskazówki
          </a>{' '}
          - opracowanie Magdalena Gdula
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
