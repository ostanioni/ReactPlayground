import React from 'react'
import styled from 'styled-components'
import { observer, inject } from "mobx-react"

import Introduction from 'resources/en1'

const MainContentStyled = styled.div.attrs(props=>({
  onClick: props.OnClick,
}))`
display: block;
width: 100%;
height: auto;
background-color: ${props=>props.theme.bgColor};
color: ${props=>props.theme.textColor};
& p::first-letter{
  font-family: "Times New Roman";
  font-size: 3rem;
  color: red;
  float: left;
  margin-top: -0.4rem;
  margin-right: 0.2rem;
  text-shadow: 1px 1px 2px ${props=>props.theme.textColor}, 0 0 0.3rem red;
  padding: 0;
  /*border: 2px solid red;*/
  line-height: 0.8;
}
`

@inject('settingsStore')
@observer
class MainContent extends React.Component {
  render(){
    return (
      <MainContentStyled>
        {
          Introduction[this.props.settingsStore.lang].map( (el,idx)=>{
              return (
                <div>
                <h2>{el.label}</h2>
                <div dangerouslySetInnerHTML={{ __html: el.text }}></div>
                </div>
              )
            
            }
          )
        }
      </MainContentStyled>
    )
  }
}
export default MainContent