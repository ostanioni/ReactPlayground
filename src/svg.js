/*tslint:disabled*/
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled, { css, keyframes } from 'styled-components'

import Snap from 'snapsvg';

const SvgStyled = styled.svg.attrs(props=>({
  id: props.id,
  viewBox: props.viewBox,
}))`
border: 2px solid cyan;
&.red {
  // fill: ${props=>props.theme.bgColor};
  // stroke: ${props=>props.theme.textColor};
  fill: "#0f0";
  stroke: "#000";
}
`

const circle = [0,1,2,3,4,5,6,7,8,9]

export default class Svg extends Component {
  state = {
    s: null,
  }
  componentDidMount(){

    const s = Snap("#svg")
    
    for(let i=0; i<10; i++)
      for(let j=0; j<10; j++){

        const Circle = s.circle( 30 + 50*i, 35 + 100*j, 18)
        .attr({
                //fill: "#bada55",
               // stroke: "#000",
                strokeWidth: 3
              })
    
        const Text = s.text( 23 + 50*i, 43 + 100*j, `${i}`)
        .attr({
                //stroke:"#f00",
                //fill: "#f00",
                font: "1.5rem sans-serif"
              })
        var Group = s.group(Circle, Text)
        .attr({
          // fill: "#00f",
          // stroke: "#000"
        }).addClass('red');
        // console.log(Group)
        Group.animate( {x: i*15, y: j*15}, i*j*150+500)
        // Group.animate( { fill: "#00f", stroke: "#000"}, i*j*150+500)

      }
      
      //fill:`rgb(${i*22},${j*22},${i})`},
    //var arr = circle.map( (idx)=>{
      //return s.text(idx*10, 50, "Snap");
    //} )
    // var t1 = s.text(50, 50, "Snap");
    // var t2 = s.text(50, 50, ["S","n","a","p"]);
    // Text path usage
    // t1.attr({textpath: "M10,10L100,100"});
    // or
    // var pth = s.path("M10,10L100,100");
    // t1.attr({textpath: pth});
    // var discs = s.group(Circle, s.circle(200, 150, 70)); viewBox={"0 0 500 500"}

  }
  render() {
    return (
      <SvgStyled id="svg" viewBox="0 0 510 970">
        
      </SvgStyled>
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