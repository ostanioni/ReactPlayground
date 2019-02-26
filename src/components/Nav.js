import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"

const NavLinkStyled = styled(NavLink).attrs({
  role: "link",
})`
  color: rgb(62,166,255);
  font-size: 30px;
  text-decoration: none;
  text-transform: uppercase;
`
const NavStyled = styled.nav.attrs({
  role: "navigation",
})`
  display: inline-block;
  font-size: 1.2rem;
  @media (min-width: 0px) and (max-width: 768px) {
    display: block;
  }
  @media (min-width: 769px) and (max-width: 992px) {

  }
  @media (min-width: 993px) and (max-width: 1200px) {

  }
  @media (min-width: 1201px) {

  }
  
`

const NavMenu = () => {  return (
  <NavStyled>
    <ul>
      <li id="t-intro"><NavLinkStyled to="/about">About</NavLinkStyled></li>
      <li id="t-about"><a href="about.html">About Lance </a></li>
      <li id="t-news"><a href="news.html">News &amp; Events</a></li>
      <li id="t-sponsors"><a href="sponsors.html">Sponsors</a></li>
    </ul>
  </NavStyled>
)}

export default NavMenu


