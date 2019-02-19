// import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import styled from 'styled-components';
// import styled, { ThemeProvider, createGlobalStyle, css } from 'styled-components';

const AppHeaderStyled = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100px;
  width: 100%;
  box-shadow: 0 0 20px rgba(0,0,0,0.5);
  padding: 0px;
  background-color: ${ props => props.theme.bg };
  color: ${ props => props.theme.text };
`;

class AppBar extends React.Component {
  render() {
    return (
        <AppHeaderStyled>
          HEADER
        </AppHeaderStyled>
    )
  }
};
export default AppBar;