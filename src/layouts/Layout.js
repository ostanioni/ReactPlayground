import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 70px;
  width: 100%;
  margin: 0;
  padding: 0px;
  border: none;
  box-shadow: 0 0 20px rgba(0,0,0,0.5);
  box-sizing: border-box;
  z-index: 1000;
  background-color: ${props=>props.bgColor};
  color: ${props=>props.textColor};
`
const MainStyled = styled.main`
  position: relative;
  top: 80px;
  box-sizing: border-box;
`
const AsideStyled = styled.aside``
const FooterStyled = styled.footer``

const MainLayoutStyled = () => { return (
<>
    <HeaderStyled>

    </HeaderStyled>
    <MainStyled>

    </MainStyled>
    <AsideStyled>
      
    </AsideStyled>
    <FooterStyled>

    </FooterStyled>
</>
)}
export default MainLayoutStyled;
/*
html {
  
}
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
@media (max-width: 576px) {
  html {
    font-size: 12px;

  }
}
@media (min-width: 577px) and (max-width: 768px) {

}
@media (min-width: 769px) and (max-width: 992px) {

}
@media (min-width: 993px) and (max-width: 1200px) {

}
@media (min-width: 1201px) {

}
  
  
  
 */
