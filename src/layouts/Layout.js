/*tslint:disabled*/
import React from 'react'
import { observer, inject } from "mobx-react"

import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styled/GlobalStyle'

import Header     from 'components/Header'
import Nav        from 'components/Nav'
import Main       from 'components/Main'
import Drawer     from 'components/Drawer'
import Content    from 'components/Content'
import Aside      from 'components/Aside'
import Footer     from 'components/Footer'
import BackToTop  from 'components/BackToTop'

import 'css/App.scss'

import 'css/normalize.css'

const GridStyled = styled.div.attrs(props=>({
  id: props.id,
}))`
  background-color: ${props=>props.theme.bgColor};
  color: ${props=>props.theme.textColor};
`


@inject('themesStore', 'settingsStore', 'langStore')
@observer
class LayoutStyled extends React.Component {
  
  render () { 
    const { themesStore, settingsStore } = this.props;
    return (
      <ThemeProvider theme={themesStore[settingsStore.theme]}>
        <GridStyled id="grid" >
        <GlobalStyle />     
          <Header id="header">
            <Nav />
          </Header>
          <Drawer />
          <Main id="main">
            <Content id="content" />        
          </Main>
          <Aside id="aside">
            ASIDE 
          </Aside>
          <Footer id="footer">
            FOOTER
          </Footer>
          <BackToTop />
        </GridStyled>
      </ThemeProvider>
  )}
}
export default LayoutStyled
