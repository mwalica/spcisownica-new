import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HeaderImg from '../asstes/header_img.jpg';

const HeroContent = () => {
  return (
    <div>
      <Wrapper>
        <ContentLeft>
          <h1>
            Zespół Szkolno-Przedszkolny <span>im. Jury Gajdzicy</span> w
            Cisownicy
          </h1>
          <div className="btn-group">
            <Item className="btn-primary" to="/info">
              Informacje
            </Item>
            <Item as="a" className="btn-outline" href="https://uonetplus.vulcan.net.pl/gminagoleszow" target="_blank" rel="noopener noreferrer">E-dziennik</Item>
          </div>
        </ContentLeft>
        <ContentRight>
          <img src={HeaderImg} alt="Szkoła Podstawowa w Cisownicy" />
        </ContentRight>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  max-width: 1280px;
  width: 80%;
  margin: 0 auto;
  align-items: center;
`;

const ContentLeft = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  h1 {
    width: 100%;
    margin: 0;
    font-size: 2.4em;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
    color: ${({ theme }) => theme.darkBlue};
    @media (min-width: 1280px) {
      text-align: left;
    }
    span {
      display: block;
      color: ${({ theme }) => theme.blue};
    }
  }
  .btn-group {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 2em 0 2em;
    @media (min-width: 1280px) {
      justify-content: flex-start;
    }
    /* button {
      cursor: pointer;
      padding: 0.6em 1.2em;
      border-radius: 0.25rem;
      box-shadow: ${({ theme }) => theme.mdShadow};
      font-family: ${({ theme }) => theme.fontFamily};
      font-size: 1em;
      letter-spacing: 0.08em;
      margin-right: 1.5em;
      text-transform: uppercase;
    } */
  }
`;

const ContentRight = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  img {
    overflow: hidden;
    display: block;
    width: 90%;
    background-color: ${({ theme }) => theme.white};
    padding: 1em;
    box-shadow: ${({ theme }) => theme.xlShadow};
  }
`;

const Item = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  padding: 0.6em 1.2em;
  border-radius: 0.25rem;
  box-shadow: ${({ theme }) => theme.mdShadow};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 1em;
  letter-spacing: 0.08em;
  margin-right: 1.5em;
  text-transform: uppercase;
  transition: 0.4s all ease-in;

  &:hover {
    box-shadow: ${({ theme }) => theme.xlShadow};
  }

  &.btn-primary {
    background-color: ${({ theme }) => theme.lightBlue};
    border: 1px solid ${({ theme }) => theme.lightBlue};
    color: ${({ theme }) => theme.white};
  }

  &.btn-outline {
    background: transparent;
    color: ${({ theme }) => theme.lightBlue};
    border: 1px solid ${({ theme }) => theme.lightBlue};
  }
`;

export default HeroContent;
