import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { observer, inject } from "mobx-react"
import styled from 'styled-components'

import Content from 'resources/content'

let SideBarStyled = styled.nav.attrs(props=>{

})`
display: inline-block;
position: relative;
top: -1.1rem;
left: -0.5rem;
width: 25rem;
height: 100vh;
margin: 0;
padding: 0;
overflow-y: scroll;
/*
border: 1px solid ${props=>props.theme.textColor};
*/
color: ${props=>props.theme.textColor};
background-color: ${props=>props.theme.bgSideBar};
font-family: Monospace;

& ul {
  list-style: none;
  cursor: pointer;
  position: relative;
  left: -1rem;
  &.visible {
    display: none;
  }
}

& h2,h3 {
  margin:0.5rem;
  padding:0;
}
& h2 {
  color: ${props=>props.theme.link};
  &: hover {
    color: ${props=>props.theme.textColor}
  }
}
& h3 {
  color: rgb(62,166,255);
  &: hover {
    color: ${props=>props.theme.bsLink}
  }
}
ul>li>ul>li>ul>li:hover{
  text-decoration: underline;
}
  @media (max-width: 576px) {
    html {
      font-size: 13px;
    }
    & ul {
      position: relative;
      left: -2rem;
    }
  }
  @media (min-width: 577px) and (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }
  @media (min-width: 769px) and (max-width: 992px) {
    html {
      font-size: 16px;
    }
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    html {
      font-size: 18px;
    }
  }
  @media (min-width: 1201px) {
    html {
      font-size: 20px;
    }
  }
`

@inject('themesStore', 'settingsStore', 'langStore')
@observer
class SideBar extends Component {
  part = ''
  chapter = ''
  currentChapter = 0
  showAlert = () => {
    alert('Hello')
  }
  incChapter = ()=>{
    this.currentChapter++
  }
  showList = (e)=>{
    console.log(e.target.nextSibling)
    console.log(e.target.nextSibling.classList.toggle('visible'))
  }
  content = (arr)=>{
    let items = arr.map( (part,index)=> ( 
        <li key={part.part}>
          <h2 onClick={this.showList}>{`${this.part} ${index+1}. ${part.part}`}</h2>
            <ul className='visible'>
              { part.chapters.map( (chapter,indx)=> 
                <li key={chapter.caption}>
                  <h3 onClick={this.showList}>{`${this.chapter} ${++this.currentChapter}. ${chapter.caption}`}</h3>
                  <ul className='visible'>
                    { chapter.paragraphs.map( (paragraph,idx) => (
                        <li key={paragraph}>
                          {`${this.currentChapter}.${idx+1} ${paragraph}`}
                        </li>
                      ))
                    }
                  </ul>
                </li>
              )}
            </ul>
        </li> 
      ) 
    )
    return items
  }
  render() {
    this.currentChapter = 0
    this.part = this.props.settingsStore.lang === 'en' ? 'Part': 'Часть'
    this.chapter = this.props.settingsStore.lang === 'en' ? 'Chapter': 'Глава'
    return (
      <SideBarStyled>
        <ul>
          {this.content(Content[this.props.settingsStore.lang])}
        </ul>
      </SideBarStyled>
    )
  }
}

export default SideBar
