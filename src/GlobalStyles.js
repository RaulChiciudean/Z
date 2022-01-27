import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    @media(max-width:1500px){
      font-size:75%;
    };
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background:black;
    overflow-x: hidden;
  }
`;


export default GlobalStyle;