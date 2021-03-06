import React  from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router'
import { observer, inject } from "mobx-react"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import About   from 'pages/About'
import Home    from 'pages/Home'
import NoMatch from 'pages/NoMatch'
import AlgInC  from 'pages/AlgInC'
import 'css/abc.css'

const uuidv4 = require('uuid/v4')

const MainContentStyled = styled.div.attrs(props=>({
  onClick: props.OnClick,
  id: props.id,
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
const contentTransitionKey = "contentTransition"
@inject('settingsStore')
@observer
class Content extends React.Component {
  render(){
    return (
      <MainContentStyled id={this.props.id}>
        <TransitionGroup>
                <CSSTransition
                  key={contentTransitionKey}
                  classNames="fade"
                  timeout={1300}
                >
        <Switch> 
          
        <Route exact path="/home" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route path="/alginc/c/:part/:chapter/:paragraph" component={AlgInC}/>
        <Route component={AlgInC}/>
        {/*
          <Route path="/books/c/:part/:chapter/:paragraph" component={AlgInC}/>
          <Route component={NoMatch}/>
        */}
          
        </Switch>
        </CSSTransition>
       </TransitionGroup>
        {/*
          Introduction[this.props.settingsStore.lang].map( (el,idx)=>{
              return (
                <div key={el.label}>
                <h2>{el.label}</h2>
                <div dangerouslySetInnerHTML={{ __html: el.text }}></div>
                </div>
              )
            
              
          )
        }*/}
        
      </MainContentStyled>
    )
  }
}
export default Content