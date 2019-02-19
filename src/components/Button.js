import React from 'react';
import styled, { ThemeProvider, createGlobalStyle, css, keyframes } from 'styled-components';
import { Divider } from '@material-ui/core';

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
const animate = keyframes`
  from {
    width: 0;
    height: 0;
    opacity: .5;
  }
  to {
    width: 400px;
    height: 400px;
    opacity: 0;
  }
`;
const SpanStyled = styled.div`
  position: relative;
  left: 100px;
  top: -30px;
  background-color: white;
  transform: translate(-50%,-50%);
  width: 0;
  height: 0;
  border-radius: 50%;
  animation: ${animate} .7s linear infinite;
`;
const Wrapper = styled.div`
  display: inline-block;
  overflow: hidden;
  width: 200px;
  height: 60px;
  cursor: pointer;
`;

class Button extends React.Component {
  render() {
    return (
      <Wrapper>
        <ButtonStyled Info>
          HEADER
        </ButtonStyled>
        <SpanStyled />
      </Wrapper>
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