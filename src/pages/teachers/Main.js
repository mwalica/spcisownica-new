import styled from 'styled-components';
import TitleH3 from '../../styles/TitleH3';

import teachers from '../../util/teachers'

const Main = () => {
  return (
    <Wrapper>
      <TitleHeader>
        <TitleH3>Nauczyciele</TitleH3>
      </TitleHeader>
      <Table>
        <thead>
          <tr>
            <th>Nauczyciel</th>
            <th>Przedmiot</th>
          </tr>
        </thead>
        <tbody>
        {teachers.map(teacher => (
          <tr key={teacher.id}><td>{teacher.name}</td><td>{teacher.course}</td></tr>
        ))}
        </tbody>
      </Table>
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

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  thead {
    border-bottom: 1px solid ${({ theme }) => theme.darkGray};
    th {
      padding: 0.8rem;
      font-weight: 600;
      text-align: left;
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid ${({ theme }) => theme.gray};
      transition: 0.3s all ease-in;
      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
      
    }
    td {
      padding: 0.8rem;
      &:first-child {
        color: ${({ theme }) => theme.darkBlue};
      }
     
    }
  }
`;

export default Main;
