import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from "mobx-react"
import styled from 'styled-components'

import Content from 'resources/content'

let SideBarStyled = styled.nav.attrs(props=>{

})`
width: 100%;
height: 100%;
color: ${props=>props.theme.textColor};
background-color: ${props=>props.theme.bgColor};
& ul {list-style: none;}
`

@inject('themesStore', 'settingsStore', 'langStore')
@observer
class SideBar extends Component {
  currentChapter = 0
  incChapter = ()=>{
    this.currentChapter++
  }
  content = (arr)=>{
    let items = arr.map( (part,index)=> ( 
        <li key={part.part}>
          {`${index+1} ${part.part}`}
            <ul>
              { part.chapters.map( (chapter,indx)=> 
                <li key={chapter}>
                  {`${++this.currentChapter}.${chapter.caption}`}
                  <ul>
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
