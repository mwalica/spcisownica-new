import styled from 'styled-components';

import HeaderBg from '../asstes/header_bg.jpg';
import Bottombar from './Bottombar';
import HeroContent from './HeroContent';

import Navbar from './Navbar';
const Hero = () => {
  return (
    <Wrapper>
      <Navbar />
      <HeroContent />
      <Bottombar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${HeaderBg});
  background-size: cover;
  background-position: center center;
`;

export default Hero;
