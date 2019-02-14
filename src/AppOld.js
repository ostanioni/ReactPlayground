/* eslint-disable */
/*tslint:disabled*/

import React from 'react';
import styled from 'styled-components';
import { isEqual   as _isEqual } from 'lodash';

import './css/App.css';

// import SearchPanel from './components/SearchPanel';
// import SearchItem from './components/SearchItem';
// import Error from './components/Error';
import ErrorBoundary from './components/ErrorBoundary';
import { observer } from "mobx-react";
import { observable } from "mobx";
import DevTools from 'mobx-react-devtools';
// 
import Prism from 'prismjs';
//Prism.highlightAll();

import BackToTop from './components/BackToTop';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

import Album from './pages/Album';
// import Blog from './pages/Blog';

const AppStyled = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: lavender;
`;
const HeaderStyled = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100px;
  margin: 0;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);   
  padding: 0px;
  background-color: lavenderblush;
  border: 1px solid black;
  box-sizing: border-box;
  z-index: 10;
`;
const MainStyled = styled.main`
  position: relative;
  top: 110px;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: lavender;
  box-sizing: border-box;
  z-index: 1;
`;

@observer class App extends React.Component {
  constructor(){
    super();
    
  }
  @observable secondsPassed = 0

  componentWillMount() {
      setInterval(() => {
          this.secondsPassed++
      }, 1000)
  }

  showMsg = ( Msg='hello' ) => {
    alert( Msg )
  }
  componentDidMount() {    
  }
  componentWillUnmount(){   
  }    
  render() {
    return (
      <>
      <ErrorBoundary>
      <AppStyled>
      <CssBaseline />
        <HeaderStyled className="flex-center" onClick={this.showMsg}>
         HEADER
        </HeaderStyled>
        <MainStyled className="flex-center">
          <h2>MAIN</h2>
            MAIN CONTENT
            <span>Seconds passed: { this.secondsPassed } </span>
            <pre><code className="language-css">{`p { color: red }`}</code></pre>
            <pre><code className="language-js  line-numbers" style={{fontSize: 22+'px'}}>{`var Prism = require('prismjs');
var loadLanguages = require('prismjs/components/');
loadLanguages(['haml']);
// The code snippet you want to highlight, as a string
var code = "= ['hi', 'there', 'reader!'].join \" \"";
// Returns a highlighted HTML string
var html = Prism.highlight(code, Prism.languages.haml, 'haml');`}</code></pre>
<pre><code className="language-clike">{`int main(){
printf("Hello World");
}`}</code></pre>
          <BackToTop>BACKTOTOP</BackToTop>
          <Button variant="contained" color="primary">
      Hello World
    </Button>
    <Album />
        </MainStyled>
      </AppStyled>
      </ErrorBoundary>
      <DevTools />
      </>
    );
  }
};
export default App;
