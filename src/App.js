import React from 'react';
import {observer} from "mobx-react";
import {observable} from "mobx";
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
// import styled, { ThemeProvider, createGlobalStyle, css } from 'styled-components';
import AppBar from 'Components/AppBar';
import Button from 'Components/Button';


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    background-color: black;
  }
`;
/*
const complexMixin = css`
  background-color: ${ props => (props.light ? 'black' : 'white' ) };
             color: ${ props => (props.whiteColor ? 'white' : 'black')};
`;
// This is an example of a nested interpolation
const StyledComp = styled.div`
  ${props => (props.complex ? complexMixin : 'color: blue;')};
`;
*/

const Container = styled.div`
  position: relative;
  top: 150px;
  font-size: 22px ;
  background-color: ${ props=>props.theme.bg };
  color: ${ props=>props.theme.text };
`;

const materialDark = {
  "bg": "#303030", // rgb(48,48,48)
  "wg": "#212121", // rgb(33,33,33)
  "link": "#e10050", // rgb(255,0,80)
  "text": "#fff", // rgb(255,255,255)
  "subText": "#bebebe", // rgb(190,190,190)
  "activeText": "#2188c6" // rgb(33,139,198)
};
const materialLight = {
  "bg": "#fff", // rgb(48,48,48)
  "wg": "#212121", // rgb(33,33,33)
  "link": "#e10050", // rgb(255,0,80)
  "text": "#000", // rgb(255,255,255)
  "subText": "#bebebe", // rgb(190,190,190)
  "activeText": "#2188c6" // rgb(33,139,198)
};

@observer
class App extends React.Component {
  @observable theme = materialDark;
  dark = true;
  changeTheme = () => {
    this.dark = !this.dark;
    if ( this.dark ) {
      this.theme = materialLight;
      console.log( 'dark' )
    } else {
      this.theme = materialDark;
      console.log( 'light' )
    }
  }
  render() {
    return (
      
      <ThemeProvider theme={this.theme}>
      <>
      <GlobalStyle />
      <AppBar />
        <Container>
          <button onClick={this.changeTheme}>PRESS</button>
          HELLO  <span>&#xf114; &#xf039; &#x2605; &#x2605; &#x2605; &#x2606; &#x2606;</span>
          <img src="img/theme-light-dark.svg" alt="" width="100px" />
          <Button />
        </Container>
        <img src="img/theme-light-dark.svg" alt="" />
        </>
      </ThemeProvider>
    )
  }
};
export default App;