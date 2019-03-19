import React, { Component } from 'react'
// import styled from 'styled-components'
import { observer, inject } from "mobx-react"

@inject('settingsStore', 'dataStore')
@observer
class AlgInC extends Component {
  // @observable dataLoaded = false
  constructor({match}){
    super()
    this.match = match
    this.state = {
      data: null,
      loading: false,
    }
  }
  componentDidMount(){
    console.log ('PROPS = ', this.props.dataStore.loaded)
    this.setState({
      data: this.props.dataStore.getData('/resources/Introduction.json'),
    })
  }
  render() {
    console.log('MATCH = ', this.match)
    let data = ''
    if (this.state.data){
      data = this.state.data[this.props.settingsStore.lang].map( (el,idx)=>{
        return (
          <div key={el.label}>
            <h2>{el.label}</h2>
            <div dangerouslySetInnerHTML={{ __html: el.text }}></div>
          </div>
        )
    
    })
    } else {
      data = 'loading...'
    }
    // console.log ('PROPS = ', this.props.dataStore)
    return (
      <div>
        <h1>HELLO FROM ALGINC</h1>
      { data }
      </div>
    )
  }
}

export default AlgInC