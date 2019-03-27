/*tslint:disabled*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { observer, inject } from "mobx-react"
import styled from 'styled-components'

import Content from 'resources/content'

let DrawerStyled = styled.nav.attrs(props=>({
  id: props.id,
}))`
display: inline-block;
position: relative;
height: auto;
margin: 0;
padding: 0;
overflow: scroll;
border: 1px solid ${props=>props.theme.textColor};
color: ${props=>props.theme.textColor};
background-color: ${props=>props.theme.bgSideBar};
font-family: Monospace;
transition: all 0.5s;
z-index: 1007;

& ul {
  list-style: none;
  cursor: pointer;
  position: relative;
  left: -1rem;
  .hide {
    display: none;
  }  
}
& h2,h3 {
  margin:0.5rem;
  padding:0;
}
& h2 {
  color: ${props=>props.theme.link};
  &:hover {
    color: ${props=>props.theme.textColor}
  }
  transition: color 0.4s;
}
& h3 {
  color: rgb(62,166,255);
  &:hover {
    color: ${props=>props.theme.bsLink}
  }
  transition: color 0.5s;
}
ul>li>ul>li>ul>li:hover{
  text-decoration: underline;
}
`

const DivStyled = styled.div.attrs(props=>({
 id: props.id,
 onClick: props.onClick,
}))`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
z-index: 1005;
background-color: rgba(0,0,0,0.7);
&.wrapper-is-hide {
  left: 110vw;
}
transition: all 0.7;
`
const DivBack = styled.div.attrs(props=>({

}))`
position: fixed;
height: 4rem;
background-color: ${props=>props.theme.bgColor};
color: ${props=>props.theme.textColor};
cursor: pointer;
border: 1px solid ${props=>props.theme.textColor};
`

@inject('themesStore', 'settingsStore', 'langStore')
@observer
class Drawer extends Component {
  part = ''
  chapter = ''
  currentChapter = 0
  
  incChapter = ()=>{
    this.currentChapter++
  }
  handleClick = (e)=>{
    let node = e.target.nextSibling
    console.log('NODE = ', node)
    node.classList.contains('hide')? showList(node): hideList(node)

    function showList(node){
      node.classList.remove('hide')
      node.classList.add('animated','fadeIn','fast')
      node.addEventListener('animationend', handleAnimationEnd)
      function handleAnimationEnd(e){
        e.target.classList.remove('animated','fadeIn','fast')
        e.target.removeEventListener('animationend', handleAnimationEnd)
      }
      console.log('showList')
    }

    function hideList(node){
      node.classList.add('animated','fadeOut','faster')
      node.addEventListener('animationend', handleAnimationEnd)
      function handleAnimationEnd(e){
        e.target.classList.remove('animated','fadeOut','faster')
        e.target.classList.add('hide')
        e.target.removeEventListener('animationend', handleAnimationEnd)
        console.log('hideList')
        console.log('E_TARGET', e.target)
      }  
      console.log('hideList')
    }
  }
  content = (arr)=>{
    let items = arr.map( (part,index)=> ( 
        <li key={part.part}>
          <h2 onClick={this.handleClick}>{`${this.part} ${index+1}. ${part.part}`}</h2>
            <ul className='hide'>
              { part.chapters.map( (chapter,indx)=> 
                <li key={chapter.caption}>
                  <h3 onClick={this.handleClick}>{`${this.chapter} ${++this.currentChapter}. ${chapter.caption}`}</h3>
                  
                  <ul className='hide'>
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
    const { settingsStore } = this.props
    this.currentChapter = 0
    this.part    = settingsStore.lang === 'en' ? 'Part': 'Часть'
    this.chapter = settingsStore.lang === 'en' ? 'Chapter': 'Глава'
    console.log('Type of SS is ', typeof settingsStore)
    return (
      <>
      <DivStyled className="wrapper-is-hide" id="drawerWrapper" onClick={settingsStore.toggleDrawer}>
        <DivBack onClick={settingsStore.toggleDrawer}>Назад </DivBack>
      </DivStyled>
      <DrawerStyled id="drawer">
          <ul>
            { this.content( Content[settingsStore.lang] ) }
          </ul>
      </DrawerStyled>
      </>
    )
  }
}
Drawer.propTypes = {
  settingsStore: PropTypes.object.isRequired,
} 

export default Drawer
