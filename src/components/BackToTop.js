import React from 'react'
import styled from 'styled-components'

import { observer } from "mobx-react";
import { observable, computed, autorun } from "mobx";

const BackToTopStyled = styled.span.attrs(props=>({
  onCick: props.onClick,
}))`
  background-color: ${props=>props.theme.bgColor};
  color: ${props=>props.theme.textColor};
  border: 2px solid ${props=>props.theme.textColor};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  position: fixed;
  cursor: pointer;
  bottom: 2.5rem;
  right: 2.5rem;
`

@observer class BackToTop extends React.Component {
  
  @observable scrlY =  window.pageYOffset ;
  //autorun( ('reaction') => { console.log("Age", scrollY) } ); 
  toTop = ()=>{
    window.scrollTo(0,0);
  }
  render() {
    return (
      <BackToTopStyled onClick={this.toTop}>
        ^
      </BackToTopStyled>
    )      
  }
}

export default BackToTop;

