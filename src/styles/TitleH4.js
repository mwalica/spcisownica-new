import styled from 'styled-components'

const TitleH4 = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.h4`
font-size: 1.6rem;
text-transform: uppercase;
font-weight: 300;
color: ${({theme}) => theme.red};
margin: 0.3em 0;
`;

export default TitleH4
