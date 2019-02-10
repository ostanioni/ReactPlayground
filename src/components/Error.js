import React from 'react';
import styled from 'styled-components';

let ErrorStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: red;
  color: white;
  max-width: 400px;
  font-weight: bold;
  padding: 70px 70px 70px 70px;
`;

export default class Error extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <ErrorStyled> <h2> {this.props.msg} </h2> </ErrorStyled>
    );
  }
}
