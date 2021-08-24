import styled from 'styled-components';
import TitleH3 from '../../styles/TitleH3';
import TitleH5 from '../../styles/TitleH5';

const Main = () => {
  return (
    <Wrapper>
      <TitleHeader>
        <TitleH3>Rada Rodziców</TitleH3>
        <Author>
          <span>Autor:</span> Przemysław Misiarz
        </Author>
      </TitleHeader>

      <TitleH5>
        Członkowie zarządu Rady Rodziców działającej przy SP Cisownica
      </TitleH5>
      <Paragraph>Prezydium Rady Rodziców:</Paragraph>
      <List>
        <ListItem>
          <strong>Piotr Waszek</strong> - przewodniczący
        </ListItem>
        <ListItem>
          <strong>Katarzyna Wantulok</strong> - z-ca przewodniczącego
        </ListItem>
        <ListItem>
          <strong>Natalia Cieślar</strong> - sekretarz
        </ListItem>
        <ListItem>
          <strong>Anna Wnętrzak</strong> - skarbnik
        </ListItem>
      </List>
      {/* <Paragraph>Klasa 1A:</Paragraph>
      <List>
        <ListItem>
          <strong>Anna Nowakowska</strong>
        </ListItem>
        <ListItem>
          <strong>Ewa Gardaś</strong>
        </ListItem>
        <ListItem>
          <strong>Michał Wojtas</strong>
        </ListItem>
      </List>
      <Paragraph>Klasa 1B:</Paragraph>
      <List>
        <ListItem>
          <strong>Krzysztof Hławiczka</strong>
        </ListItem>
        <ListItem>
          <strong>Damian Marcol</strong>
        </ListItem>
        <ListItem>
          <strong>Beata Rozmus</strong>
        </ListItem>
      </List>
      <Paragraph>Klasa 2:</Paragraph>
      <List>
        <ListItem>
          <strong>Justyna Bzura</strong>
        </ListItem>
        <ListItem>
          <strong>Ludmiła Polok</strong>
        </ListItem>
        <ListItem>
          <strong>Krzysztof Hławiczka</strong>
        </ListItem>
      </List>
      <Paragraph>Klasa 3:</Paragraph>
      <List>
        <ListItem>
          <strong>Katarzyna Plinta</strong>
        </ListItem>
        <ListItem>
          <strong>Marzena Polok</strong>
        </ListItem>
        <ListItem>
          <strong>Anna Wnętrzak</strong>
        </ListItem>
      </List>
      <Paragraph>Klasa 4:</Paragraph>
      <List>
        <ListItem>
          <strong>Barbara Foltyn-Cieślar</strong>
        </ListItem>
        <ListItem>
          <strong>Halina Siedlok</strong>
        </ListItem>
        <ListItem>
          <strong>Joanna Starzec</strong>
        </ListItem>
        <ListItem>Aldona Sieklucka</ListItem>
      </List> */}
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

const Paragraph = styled.p`
  line-height: 1.6;
  margin-top: 0.6em;
`;

const Author = styled.small`
  span {
    color: ${({ theme }) => theme.author};
  }
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  padding: 0.2em 0.8em;
`;

export default Main;
