import styled, { createGlobalStyle }, { css } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
  }
`;
const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    font-family: ${props => props.theme.fontFamily};
  }
`
const bootstrap = {

};
const materialDark = {
  "bg": "#303030", // rgb(48,48,48)
  "wg": "#212121", // rgb(33,33,33)
  "link": "#e10050", // rgb(255,0,80)
  "text": "#fff", // rgb(255,255,255)
  "subText": "#bebebe", // rgb(190,190,190)
  "activeText": "#2188c6" // rgb(33,139,198)
};
const MainLayoutStyled = styled.div`
  font: 16px 'Roboto', sans-serif;
`;
const sizes = {
  xl: 1200, // >=1200
  lg: 992, // >=992
  md: 768, // >=768
  sm: 576, // >=576
  xs: 576, // < 576
};

// later in your app
<ThemeProvider theme={{ fontFamily: 'Helvetica Neue' }}>
  <>
    <Navigation /> //{example of other top-level stuff }
    <GlobalStyle whiteColor />
  </>
</ThemeProvider>

// later in your app
/*
< >
  <GlobalStyle whiteColor />
  <Navigation /> //{ example of other top-level stuff }
< />
*/
const dark = {
  pimary: "black",
  secondary:
};
.ow-break-word {
  overflow-wrap: break-word;
  word-wrap: normal | break-word;
}

const Sky = styled.section`
  ${props => props.dusk && 'background-color: dusk' }
  ${props => props.day && 'background-color: white' }
  ${props => props.night && 'background-color: black' }
`;
