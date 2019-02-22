import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-gap: ${ props => props.gap };
  
  width:  ${ props => props.width? props.width : '100%'};
  height: ${ props => props.heigth? props.heigth : '10vh'};
`;
const MainLayoutStyled = () => { return (
<>
  <Grid>
    <header>

    </header>
    <main>

    </main>
    <aside>
      
    </aside>
    <footer>

    </footer>
  </Grid>
</>
)}
export default MainLayoutStyled;
