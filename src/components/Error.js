import React, { Component } from 'react';
import styled from 'styled-components';

let ErrorStyled = styled.div`
  background-color: red;
  color: white;
  max-width: 400px;
  font-weight: bold;
  padding: 70px 70px 70px 70px;
`;

class Error extends Component {
  constructor(){
    super();
    this.state = {
      isDone: false,
      error: false
    }
  }
  render() {
    return (
      <ErrorStyled> ERROR! ENTER A VALID IP ADDRESS </ErrorStyled>
    );
  }
}

export default Error;
