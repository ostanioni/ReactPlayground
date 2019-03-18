import React from 'react'
import styled from 'styled-components'

// import { observer } from "mobx-react";
// import { observable, computed, autorun } from "mobx";
import Icon from 'components/IconProbe'

const BackToTopStyled = styled.span.attrs(props=>({
  onCick: props.onClick,
  id: props.id,
}))`
  position: fixed;
  cursor: pointer;
  bottom: 2.5rem;
  right: 2.5rem;
  &.BackToTop-is-hide {
    right: -2.5rem;
  }
  transition: right 0.5s;
`

class BackToTop extends React.Component {
  
 // @observable scrlY =  window.pageYOffset ;
  //autorun( ('reaction') => { console.log("Age", scrollY) } ); 
  toTop = ()=>{
    window.scrollTo(0,0);
  }
  scrollHandler = ()=>{
    const toTop  = document.getElementById('BackToTop')
    window.pageYOffset > 50 ? toTop.classList.remove('BackToTop-is-hide') : toTop.classList.add('BackToTop-is-hide')
  }
  componentDidMount(){
    window.addEventListener('scroll', this.scrollHandler)
  }
  render() {
    return (
      <BackToTopStyled onClick={this.toTop} id="BackToTop" className="BackToTop-is-hide">
        <Icon width="2.5rem" alt="UP" />
      </BackToTopStyled>
    )      
  }
}
export default BackToTop;

