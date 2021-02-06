import { createGlobalStyle } from 'styled-components';

import pangolin from '../../assets/fonts/pangolin.ttf';
import bebasneue from '../../assets/fonts/bebasneue.ttf';

const Typography = createGlobalStyle`
@font-face {
    font-family: pangolin;
    src: url(${pangolin});
}
@font-face {
    font-family: bebasneue;
    src: url(${bebasneue});
}
html {
    font-family: pangolin, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--white);
}
p, li {
    letter-spacing: 0.5px;
}
h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
}
`;

export default Typography;