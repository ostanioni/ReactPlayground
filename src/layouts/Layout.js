import React from 'react'
import { observer, inject } from "mobx-react"

import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styled/GlobalStyle'

import Nav from 'components/Nav'
import SideBar from 'components/SideBar'

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
            <h1>H!H!H!H!H!H!H!H!H</h1>
            <h2>H!H!H!H!H!H!H!H!H</h2>
            <h3>H!H!H!H!H!H!H!H!H</h3>
            <p>
              J,skljfdjlkfjlfdjldjglfj lkjfgjldkfjkg lkjlkdjfgj
            </p>
            <i></i>
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
