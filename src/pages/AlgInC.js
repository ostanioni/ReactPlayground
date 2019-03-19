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
    this.state = {
      data: []
    }
  }
  handleSuccess = (data)=>{
    this.setState({'data': data})
  }
  render() {
    axios.get('/resources/Introduction.json')
    .then( (response)=>{
      // handle success
      this.handleSuccess(response.data);
    })
    return (
      <div>
        {
        this.state.data[this.props.settingsStore.lang].map( (el,idx)=>{
              return (
                <div key={el.label}>
                  <h2>{el.label}</h2>
                  <div dangerouslySetInnerHTML={{ __html: el.text }}></div>
                </div>
              )
          
        })
      }
      </div>
    )
  }
}

export default AlgInC