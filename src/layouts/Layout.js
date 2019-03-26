/*tslint:disabled*/
import React from 'react'
import { observer, inject } from "mobx-react"

import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styled/GlobalStyle'

import Header from 'components/Header'
import Nav from 'components/Nav'
import Drawer from 'components/Drawer'
import MainContent from 'components/MainContent'
import BackToTop from 'components/BackToTop'

import 'css/App.scss'

import 'css/normalize.css'

const GridStyled = styled.div.attrs(props=>({
  id:"grid",
}))`
  background-color: ${props=>props.theme.bgColor};
  color: ${props=>props.theme.textColor};
`

const MainStyled = styled.main.attrs(props=>({
  id: 'main',
}))`
  background-color: ${props=>props.theme.bgColor};
  color: ${props=>props.theme.textColor};
  /*position: relative;
  top: 3.9rem;*/
  box-sizing: border-box;
  margin: 0;
  transition: color 0.5s;
  /*border: 1px solid red;*/
`
const AsideStyled = styled.aside`
  & #icon:hover {
    fill: #0f0;
    cursor: pointer;
  }
`
const FooterStyled = styled.footer.attrs(props=>({
  id: 'footer',
}))`
  background-color: ${props=>props.theme.bgColor};
  color: ${props=>props.theme.textColor};
`

const CodeStyled = styled.div`
  display: inline-block;
`

@inject('themesStore', 'settingsStore', 'langStore')
@observer
class LayoutStyled extends React.Component {
  
  render () { 
    const { themesStore, settingsStore } = this.props;
    return (
      <ThemeProvider theme={themesStore[settingsStore.theme]}>
        <GridStyled>
          <GlobalStyle />
            <Header id="header">
              <Nav />
            </Header>
            <Drawer />
            <MainStyled>
              <MainContent />        
            </MainStyled>
            <AsideStyled>
            
            </AsideStyled>
            <FooterStyled>
              FOOTER
            </FooterStyled>
            <BackToTop />
        </GridStyled>
      </ThemeProvider>
  )}
}
export default LayoutStyled
