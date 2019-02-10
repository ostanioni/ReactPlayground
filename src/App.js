import React from 'react';
import styled from 'styled-components';
import { isEqual   as _isEqual } from 'lodash';

import './css/App.css';

import SearchPanel from './components/SearchPanel';
import SearchItem from './components/SearchItem';
import Error from './components/Error';
import ErrorBoundary from './components/ErrorBoundary';

const AppStyled = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: lavender;
`;
const HeaderStyled = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100px;
  margin: 0;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);   
  padding: 0px;
  background-color: lavenderblush;
  border: 1px solid black;
  box-sizing: border-box;
  z-index: 10;
`;
const MainStyled = styled.main`
  position: relative;
  top: 110px;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: lavender;
  box-sizing: border-box;
  z-index: 1;
`;
/**************____IP_STORAGE_OBJECT_FACADE____**************************/
let IpStorage = {
  init: function( ){
    if ( localStorage.IpStorage ) {
      let tempObj = JSON.parse( localStorage.IpStorage );
      this.ipList = tempObj.ipList;
      this.Items = tempObj.Items;
    }
  },
  get size(){
    return this.Items.length;
  },
  get isEmpty(){
    return this.size  == 0;
  },
  hasIp: function( ipAddress ){
  	if ( this.ipList[ipAddress] === undefined ) {
      return false;
    };
    return true;    
  },  
  addItem: function( objInfo ){
    if ( this.hasIp(objInfo.ip) ) {
      console.log ( `the address ${objInfo.ip} already exists` );
    } else {
      this.ipList[objInfo.ip] = this.size;
      this.Items.push( objInfo );
      console.log('IP ', objInfo.ip, ' added' );
    }
    console.log('Items: ', this.Items);
    console.log('ipList ', this.ipList );
  },
  isEqual: function( objInfo ){
    if ( this.hasIp( objInfo.ip ) ) {
      return _isEqual( this.Items[ this.ipList[objInfo.ip] ], objInfo );
    } else {
      console.log( `${objInfo.ip} does not exist` );
    }
  },
  save: function(){
    localStorage.setItem( 'IpStorage', JSON.stringify({
        ipList: this.ipList,
         Items: this.Items,
      })
    );
  },
  ipList: { }, // {"5.5.5.1":0}
  Items: [ ]
}

export default class App extends React.Component {
  constructor(){
    super();
    IpStorage.init();
    this.state = {
      Items: IpStorage.Items,
      currentItem: null,
      error: false,
      errorMsg: 'Not different...',
    }
    
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getIpInfo = this.getIpInfo.bind(this);
    this.ipValid = this.ipValid.bind(this);
  }

  getIpInfo(ipAddress){
    fetch( `https://api.2ip.ua/provider.json?ip=${ipAddress}`)
    .then( res => res.json( ) )
    .then( item => {
      IpStorage.addItem( item );
      this.setState({ currentItem: item, error: false });
      IpStorage.save( );
      console.table(item);
    })
    .catch( this.handleError( 'Fetch error...' ) )
  }
  ipValid(ipAddress) {  
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddress)) {  
      return (true); 
    }  
    return (false);
  }
  handleSubmit( ipAddress ){
    if ( this.ipValid( ipAddress ) ) {
        this.handleSuccess( ipAddress )
    } else {
      this.handleError(' Enter a valid IP address... ');
    }    
  }
  handleSuccess( ipAddress ) {
    if ( IpStorage.hasIp(ipAddress) ) {
      this.setState({ currentItem: IpStorage.Items[ IpStorage.ipList[ipAddress] ] });
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
    if ( IpStorage.isEmpty ) {
      previosResults =  <h3>No previos results</h3>;
    } else {
      previosResults = IpStorage.Items.map(
        (item) => < SearchItem  result={item} key={item.ip} />
      );
    }
    return (
      <ErrorBoundary>
      <AppStyled>
        <HeaderStyled>
          <SearchPanel handleSubmit={this.handleSubmit} />
        </HeaderStyled>
        <MainStyled className="flex-center">
          <h2>Current result:</h2>
            {result}
          <h2>Previos Results:</h2>
            {previosResults}
        </MainStyled>
      </AppStyled>
      </ErrorBoundary>
    );
  }
}
