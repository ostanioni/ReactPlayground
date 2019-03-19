import React, { Component } from 'react'
import styled from 'styled-components'
import { observer, inject } from "mobx-react"
import axios from 'axios'


@inject('settingsStore')
@observer
class AlgInC extends Component {
  constructor({match}){
    super()
    this.match = match
  }
  render() {
    axios.get('/resources/Introduction.json')
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    return (
      <div>
        <h1>Hello {this.match.params.username}!</h1>
      </div>
    )
  }
}

export default AlgInC