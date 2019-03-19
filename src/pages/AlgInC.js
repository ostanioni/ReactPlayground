import React, { Component } from 'react'
import styled from 'styled-components'
import { observer, inject } from "mobx-react"


@inject('settingsStore')
@observer
class AlgInC extends Component {
  constructor({match}){
    super()
    this.match = match
  }
  render() {
    return (
      <div>
        <h1>Hello {this.match.params.username}!</h1>
      </div>
    )
  }
}

export default AlgInC