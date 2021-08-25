import { useState } from 'react';

import styled from 'styled-components';
import TitleH3 from '../../styles/TitleH3';

import { timetable } from '../../util/preschoolr';

const Main = () => {
  const [tabs, setTabs] = useState(true);

  const table = tabs
    ? timetable.filter((doc) => doc.type === 'tygryski')
    : timetable.filter((doc) => doc.type === 'sowy');

  return (
    <Wrapper>
      <TitleHeader>
        <TitleH3>Rozkład dnia</TitleH3>
        <Author>
          <span>Autor:</span> Edyta Badura
        </Author>
      </TitleHeader>
      <Tabs>
        <ul>
          <li className={tabs ? 'is-active' : ''} onClick={() => setTabs(true)}>
            Grupa Tygryski
          </li>
          <li
            className={!tabs ? 'is-active' : ''}
            onClick={() => setTabs(false)}
          >
            Grupa Sówki
          </li>
        </ul>
      </Tabs>

      <Table>
        <tbody>
          {table.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.time}</td>
              <td>{doc.description}</td>
            </tr>
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

const Author = styled.small`
  span {
    color: ${({ theme }) => theme.author};
  }
`;

const Tabs = styled.div`
  margin-bottom: 3em;
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    border-bottom: 1px solid #dbdbdb;
  }

  li {
    padding: 0.5em;
    text-transform: uppercase;
    /* border-top-left-radius: 6px;
    border-top-right-radius: 6px; */
    margin-left: 1em;
    margin-bottom: -1px;
    cursor: pointer;
  }
  li.is-active {
    cursor: auto;
    /* border: 1px solid #dbdbdb; */
    border-bottom: 2px solid ${({ theme }) => theme.red};
    color: ${({ theme }) => theme.darkBlue};
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
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
        width: 10em;
      }
    }
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.blue};
  }
`;

export default Main;
