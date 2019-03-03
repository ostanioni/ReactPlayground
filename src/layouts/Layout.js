import React from 'react'
import { observer, inject } from "mobx-react"
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import Nav from 'components/Nav'

// import {  } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Roboto', sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    background-color: ${props=>props.theme.bgColor};
    color: ${props=>props.theme.textColor}
  }
  h1 {
    font-size: 1.5rem;
  }
  h2 {
    font-size: 1.3rem;
  }
  h3 {
    font-size: 1.2rem;
  }
  
  @media (max-width: 576px) {
    html {
      font-size: 13px;
    }
  }
  @media (min-width: 577px) and (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }
  @media (min-width: 769px) and (max-width: 992px) {
    html {
      font-size: 16px;
    }
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    html {
      font-size: 18px;
    }
  }
  @media (min-width: 1201px) {
    html {
      font-size: 20px;
    }
  }
`

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
