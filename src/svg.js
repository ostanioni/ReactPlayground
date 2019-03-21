/*tslint:disabled*/
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled, { css, keyframes } from 'styled-components'
// import console = require('console');

const pulse = keyframes`
  0% {
    opacity: 0;
  }
  10%{
    
      /* transform: translateX(300px);*/
      stroke: "red";
  }
  20%{
    
  }
  30%{

  }
  40%{

  }
  50%{

  }
  60%{

  }
  70%{

  }
  80%{

  }
  90%{
    stroke: "cyan";
  }
  100% {
    opacity: 1;
  }
`
const stroke = keyframes`
  from {
    stroke: green;
  }
  to {
    stroke: orange;
  }
`
const animation = props => css`
    ${pulse} ${props.animation_length} infinite alternate;
`
const animation_stroke = props => css`
    ${stroke} ${props.animation_length} infinite alternate;
`
const SvgStyled = styled.svg.attrs(props=>({
  version:"1.1", 
  xmlns:"http://www.w3.org/2000/svg",
  viewBox: props.viewBox,
}))`
border: 2px solid cyan;
animation: ${animation};
&>g.red { 
    font: 1.2rem sans-serif; 
    /* fill: green;*/
    /* stroke: "grey"; */
    /* stroke-width: 1;*/
  }
&>g {
  animation: ${animation_stroke};
}
`
const StyledWrapper = styled.div.attrs(props=>({
id: props.id,
}))`
width: 100%;
height: 100vh;
background-color: white;
border: 2px solid red;
`
const circle = [0,1,2,3,4,5,6,7,8,9]

export default class Svg extends Component {
  componentDidMount(){
   console.log( document.querySelector('#row0').childNodes[3] )
  }
  render() {
    return (
      <StyledWrapper id="drawing">
        <SvgStyled viewBox="0 0 510 500" animation_length="3s" >
          {
            circle.map( (idxRow)=> (
              <g className="red" key={idxRow} id={`row${idxRow}`}>
                {
                circle.map( (idxCollumn) => (
                  <g key={idxCollumn} animation_length="3s">
                    <circle cx={30+50*idxCollumn} cy={40+40*idxRow} r="18"  fill="white"></circle>
                    <text x={25+50*idxCollumn} y={47+40*idxRow} className="red">{idxCollumn}</text>
                  </g>
                ) )
                }
              </g>
            ))    
          }        
        </SvgStyled>
      </StyledWrapper>   
    )
  }
}
ReactDOM.render( <Svg/>, document.getElementById('edf720cb-b61fe') )

/*
stroke="blue" strokeWidth="2"
          <g stroke="green" fill="white" strokeWidth="5">
            <circle cx="25" cy="25" r="15"/>
            <circle cx="40" cy="25" r="15"/>
            <circle cx="55" cy="25" r="15"/>
            <circle cx="70" cy="25" r="15"/>
          </g>
        
<defs>
            <radialGradient id="exampleGradient">
              <stop offset="10%" stop-color="gold"/>
              <stop offset="95%" stop-color="green"/>
            </radialGradient>
          </defs>
          <circle fill="url(#exampleGradient)" cx="160" cy="160" r="50"/>
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