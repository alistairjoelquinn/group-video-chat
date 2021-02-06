import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --dark: #31393C;
    --dark-blue: #2176FF;
    --light-blue: #33A1FD;
    --yellow: #FDCA40;
    --orange: #F79824;
    --black: #191923;
    --white: #FBFEF9;
  }
  html {
    font-size: 10px;
  }
  body {
    font-size: 2rem;
    overflow: hidden;
  }
  button {
    cursor: pointer;
  }
  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;