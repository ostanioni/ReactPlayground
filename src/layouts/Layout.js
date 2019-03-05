import React from 'react'
import { observer, inject } from "mobx-react"

import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styled/GlobalStyle'

import Nav from 'components/Nav'
import SideBar from 'components/SideBar'

import Prism from 'prismjs';

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
const AsideStyled = styled.aside``
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
        <CodeStyled>
        <pre><code className="language-css">{`p { color: red }`}</code></pre>
            <pre><code className="language-js  line-numbers" >{`var Prism = require('prismjs');
var loadLanguages = require('prismjs/components/');
loadLanguages(['haml']);
// The code snippet you want to highlight, as a string
var code = "= ['hi', 'there', 'reader!'].join \" \"";
// Returns a highlighted HTML string
var html = Prism.highlight(code, Prism.languages.haml, 'haml');`}</code></pre>
<pre><code className="language-clike">{`int main(){
printf("Hello World");
}`}</code></pre>
</CodeStyled>
      </MainStyled>
      <AsideStyled>
              
      </AsideStyled>
      <FooterStyled>
     
      </FooterStyled>
    </>
    </ThemeProvider>
  )}
}
export default LayoutStyled
