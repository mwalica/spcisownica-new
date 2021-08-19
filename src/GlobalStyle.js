import {createGlobalStyle} from 'styled-components';

//  sm: "640px"
//  md: "768px"
//  lg: "1024px"
//  xl: "1280px"

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #5b5b5b;
    ${'' /* background-color: #eceff1; */}
    background-color: white;
    @media(min-width: 1280px) {
        font-size: 18px;
    }
}

strong {
    color: #445c9b;
}

`;

export default GlobalStyle;