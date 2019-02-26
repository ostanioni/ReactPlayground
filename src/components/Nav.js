import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"

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
  &>ul>li {
    display: inline;
    margin: 1rem;
    cursor: pointer;
  }
  font-size: 1.2rem;
  @media (min-width: 0px) and (max-width: 768px) {
    display: block;
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
const NavMenu = () => {  return (
  <NavStyled>
    <img src="imgs/bsmenuR.svg" alt="MENU" width="50px"></img>
    <img src="imgs/svg/code.svg" alt="MENU" width="50px"></img>
    <img src="imgs/theme-light-dark.svg" alt="" width="50px" />
    <ul>
      <li id="t-intro"><NavLinkStyled to="/about">About</NavLinkStyled></li>
      <li id="t-about"><NavLinkStyled to="/about">About Lance </NavLinkStyled></li>
      <li id="t-news"><a href="news.html">News &amp; Events</a></li>
      <li id="t-sponsors"><a href="sponsors.html">Sponsors</a></li>
    </ul>
  </NavStyled>
)}

export default NavMenu


