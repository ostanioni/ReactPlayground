/*tslint:disabled*/
import React from 'react'
import styled from 'styled-components'

const AsideStyled = styled.aside.attrs(props=>({
  id: props.id,
}))`
& #icon:hover {
  fill: #0f0;
  cursor: pointer;
}
`

class Aside extends React.Component {

  render(){
    return (
      <AsideStyled id={this.props.id}>
        {this.props.children}
      </AsideStyled>
    )
  }
}
export default Aside
