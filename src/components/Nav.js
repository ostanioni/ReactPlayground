import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { NavLink } from 'react-router-dom'
// import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { observer, inject } from 'mobx-react'
// import Icon from 'components/Icon'
import IconSvg from 'components/IconSvg'

import SearchStyled from 'components/SearchInput'

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
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${props=>props.theme.bgHeader};
  transition: all 0.5s;
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
@inject('themesStore', 'settingsStore', 'langStore')
@observer
class Nav extends React.Component {
  clk = ()=>{
    alert('click')
  }
  render() { 
    return (
    <ThemeProvider theme={this.props.themesStore[this.props.settingsStore.theme]}>
      <NavStyled>
        <IconSvg id="bars" src="imgs/nav/bars.svg" width="2rem" alt="LANG" onClick={this.props.settingsStore.toggleDrawer}/>
        <IconSvg src="imgs/nav/globe.svg" width="2rem" alt="LANG" onClick={this.props.settingsStore.toggleLang}/>
        <IconSvg src="imgs/nav/lightbulb.svg" width="1.5rem" alt="LANG" onClick={this.props.settingsStore.toggleTheme} />
        <IconSvg src="imgs/nav/search.svg" width="2rem" alt="LANG" />
      
        <ul style={{ font: 'Monospace',}}>
          <li id="t-intro"><NavLinkStyled to="/about">About Me</NavLinkStyled></li>
          <li id="t-about"><NavLinkStyled to="/home">Home</NavLinkStyled></li>
          <li id="t-about"><NavLinkStyled to="/proffit">Proffit</NavLinkStyled></li>
          {/*
          <li id="t-news" ><a href="news.html" style={{color: '#61dafb'}}>NEWS &amp; EVENTS</a></li>
          <li id="t-sponsors"><a href="sponsors.html" style={{color: 'rgb(255,0,80)'}}>Sponsors</a></li>
          */}
        </ul>
     
      </NavStyled>
    </ThemeProvider>
  )}
}

export default Nav

/*
<RightMenuSide>
        <SearchStyled />
      <IconStyled padding={'0 0.5rem 0 1rem'} onClick={this.props.settingsStore.toggleTheme}  type={"search"} name={'iconTheme'} />
        <IconStyled padding={'0 0 0 1rem'} onClick={this.props.settingsStore.toggleTheme}  type={"lightbulb"} name={'iconTheme'} />
        <IconLangStyled 
          onClick={this.props.settingsStore.toggleLang} 
            color={this.props.settingsStore.langTogglerColor}
        />
      </RightMenuSide>


      
      */