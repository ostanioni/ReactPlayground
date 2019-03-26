/*tslint:disabled*/
import React from 'react'
import { observer, inject } from "mobx-react"

import styled, { ThemeProvider } from 'styled-components'
// import GlobalStyle from 'styled/GlobalStyle'

// import Nav from 'components/Nav'

const HeaderStyled = styled.header.attrs(props=>({
  id: props.id,
}))`
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
  &.header-is-hide {
    transform: translateY(-5.5rem);
  }
  transition: all 0.5s;
`
class Header extends React.Component {

  prevOffset = 0
  hideElements = () => {
    const header = document.getElementById('header')
    if (window.pageYOffset > 50) {
      if ( window.pageYOffset > this.prevOffset ){
        header.classList.add('header-is-hide')
      } else {
        header.classList.remove('header-is-hide')
      }
      this.prevOffset = window.pageYOffset
      return ;
    }
    if (window.pageYOffset < 50) {
      header.classList.remove('header-is-hide')
    }
  }
  init = ()=>{
    window.addEventListener('scroll', this.hideElements)
  }
  componentDidMount(){
    document.addEventListener('DOMContentLoaded', this.init );
  }
  render(){
    return (
      <HeaderStyled id={this.props.id}>
        {this.props.children}
      </HeaderStyled>
    )
  }
}
export default Header