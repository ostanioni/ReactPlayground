import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { inject } from 'mobx-react'
import Icon from 'components/Icon'

// NavLinkStyled
const NavLinkStyled = styled(NavLink).attrs({
  role: "link",
})`
  color: rgb(62,166,255);
  font-size: 1.2rem;
  text-decoration: none;
  text-transform: uppercase;
`
// NavStyled
const NavStyled = styled.nav.attrs({
  role: "navigation",
})`
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${props=>props.theme.bgHeader};
  &>ul {
    display: inline;
  }
  &>ul>li {
    display: inline;
    margin: 1rem;
    cursor: pointer;
    font-weight: bold;
  }
  font-size: 1.2rem;
  @media (min-width: 0px) and (max-width: 768px) {
    &>ul {
      display: none;
    }
    &>ul>li {
      display: inline;
      margin: 1rem;
      cursor: pointer;
      font-weight: bold;
    }
  }
  @media (min-width: 769px) and (max-width: 992px) {
    &>ul>li {
      display: inline;
      margin: 1rem;
      cursor: pointer;
      font-weight: bold;
    }
    &>ul {
    display: inline;
  }
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    &>ul>li {
      display: inline;
      margin: 1rem;
      cursor: pointer;
      font-weight: bold;
    }
    &>ul {
    display: inline;
  }
  }
  @media (min-width: 1201px) {
    &>ul>li {
      display: inline;
      margin: 1rem;
      cursor: pointer;
      font-weight: bold;
    }
    &>ul {
    display: inline;
  }
  }
`
// Nav class
@inject('settingsStore')
class Nav extends React.Component {
  render() {  
    const globeIcon = this.props.settingsStore.theme === 'dark'? 
      <Icon size={"2rem"} prefix={"fas"} color={"white"} type={"globe"} margin={"0.5rem"} onClick={this.props.settingsStore.toggleTheme} />:
      <Icon size={"2rem"} prefix={"fas"} color={"rgb(255,0,80)"} type={"globe"} margin={"0.5rem"} onClick={this.props.settingsStore.toggleTheme} />
    const lightIcon = this.props.settingsStore.theme === 'dark'? 
      <Icon size={"2rem"}   color={"lightgrey"}   prefix={"fas"}     type={"lightbulb"}   margin={"0.5rem"} />:
      <Icon size={"2rem"}   color={"lightyellow"}  prefix={"far"}     type={"lightbulb"}   margin={"0.5rem"} />

    return (
    <NavStyled>
     
      <Icon size={"2rem"} color={"rgb(255,0,80)"} prefix={'fas'} type={"bars"} margin={"0.5rem"} padding={"0.2rem"}/>
 
  
      <ul>
        <li id="t-intro"><NavLinkStyled to="/about">About</NavLinkStyled></li>
        <li id="t-about"><NavLinkStyled to="/about">About Lance </NavLinkStyled></li>
        <li id="t-news" ><a href="news.html" style={{color: '#61dafb'}}>NEWS &amp; EVENTS</a></li>
        <li id="t-sponsors"><a href="sponsors.html" style={{color: 'rgb(255,0,80)'}}>Sponsors</a></li>
      </ul>
 
   
      <Icon size={"2rem"}   prefix={"fas"} color={"rgb(255,0,80)"} type={"flag-usa"}    margin={"0.5rem"} />
        {globeIcon}
        {lightIcon}
      <Icon size={"1.5rem"} color={"grey"}   prefix={"fas"}        type={"ellipsis-v"}  margin={"0.5rem"} padding={"0.4rem"} />
    
    </NavStyled>
  )}
}

export default Nav
