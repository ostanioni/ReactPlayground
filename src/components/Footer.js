/*tslint:disabled*/
import React from 'react'
import styled from 'styled-components'

const FooterStyled = styled.footer.attrs(props=>({
  id: props.id,
}))`
  background-color: ${props=>props.theme.bgColor};
  color: ${props=>props.theme.textColor};
`
class Footer extends React.Component {
  render(){
    return (
      <FooterStyled>
        {this.props.children}
      </FooterStyled>
    )
  }
}
export default Footer