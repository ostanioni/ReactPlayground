import React, { Component } from 'react'

export default class About extends Component {
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
