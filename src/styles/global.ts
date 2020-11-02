import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-bg.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    /* Sem repetir, ir 70% para direita e alinhar no topo */
    background: #F0F0F5 url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    /* Para ajudar no mobile, colocar max */
    max-width: 960px;
    margin: 0 auto;
    /* Para o conteúdo não enconstar nas bordas no mobile */
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
