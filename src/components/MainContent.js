import React from 'react'
import styled from 'styled-components'

const MainContentStyled = styled.div.attrs(props=>({
  onClick: props.OnClick,
}))`
display: block;
width: 100%;
height: 100%;
background-color: ${props=>props.theme.bgColor};
color: ${props=>props.theme.textColor};
`
class MainContent extends React.Component {
  render(){
    return (
      <MainContentStyled>
        BJKHGJHKGKHJG
      </MainContentStyled>
    )
  }
}
export default MainContent