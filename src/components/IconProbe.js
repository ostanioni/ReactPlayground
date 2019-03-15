import React from 'react'
import styled from 'styled-components'
/*
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z"/>
</svg>
*/
/*
let IconProbe = styled.svg.attrs(props=>({
  src: props.src,
  alt: props.alt,
  onClick: props.onClick,
}))`
width: ${props=>props.width};
margin: 0.7rem;
cursor: pointer;
&>svg>path {
  fill: ${props=>props.theme.textColor};
  transition: fill 0.5s easy-in-out;
}
`
*/
const IconStyled = styled.svg.attrs(props=>({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox:"0 0 512 512",
  width: props.width,
  alt: props.alt,
}))`
  &>path {
    fill: ${props=>props.theme.textColor};
  }
`
class Icon extends React.Component {
  render(){
    return (
        <IconStyled width={this.props.width} alt={this.props.alt}>
          <path d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z"/>
        </IconStyled>
    )
  }
}

export default Icon


