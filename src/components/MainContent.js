import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router'
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
& h2 {
  color: rgb(62,166,255);
}
& p {
  text-indent: 1.5rem;
  margin: 0.4rem;
  padding: 0;
}
& p:first-child::first-letter{
  text-indent: 1px;
  /*font-family: "Times New Roman";*/
  font-size: 2.5rem;
  color: red;
  /*float: left;*/
  margin-top: 0rem;
  margin-right: 0.2rem;
  text-shadow: 1px 1px 2px ${props=>props.theme.textColor}, 0 0 0.3rem red;
  padding: 0;
  text-transform: capitalize;
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
                  <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/:user" component={User}/>
                    <Route component={NoMatch}/>
                  </Switch>
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