import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { inject } from 'mobx-react'
import Icon from 'components/Icon'

const NavLinkStyled = styled(NavLink).attrs({
  role: "link",
})`
  color: rgb(62,166,255);
  font-size: 1.2rem;
  text-decoration: none;
  text-transform: uppercase;
`
const NavStyled = styled.nav.attrs({
  role: "navigation",
})`
  background-color: ${props=>props.theme.bgHeader}
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
    display: block;
    &>ul {
      display: none;
    }
  }
  @media (min-width: 769px) and (max-width: 992px) {
    display: inline-block;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    display: inline-block;
  }
  @media (min-width: 1201px) {
    display: inline-block;
  }
`

@inject('settingsStore')
class Nav extends React.Component {
  
  render() {  return (
    
    <NavStyled>
      <Icon size={"2rem"} color={"rgb(255,0,80)"} type={"bars"} margin={"0.5rem"} padding={"0.2rem"}/>

      <ul>
        <li id="t-intro"><NavLinkStyled to="/about">About</NavLinkStyled></li>
        <li id="t-about"><NavLinkStyled to="/about">About Lance </NavLinkStyled></li>
        <li id="t-news" ><a href="news.html" style={{color: '#61dafb'}}>NEWS &amp; EVENTS</a></li>
        <li id="t-sponsors"><a href="sponsors.html" style={{color: 'rgb(255,0,80)'}}>Sponsors</a></li>
      </ul>
<span style={{fontSize: 48+'px', color: 'Dodgerblue'}}>
  <i className="fas fa-igloo"></i>
</span>

<span style={{fontSize: 3+'rem'}}>
  <span style={{color: 'Mediumslateblue'}}>
  <i className="fas fa-igloo"></i>
  </span>
</span>
<span style={{fontSize: 3+'rem'}}>
  <span style={{color: 'Mediumslateblue'}}>
  <i className="far fa-lightbulb"></i>
  </span>
</span>
<Icon size={"2rem"}   color={"rgb(255,0,80)"} type={"flag-usa"}    margin={"0.5rem"} />
<Icon size={"2rem"}   color={"rgb(255,0,80)"} type={"globe"}       margin={"0.5rem"} onClick={this.props.settingsStore.toggleTheme} />
<Icon size={"2rem"}   color={"red"}           type={"lightbulb"}   margin={"0.5rem"} />
<Icon size={"1.5rem"} color={"red"}           type={"ellipsis-v"}  margin={"0.5rem"} padding={"0.4rem"} />
    </NavStyled>
  )}
}


export default Nav


