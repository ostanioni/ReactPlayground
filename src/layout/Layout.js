import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-gap: ${ props => props.gap };
  
  width:  ${ props => props.width? props.width : '100%'};
  height: ${ props => props.heigth? props.heigth : '100vh'};
  
    
`;
