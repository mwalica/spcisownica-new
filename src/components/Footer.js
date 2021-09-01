import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <p>
          {new Date().getFullYear()} &copy; Zespół Szkolno-Przedszkolny w Cisownicy
        </p>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.darkGray};
`;

const Container = styled.div`
letter-spacing: 0.05ch;
  font-weight: 300;
  padding: 1em;
  margin: 0 auto;
  width: 80%;
  max-width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.95rem;
`;

export default Footer;
