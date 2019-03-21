/*tslint:disabled*/
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled, { css, keyframes } from 'styled-components'

// import SVG from '@svgdotjs/svg.js/src/svg.js'


const pulse = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const animation = props => css`
    ${pulse} ${props.animationLength} infinite alternate;
`
const SvgStyled = styled.svg.attrs(props=>({
  version:"1.1", 
  xmlns:"http://www.w3.org/2000/svg",
  viewBox: props.viewBox,
}))`
border: 2px solid cyan;
 animation: ${animation};
 &>text.red { font: 2.5rem sans-serif; fill: green;}
`

const StyledWrapper = styled.div.attrs(props=>({
id: props.id,
}))`
width: 100%;
height: 100vh;
background-color: white;
border: 2px solid red;
`

export default class Svg extends Component {
  /*
  componentDidMount(){
    const draw = SVG().addTo('#drawing').size('100%', '100%')
    const rect = draw.rect('100%', '100%').attr({ fill: '#ff6' }) //.move(200, 200)
    const circle1 = draw.circle(150).fill('#306').move(100, 200)
    const circle2 = draw.circle(100).fill('#416').move(120, 20)
    const circle3 = draw.circle(100).fill('#526').move(220, 20)
    const circle4 = draw.circle(100).fill('#636').move(320, 20)
    var line = draw.line(0, 100, 100, 0).move(720, 200).stroke({ color: '#f06', width: 10, linecap: 'round' })
    console.log(draw)
  }
  */
  render() {
    return (
      <>
      <StyledWrapper id="drawing">
        <SvgStyled viewBox="0 0 1000 1000" animationLength="3000" >
          <circle cx="60" cy="60" r="50" stroke="blue" stroke-width="2" fill="white" />
          <text x="48" y="75" className="red">0</text>
        </SvgStyled>
      </StyledWrapper>   
      </>
    )
  }
}
ReactDOM.render( <Svg/>, document.getElementById('edf720cb-b61fe') )

/*
<div class="wrapper">
<svg viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg">
<style>
    .white { font: 2.5rem sans-serif; fill: green;}
      // Обратите внимание, что цвет текста задается с помощью        
     // fill свойства, а свойство color используется только для HTML
    .Rrrrr { font: italic 40px serif; fill: red; }
  </style>
  <circle cx="60" cy="60" r="50" stroke="blue" stroke-width="2" fill="white">
    
  </circle>
  <text x="48" y="75" class="white">0</text>
</svg>
</div>
*/