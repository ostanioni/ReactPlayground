import React from 'react'
import styled from 'styled-components'

const f = ()=>{}
class Icon extends React.Component {
  render() {
    return (
      <span style={{
          fontSize: this.props.size    || '2rem', 
          color:    this.props.color   || '#1bb', 
          padding:  this.props.padding || '0 1.7rem', 
          margin:   this.props.margin  || '0',
          align:    'center',
          cursor: 'pointer',
          boxSizing: 'border-box',
        }}
        onClick={this.props.onClick || f}
      >
        <i className={`${this.props.prefix || 'fas' }  fa-${this.props.type || 'globe'}`}></i>
      </span>
    )
  }
}
const IconStyled = styled(Icon).attrs(props=>({
     size: props.size,
    color: props.theme.themeToggler,
   prefix: props.prefix,
     type: props.type,
   margin: props.margin,
  padding: props.padding,
  onClick: props.onClick,
}))`
display: inline;
`
const IconLangStyled = styled(Icon).attrs(props=>({
   size: props.size,
  color: props.color,
 prefix: props.prefix,
   type: props.type,
 margin: props.margin,
padding: props.padding,
onClick: props.onClick,
}))`
display: inline;
`
/*
const IconMenu = styled(Icon).attrs(props=>({
  size: "2.5rem",
  color: props.theme.langTogglerColor,
  prefix: "fas",
  type: "globe",
  margin: "0.5rem",
  padding: "0.4rem",
  onClick: props.onClick,
}))``
*/
export { IconStyled, IconLangStyled }