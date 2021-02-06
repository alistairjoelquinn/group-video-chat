import { createGlobalStyle } from 'styled-components';

import pangolin from '../../assets/fonts/pangolin.ttf';
import bebasneue from '../../assets/fonts/bebasneue.ttf';
import fredokaone from '../../assets/fonts/fredokaone.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: pangolin;
    src: url(${pangolin});
  }
  @font-face {
    font-family: bebasneue;
    src: url(${bebasneue});
  }
  @font-face {
    font-family: fredokaone;
    src: url(${fredokaone});
  }
  html {
    font-family: orbitron, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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