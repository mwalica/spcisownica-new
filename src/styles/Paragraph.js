import styled from 'styled-components'

const Paragraph = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.p`
line-height: 1.8;
margin-bottom: 1em;
`;

export default Paragraph;