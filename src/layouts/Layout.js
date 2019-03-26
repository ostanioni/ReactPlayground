/*tslint:disabled*/
import React from 'react'
import { observer, inject } from "mobx-react"

import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styled/GlobalStyle'

import Header from 'components/Header'
import Nav from 'components/Nav'
import Main from 'components/Main'
import Drawer from 'components/Drawer'
import Content from 'components/Content'
import BackToTop from 'components/BackToTop'

import 'css/App.scss'

import 'css/normalize.css'

const GridStyled = styled.div.attrs(props=>({
  id:"grid",
}))`
  background-color: ${props=>props.theme.bgColor};
  color: ${props=>props.theme.textColor};
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
            <Main id="main">
              <Content id="content" />        
            </Main>
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
