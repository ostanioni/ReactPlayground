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
      <IconSvg id="bars" src="imgs/nav/bars.svg" width="2rem" alt="LANG" onClick={this.clk}/>
      <IconSvg src="imgs/nav/globe.svg" width="2rem" alt="LANG" color="#fff" onClick={this.props.settingsStore.toggleLang}/>
      <IconSvg src="imgs/nav/lightbulb.svg" width="1.5rem" alt="LANG" onClick={this.props.settingsStore.toggleTheme} />
      <IconSvg src="imgs/nav/search.svg" width="2rem" alt="LANG" />
     
     
     { /*
      
 
  
      <ul>
        <li id="t-intro"><NavLinkStyled to="/about">About</NavLinkStyled></li>
        <li id="t-about"><NavLinkStyled to="/about">About Lance </NavLinkStyled></li>
        <li id="t-news" ><a href="news.html" style={{color: '#61dafb'}}>NEWS &amp; EVENTS</a></li>
        <li id="t-sponsors"><a href="sponsors.html" style={{color: 'rgb(255,0,80)'}}>Sponsors</a></li>
      </ul>
      <DivStyled />
        
      <Icon size={"2rem"}   prefix={"fas"} color={"rgb(255,0,80)"} type={"flag-usa"}    margin={"0.5rem"} />
      
    
      <Icon size={"2rem"} prefix={"fas"} color={this.props.settingsStore.langTogglerColor} type={"globe"} margin={"0.5rem"} onClick={this.props.settingsStore.toggleLang} />:
      <Icon size={"2rem"}   color={this.props.theme.themesTogglerColor}   prefix={"fas"}     type={"lightbulb"}   margin={"0.5rem"}  onClick={this.props.settingsStore.toggleTheme}/>:
      
      <Icon size={"1.5rem"} color={"grey"}   prefix={"fas"}        type={"ellipsis-v"}  margin={"0.5rem"} padding={"0.4rem"} />
      
      <IconThemeStyled onClick={this.props.settingsStore.toggleTheme} />
      <IconLangStyled theme={this.props.theme} onClick={this.props.settingsStore.toggleLang} />
      */}
      {
        /**color={this.props.settingsStore.langTogglerColor} 
         * <Icon onClick={this.props.settingsStore.toggleLang}  color={this.props.settingsStore.langTogglerColor}/>
        */
      }
      {
        //console.log(this.props.theme)
        //
      }
      
      
      
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