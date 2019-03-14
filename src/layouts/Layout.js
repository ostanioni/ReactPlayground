import React from 'react'
import { observer, inject } from "mobx-react"

import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styled/GlobalStyle'

import Nav from 'components/Nav'
import SideBar from 'components/SideBar'

import 'css/App.scss'

import 'css/normalize.css'


// import Prism from 'prismjs';

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
  background-color: ${props=>props.theme.bgColor}
  position: relative;
  top: 3.9rem;
  box-sizing: border-box;
  margin: 0;
  transition: color 0.5s;
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
      
      </AsideStyled>
      <FooterStyled>
      
      </FooterStyled>
    </>
    </ThemeProvider>
  )}
}
export default LayoutStyled
