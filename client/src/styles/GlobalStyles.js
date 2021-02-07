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
* {
    box-sizing: border-box;
}
html {
    font-size: 10px;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
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
video {
    height: 100%;
    width: 100%;
    object-fit: cover;
}
*:focus {
    outline: none;
}
`;

export default GlobalStyles;