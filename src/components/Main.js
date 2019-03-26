import React, { Component } from 'react'
import styled from 'styled-components'

const MainStyled = styled.main.attrs(props=>({
  id: props.id,
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
export default class Main extends Component {
  render() {
    return (
      <MainStyled id={this.props.id}>
        { this.props.children }
      </MainStyled>
    )
  }
}
