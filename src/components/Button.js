import React from 'react';
import styled, { ThemeProvider, createGlobalStyle, css } from 'styled-components';

const ButtonStyled = styled.button`
  width: 200px;
  height: 60px;
  cursor: pointer;
  /*color: lawngreen;
  border: 2px solid lawngreen;*/
  font-size: 20px;
  border-radius: 7px;
  font-weight: bold;
  background-color: ${props => props.theme.bg};
  ${props => props.Alert && 'color: rgb(33,139,198);border: 2px solid rgb(33,139,198);' }
  ${props => props.Info && 'color: lawngreen;border: 2px solid lawngreen;'}
  ${props => props.Warning && 'color: rgb(255,0,80);border: 2px solid rgb(255,0,80);' }
/*
  ${props => props.Alert && 'color: lawngreen' }
  ${props => props.Info && 'color: lawngreen' }
  ${props => props.Warning && 'color: lawngreen' }
  */
`;

class Button extends React.Component {
  render() {
    return (
        <ButtonStyled Info>
          <span></span>
          HEADER
        </ButtonStyled>
    )
  }
};
export default Button;

/*
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100px;
  width: 100%;
  box-shadow: 0 0 20px rgba(0,0,0,0.5);
  padding: 0px;
  background-color: ${ props => props.theme.bg };
  color: ${ props => props.theme.text };
 */