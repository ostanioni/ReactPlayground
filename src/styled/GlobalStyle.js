import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Roboto', sans-serif;
    scrollbar-color: dark;
    /* transition: all 0.5s ease-in-out;*/
  }
  * {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    background-color: ${props=>props.theme.bgColor};
    color: ${props=>props.theme.textColor};
    scrollbar-color: dark;
    /*transition: all 0.5s ease-out;*/
  }
  h1 {
    font-size: 1.5rem;
  }
  h2 {
    font-size: 1.3rem;
  }
  h3 {
    font-size: 1.2rem;
  }
  
  @media (max-width: 576px) {
    html {
      font-size: 13px;
    }
  }
  @media (min-width: 577px) and (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }
  @media (min-width: 769px) and (max-width: 992px) {
    html {
      font-size: 16px;
    }
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    html {
      font-size: 18px;
    }
    #bars {
      display: none;
    }
  }
  @media (min-width: 1201px) {
    html {
      font-size: 20px;
    }
    #bars {
      display: none;
    }
  }
`
export default GlobalStyle