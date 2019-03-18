import React from 'react'
import styled from 'styled-components'

import page from 'resources/en1'

const MainContentStyled = styled.div.attrs(props=>({
  onClick: props.OnClick,
}))`
display: block;
width: 100%;
height: auto;
background-color: ${props=>props.theme.bgColor};
color: ${props=>props.theme.textColor};
&>p::first-letter{
  font-family: "Times New Roman";
  position: relative;
  top: 40px; left: 40px;
  font-size: 4rem;
  color: red;
  float: left;
  margin: 0 0.5rem 0px 0px; /* Отступы вокруг буквы */
  text-shadow: 1px 1px 2px ${props=>props.theme.textColor}, 0 0 0.3rem red; /* Параметры тени */
  padding: 0;
  border: 2px solid red;
}
`
class MainContent extends React.Component {
  render(){
    return (
      <MainContentStyled>
        <p>
        {page}
        </p>
      </MainContentStyled>
    )
  }
}
export default MainContent