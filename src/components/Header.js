import styled from 'styled-components';

import Topbar from './Topbar';
import Hero from './Hero';

const Header = () => {
  return (
    <Wrapper>
      <Topbar />
      <Hero />
    </Wrapper>
  );
};

const Wrapper = styled.header``;

export default Header;
