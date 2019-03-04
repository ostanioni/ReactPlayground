import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from "mobx-react"
import styled from 'styled-components'

import {En,Ru} from 'resources/content'

let SideBarStyled = styled.nav.attrs(props=>{

})`
width: 100%;
height: 100%;
color: ${props=>props.theme.textColor};
background-color: ${props=>props.theme.bgColor};
`
@inject('themesStore', 'settingsStore', 'langStore')
@observer
class SideBar extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <SideBarStyled>
        <ul>
          <li>HHHHHH</li>
          <li>22222222</li>
          <li>3333333</li>
          <li>4444444</li>
          <li>555555555</li>
        </ul>
      </SideBarStyled>
    )
  }
}

export default SideBar
