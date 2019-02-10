import React, { Component } from 'react';
import styled from 'styled-components';
import {isEqual as _isEqual} from 'lodash';
import './css/App.css';
import SearchPanel from './components/SearchPanel';
import SearchItem from './components/SearchItem';
import Error from './components/Error';
import ErrorBoundary from './components/ErrorBoundary';

const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: lavender;
`;
const StyledHeader = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100px;
  margin: 0;
  box-shadow: 0 0 10px rgba(0,0,0,0.5); /* Параметры тени */
  /* Сверху | Справа | Снизу | Слева */
  padding: 0px;
  background-color: lavenderblush;
  border: 1px solid black;
  box-sizing: border-box;
  z-index: 10;
`;
const StyledMain = styled.main`
  position: relative;
  top: 110px;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: lightgray;
  box-sizing: border-box;
  z-index: 1;
`;
/**************____STORAGE_OBJECT____*******************************************************/
let IpStorage = {
  get size(){
    return this.Items.length;
  },
  init: function( ){
    if ( localStorage.IpStorage === undefined ) {
      localStorage.IpStorage = JSON.stringify( 
        {
          ipList: { },
          Items: [ ],
        }
      );
    } else {
      let tempObj = JSON.parse( localStorage.IpStorage );
      this.ipList = tempObj.ipList;
      this.Items = tempObj.Items;
    }
  },
  get isEmpty(){
    return this.size  == 0;
  },
  hasIp: function( ipAddress ){
  	return this.ipList[ipAddress] !== undefined;
  },  
  addItem: function( objInfo ){
    if ( !this.hasIp( objInfo.ip ) ){
    	this.ipList[objInfo.ip] = this.size;
      this.Items[ this.size ] = objInfo;
    } else {
      console.log ( `${objInfo.ip} yet exist `)
    }
  },
  isEqual: function( objInfo ){
    if ( this.hasIp( objInfo.ip ) ) {
      return _isEqual( this.Items[ this.ipList[objInfo.ip] ], objInfo );
    } else {
      console.log( `${objInfo.ip} does not exist` );
    }
  },
  save: function(){
    this.appStatePointer = null;
    localStorage.IpStorage = JSON.stringify( 
      {
        ipList: this.ipList,
        Items: this.Items,
      }
    );
  },
  ipList: { },
  Items: [ ]
}

class App extends Component {
  constructor(){
    super();
    this.IpStorage = IpStorage;
    this.IpStorage.init();
    this.state = {
      Items: IpStorage.Items,
      currentItem: null,
      error: false,
      errorMsg: 'Not different...',
    }
    
    //
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getIpInfo = this.getIpInfo.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  handleSubmit( ipAddress ){
    if ( this.isValid( ipAddress ) ) {
        this.handleSuccess( ipAddress )
    } else {
      this.handleError(' Enter valid IP. ');
    }    
  }
  getIpInfo(ipAddress){
    fetch( `https://api.2ip.ua/provider.json?ip=${ipAddress}`)
    .then( res => res.json() )
    .then( item => {
      this.IpStorage.addItem( item );
      this.setState({ currentItem: item, error: false });
      console.table(item);
    })
    .catch( this.handleError( 'Fetch error...' ) )
  }
  isValid(ipAddress) {  
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddress)) {  
      return (true); 
    }  
    return (false);
  }
  handleSuccess( ipAddress ) {
    if ( this.IpStorage.hasIp(ipAddress) ) {
      this.setState({ currentItem: this.IpStorage.Items[ this.ipList[ipAddress] ] });
    } else {
      this.getIpInfo( ipAddress );
    }
  }
  handleError( errorMsg ) {
    this.setState({
      error: true,
      errorMsg,
    });
  }
  componentDidMount() {
    
  }
  componentWillUnmount(){
    this.IpStorage.save();
  }    
  render() {
    let result;
    if (this.state.error) {
      result =  <Error msg={this.state.errorMsg} />;
    } else {
      if ( this.state.currentItem ) {
        result = < SearchItem  result={this.state.currentItem} />;
      } else {
        result = <h3>No current result</h3>;
      }
    }
    let previosResults;
    if ( this.IpStorage.isEmpty ) {
      previosResults =  <h3>No previos results</h3>;
    } else {
      previosResults = this.IpStorage.Items.map(
        (item) => < SearchItem  result={item} />
      );
    }
    return (
      <ErrorBoundary>
      <StyledApp>
        <StyledHeader>
          <SearchPanel handleSubmit={this.handleSubmit} />
        </StyledHeader>
        <StyledMain className="flex-center">
          <h2>Current result:</h2>
            {result}
          <h2>Previos Results:</h2>
            {previosResults}
        </StyledMain>
      </StyledApp>
      </ErrorBoundary>
    );
  }
}

export default App;
