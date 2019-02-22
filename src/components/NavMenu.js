import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"

const NavLinkStyled = styled(NavLink).attrs(
)`
  color: rgb(62,166,255);
  font-size: 30px;
  text-decoration: none;
  text-transform: uppercase;
`

const NavMenu = () => {  return (
    <NavLinkStyled to="/about">About</NavLinkStyled>
)}

export default NavMenu


