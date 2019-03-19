import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Monospace,'Times New Roman','Roboto', sans-serif;
  }
  * {
    box-sizing: border-box;
   /* transition: background-color, color 0.1s;*/
  }
  body {
    padding: 0;
    margin: 0;
    background-color: ${props=>props.theme.bgColor};
    transition: color 1.5s;
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
    #grid {
      display: grid;
      grid-gap: 8 px;
      grid-template-columns: 10px 1fr 10px;
      grid-template-rows: 5rem 100vh;
      background-color: ${props=>props.theme.bgColor};
      color: ${props=>props.theme.textColor};
    }
    #main{
      grid-row: 2/3;
      grid-column: 2/3;
      background-color: ${props=>props.theme.bgColor};
      color: ${props=>props.theme.textColor};
    }
    #drawer {
      position: fixed;
      top: 3.9rem;
      left: -50rem;
      &.drawer-is-open {
        left: 0;
      }
      transition: left 0.7s;
    }
  }
  @media (min-width: 577px) and (max-width: 768px) {
    html {
      font-size: 14px;
    }
    #grid {
      display: grid;
      grid-gap: 8 px;
      grid-template-columns: 15px 1fr 15px;
      grid-template-rows: 5rem 100vh;
      background-color: ${props=>props.theme.bgColor};
      color: ${props=>props.theme.textColor};
    }
    #main{
      grid-row: 2/3;
      grid-column: 2/3;
      background-color: ${props=>props.theme.bgColor};
      color: ${props=>props.theme.textColor};
    }
    #drawer {
      position: fixed;
      top: 3.9rem;
      left: -50rem;
      &.drawer-is-open {
        left: 0;
      }
      transition: left 0.7s;
    }
  }
  @media (min-width: 769px) and (max-width: 992px) {
    html {
      font-size: 16px;
    }
    #grid {
      display: grid;
      grid-gap: 8 px;
      grid-template-columns: 1fr 7fr 1fr;
      grid-template-rows: 5rem 100vh;
      background-color: ${props=>props.theme.bgColor};
      color: ${props=>props.theme.textColor};
    }
    #main{
      grid-row: 2/3;
      grid-column: 2/3;
      background-color: ${props=>props.theme.bgColor};
      color: ${props=>props.theme.textColor};
    }
    #drawer {
      position: fixed;
      top: 3.9rem;
      left: -50rem;
      &.drawer-is-open {
        left: 0;
      }
      transition: left 0.7s;
    }
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    html {
      font-size: 18px;
    }
    #grid {
      display: grid;
      grid-gap: 8 px;
      grid-template-columns: 1fr 5fr 1fr;
      grid-template-rows: 5rem 100vh;
      background-color: ${props=>props.theme.bgColor};
      color: ${props=>props.theme.textColor};
    }
    #main{
      grid-row: 2/3;
      grid-column: 2/3;
      background-color: ${props=>props.theme.bgColor};
      color: ${props=>props.theme.textColor};
    }
    #drawer {
      position: fixed;
      top: 3.9rem;
      left: -50rem;
      &.drawer-is-open {
        left: 0;
      }
      transition: left 0.7s;
    }
  }
  @media (min-width: 1201px) {
    html {
      font-size: 20px;
    }
    #grid {
      display: grid;
      grid-gap: 10 px;
      grid-template-columns: 1fr 4fr 1fr;
      grid-template-rows: 5rem 100vh;
      background-color: ${props=>props.theme.bgColor};
      color: ${props=>props.theme.textColor};
    }
    #main{
      grid-row: 2/3;
      grid-column: 2/3;
      background-color: ${props=>props.theme.bgColor};
      color: ${props=>props.theme.textColor};
    }
    #drawer {
      position: fixed;
      top: 3.9rem;
      left: -50rem;
      &.drawer-is-open {
        left: 0;
      }
      transition: left 0.7s;
    }
  }
`
export default GlobalStyle