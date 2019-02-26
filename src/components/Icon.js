import React from 'react'

export default class Icon extends React.Component {
  render() {
    return (
      <span style={{fontSize: this.props.size, color: this.props.color, padding: this.props.padding||0, margin: this.props.margin||0 }}
        onClick={this.props.onClick}
      >
        <i className={`fas fa-${this.props.type}`}></i>
      </span>
    )
  }
}