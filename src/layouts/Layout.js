import React from 'react'
import { observer, inject } from "mobx-react"

import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styled/GlobalStyle'

import Nav from 'components/Nav'
import SideBar from 'components/SideBar'

import 'css/App.scss'

import 'css/normalize.css'


//import Prism from 'prismjs';

const HeaderStyled = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 4rem;
  width: 100%;
  margin: 0;
  padding: 0px;
  border: none;
  box-shadow: ${props=>props.theme.headerShadow};
  box-sizing: border-box;
  z-index: 1000;
  background-color: ${props=>props.theme.bgHeader};
  color: ${props=>props.textColor};
`
const MainStyled = styled.main`
  position: relative;
  top: 4.5rem;
  box-sizing: border-box;
  margin: 0.5rem;
`
const AsideStyled = styled.aside`
  & #icon:hover {
    fill: #0f0;
    cursor: pointer;
  }
`
const FooterStyled = styled.footer``

const CodeStyled = styled.div`
  display: inline-block;
`

@inject('themesStore', 'settingsStore', 'langStore')
@observer
class LayoutStyled extends React.Component {
  render () { return (
    <ThemeProvider theme={this.props.themesStore[this.props.settingsStore.theme]}>
    <>
    <GlobalStyle />
      <HeaderStyled>
        <Nav />
      </HeaderStyled>
      <MainStyled>
        <SideBar />
        
      </MainStyled>
      <AsideStyled>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path id="icon" d="M0 0h24v24H0z" fill="#f00"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
      </svg>
      </AsideStyled>
      <FooterStyled>
      <pre><code className="language-js  line-numbers">{`var Prism = require('prismjs');
var loadLanguages = require('prismjs/components/');
loadLanguages(['haml']);
// The code snippet you want to highlight, as a string
var code = "= ['hi', 'there', 'reader!'].join \" \"";
// Returns a highlighted HTML string
var html = Prism.highlight(code, Prism.languages.haml, 'haml');`}</code></pre>
<pre><code className="language-clike">{`int main(){
printf("Hello World");
}`}</code></pre>
      </FooterStyled>
    </>
    </ThemeProvider>
  )}
}
export default LayoutStyled
