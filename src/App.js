import React from 'react';
import styled from 'styled-components';
import { isEqual   as _isEqual } from 'lodash';

import './css/App.css';

// import SearchPanel from './components/SearchPanel';
// import SearchItem from './components/SearchItem';
// import Error from './components/Error';
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
export default class App extends React.Component {
  constructor(){
    super();  
  }
  showMsg = ( Msg='hello' ) => {
    alert( Msg )
  }
  componentDidMount() {    
  }
  componentWillUnmount(){   
  }    
  render() {
    return (
      <ErrorBoundary>
      <AppStyled>
        <HeaderStyled className="flex-center" onClick={this.showMsg}>
         HEADER
        </HeaderStyled>
        <MainStyled className="flex-center">
          <h2>MAIN</h2>
            MAIN CONTENT
        </MainStyled>
      </AppStyled>
      </ErrorBoundary>
    );
  }
}
