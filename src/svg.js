/*tslint:disabled*/
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled, { css, keyframes } from 'styled-components'

import Snap from 'snapsvg';
/**<circle cx="80" cy="80" r="50" /> 
 * viewBox="0 0 160 160"
*/
const Loader = () => {
  return (
    <svg viewBox="0 0 496 512" width="160" height="160">
      
      <path fill="#eee" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm200 248c0 22.5-3.9 44.2-10.8 64.4h-20.3c-4.3 0-8.4-1.7-11.4-4.8l-32-32.6c-4.5-4.6-4.5-12.1.1-16.7l12.5-12.5v-8.7c0-3-1.2-5.9-3.3-8l-9.4-9.4c-2.1-2.1-5-3.3-8-3.3h-16c-6.2 0-11.3-5.1-11.3-11.3 0-3 1.2-5.9 3.3-8l9.4-9.4c2.1-2.1 5-3.3 8-3.3h32c6.2 0 11.3-5.1 11.3-11.3v-9.4c0-6.2-5.1-11.3-11.3-11.3h-36.7c-8.8 0-16 7.2-16 16v4.5c0 6.9-4.4 13-10.9 15.2l-31.6 10.5c-3.3 1.1-5.5 4.1-5.5 7.6v2.2c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8s-3.6-8-8-8H247c-3 0-5.8 1.7-7.2 4.4l-9.4 18.7c-2.7 5.4-8.2 8.8-14.3 8.8H194c-8.8 0-16-7.2-16-16V199c0-4.2 1.7-8.3 4.7-11.3l20.1-20.1c4.6-4.6 7.2-10.9 7.2-17.5 0-3.4 2.2-6.5 5.5-7.6l40-13.3c1.7-.6 3.2-1.5 4.4-2.7l26.8-26.8c2.1-2.1 3.3-5 3.3-8 0-6.2-5.1-11.3-11.3-11.3H258l-16 16v8c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-20c0-2.5 1.2-4.9 3.2-6.4l28.9-21.7c1.9-.1 3.8-.3 5.7-.3C358.3 56 448 145.7 448 256zM130.1 149.1c0-3 1.2-5.9 3.3-8l25.4-25.4c2.1-2.1 5-3.3 8-3.3 6.2 0 11.3 5.1 11.3 11.3v16c0 3-1.2 5.9-3.3 8l-9.4 9.4c-2.1 2.1-5 3.3-8 3.3h-16c-6.2 0-11.3-5.1-11.3-11.3zm128 306.4v-7.1c0-8.8-7.2-16-16-16h-20.2c-10.8 0-26.7-5.3-35.4-11.8l-22.2-16.7c-11.5-8.6-18.2-22.1-18.2-36.4v-23.9c0-16 8.4-30.8 22.1-39l42.9-25.7c7.1-4.2 15.2-6.5 23.4-6.5h31.2c10.9 0 21.4 3.9 29.6 10.9l43.2 37.1h18.3c8.5 0 16.6 3.4 22.6 9.4l17.3 17.3c3.4 3.4 8.1 5.3 12.9 5.3H423c-32.4 58.9-93.8 99.5-164.9 103.1z"/>
      <g transform=" matrix(0.866, -0.5, 0.25, 0.433, 80, 80)">
        <path d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z" fill="#FFF">
          <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur="1s" repeatCount="indefinite" />
        </path>
      </g>
      <path d="M 50,0 A 50,50 0 0,0 -50,0Z" transform="matrix(0.866, -0.5, 0.5, 0.866, 80, 80)" />
    </svg>
  )
}

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
        <Loader />
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