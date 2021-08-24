import { useContext, useEffect } from 'react';
import styled from 'styled-components';


import NoticesContext from '../context/notices/noticesContext';

import Notice from './Notice';

const Notices = ({amount}) => {
  const noticesContext = useContext(NoticesContext);
  const { notices, getNotices } = noticesContext;

  const result = amount ? notices.slice(0, amount) : notices; 
  console.log(result);

  useEffect(() => {
    getNotices();
  }, []);

  return (
    <Wrapper>
      {result.map((notice) => (
        <Notice notice={notice} key={notice.id} amount={amount}/>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Notices;
