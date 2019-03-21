import React, { Component } from 'react'
// import styled from 'styled-components'
import { observer, inject } from "mobx-react"
import { observable, /* computed */ } from "mobx"
import axios from 'axios'

// import * as _SVG from '@svgdotjs/svg.js'
import SVG from '@svgdotjs/svg.js/src/svg.js'
import 'prismjs/themes/prism-tomorrow.css'
import Prism from 'prismjs';
Prism.highlightAll();

@inject('settingsStore', 'dataStore')
@observer
class AlgInC extends Component {
  constructor({match}){
    super()
    this.match = match
    //this.data = this.props
    //console.log('THIS.PROPS = ', this.props)
    this.state = {
      data: [],
      loading: true,
    }
  }
  getData = (path)=>{
    this.loading = true
    const axiosInstance = axios.create({
      baseURL: 'http://localhost:3001',
      timeout: 2000,
      // headers: {'X-Custom-Header': 'foobar'}
    });
    axiosInstance.get(path)
    .then( (response)=>this.handleSuccess(response.data) )
    .catch( (error)=>this.handleError(error) )
  }
  handleSuccess(data) {
    this.setState({ data })
    console.log('dataStore LOADED...', data)
  }

  handleError(error) {
      // this.error = true
      // this.loading = false
      console.log('dataStore ERRORED...', error)
  }
  componentDidMount(){
    console.log ('PROPS = ', this.props)
    this.getData('/resources/Introduction.json')
    //const canvas = _SVG.SVG().addTo('#drawing').size(300, 300)
    //var rect = canvas.rect(100, 100).attr({ fill: '#f06' })
    //console.log('canvas = ', canvas )
    const canvas = SVG().addTo('#drawing').size(300, 300)
    var rect = canvas.rect(100, 100).attr({ fill: '#f06' })
    // console.log('SVG is ', new SVG.SVG('drawing').size(300, 300))
    //let Svg = SVG(document.getElementById('drawing'))
    // var draw = SVG('drawing').size(300, 300)
    // console.log('Svg is ', Svg)
    //var rect = draw.rect(100, 100).attr({ fill: '#f06' }) 
  }   
    // this.data = this.props.dataStore.data
    

  render() {
    /*
    console.log ('PROPS = ', this.props.dataStore) 
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
    */
    // console.log ('PROPS = ', this.props.dataStore)
    let data = []
    if (this.state.data[this.props.settingsStore.lang]){
      data = this.state.data[this.props.settingsStore.lang]
    }
    return (
      <>
      <div>
        <h1>HELLO FROM ALGINC</h1>
      { data.map((el,idx)=>{
        return ( 
          <div key={el.label}>
            <h2>{el.label}</h2>
            <div dangerouslySetInnerHTML={{ __html: el.text }}></div>
          </div>
        )
         })
      }
      </div>
      <div id="drawing">
      HELLO SVG
      </div>
      <div>
      <pre><code className="language-css">{`p { color: red }`}</code></pre>
            <pre><code className="language-js  line-numbers">{`var Prism = require('prismjs');
var loadLanguages = require('prismjs/components/');
loadLanguages(['haml']);
// The code snippet you want to highlight, as a string
var code = "= ['hi', 'there', 'reader!'].join \" \"";
// Returns a highlighted HTML string
var html = Prism.highlight(code, Prism.languages.haml, 'haml');`}</code></pre>
<pre><code className="language-clike">{`int main(){
printf("Hello World");
}`}</code></pre>
        </div>
      </>
    )
  }
  
}

export default AlgInC