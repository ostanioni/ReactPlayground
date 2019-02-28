import React from 'react'
import styled from 'styled-components'

const SearchStyled = styled.input.attrs(props=>({
  type: 'search',
  placeholder: ' Enter...',
  required: 'true'

}))`
width: 12rem;
height: 2rem;
border-radius: 0.5rem;
border: 2px solid red;
background: #aaa;
color: white;
&:focus {
  border: 3px solid blue;
}
`
class Search extends React.Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
export default SearchStyled
