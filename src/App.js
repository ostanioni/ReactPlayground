import React, { Component } from 'react';
import styled from 'styled-components';
import {isEqual as _isEqual} from 'lodash';
import './css/App.css';
import SearchPanel from './components/SearchPanel';
import SearchItem from './components/SearchItem';

const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: lavender;
`;
const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 100px;
  margin: 0;
  box-shadow: 0 0 10px rgba(0,0,0,0.5); /* Параметры тени */
  /* Сверху | Справа | Снизу | Слева */
  padding: 5px;
  background-color: lavenderblush;
  border: 1px solid black;
  box-sizing: border-box;
`;
const StyledMain = styled.main`
  position: relative;
  top: 110px;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: lightgray;
  box-sizing: border-box;
`;
let IpStorage = {
  size: 0,
  init: function(){
    if ( localStorage.IpStorage === undefined ) {
      localStorage.IpStorage = JSON.stringify( this );
    } else {

    }
  },
  isEmpty: function(){
    return this.size  === 0;
  },
  hasIp: function( ipAddress ){
  	return this.ipList[ipAddress] !== undefined;
  },  
  addItem: function( objInfo ){
    if ( !this.hasIp( objInfo.ip ) ){
    	this.ipList.defineProperty( objInfo.ip, this.size );
      this.items[ this.size ] = objInfo;
      this.size += 1;
    } else {
      console.log ( `${objInfo.ip} yet exist `)
    }
  },
  isEqual: function( objInfo ){
    if ( this.hasIp( objInfo.ip ) ) {
      return _isEqual( this.items[ this.ipList[objInfo.ip] ], objInfo );
    } else {
      console.log( `${objInfo.ip} does not exist` );
    }    
  },
  ipList:{ },
  items: [ ]
}
console.log( IpStorage.isEmpty() )

class App extends Component {
  constructor(){
    super();
    this.state = {
      ipStorage: null,
      hasStorageResults: false,
      currentResult: null,
      error: false    
    }
    IpStorage
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleError = this.handleError.bind(this);
  }
  handleSuccess( result ) {
    if ( hasStorageResults && !storageResults[result.ip] ) {
      storageResults[result.ip] = result;
      this.setState({
        currentResult: result
      });
    }
  }
  handleError() {
    this.setState({
      error: true
    });
  }
  componentDidMount() {
    if ( localStorage.Results ) {
      this.setState({
        storageResults: JSON.parse( localStorage.Results ),
        hasStorageResults: true
      });
    } 
  }
  componentWillUnmount(){
    localStorage.setItem( 'previosResults', JSON.stringify(this.state.storageResults ) );    
  }    
  render() {
    let result;
    if (this.state.error) {
      result = <Error/>;
    } else {
      if ( this.state.currentResult ) {
        result = < SearchItem  result={this.state.currentResult} />;
      } else {
        result = <h3>No current result</h3>;
      }
    }
    return (
      <StyledApp>
        <StyledHeader>
          <SearchPanel 
            handleSuccess={this.handleSuccess}
            handleError={this.handleError}
          />
        </StyledHeader>
        <StyledMain>
          {result}
        </StyledMain>
      </StyledApp>
    );
  }
}

export default App;
