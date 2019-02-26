import React from 'react'

import {observer, inject} from "mobx-react"
import styled, { createGlobalStyle } from 'styled-components'

import Nav from 'components/Nav'


const GlobalStyle = createGlobalStyle`
/*
  html {
    font-size: 62.5%;
  }
  */
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: small;
  }
  h1 {
    font-size: 150%;
  }
  h2 {
    font-size: 130%;
  }
  h3 {
    font-size: 120%;
  }
  ul li {
    font-size: 100%;
  }
  .note {
    font-size: 90%;
  }

  @media (max-width: 576px) {
    html {
      font-size: 12px;
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
  box-shadow: 0 0 1.5rem rgba(0,0,0,0.5);
  box-sizing: border-box;
  z-index: 1000;
  background-color: ${props=>props.bgColor};
  color: ${props=>props.textColor};
`
const MainStyled = styled.main`
  position: relative;
  top: 80px;
  box-sizing: border-box;
`
const AsideStyled = styled.aside``
const FooterStyled = styled.footer``

@inject('settingsStore', 'langStore')
@observer
class LayoutStyled extends React.Component {
  render () { return (
    <>
    <GlobalStyle />
      <HeaderStyled>
          <Nav />
      </HeaderStyled>
          
      <MainStyled>
            
      </MainStyled>
      <AsideStyled>
              
      </AsideStyled>
      <FooterStyled>
     
      </FooterStyled>
    </>
  )}
}
export default LayoutStyled
