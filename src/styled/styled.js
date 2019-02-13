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