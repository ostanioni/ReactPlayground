import React from 'react';
import styled from 'styled-components';

let ResultStyled = styled.div`
  margin: 0 .25rem;
  min-width: 275px;
  border-radius: 3px;
  border: 2px solid black;
  margin: 1em;
  padding: 0.25em 1em;
`;
let ResultHeader = styled.h2`
  margin: 0 .25rem;
  min-width: 225px;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
let ResultItem = styled.span`
  display: block;
  font-size: 16px; 
  min-width: 125px;
  border-radius: 3px;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export default class SearchResultItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  render(){
    return(
      <ResultStyled key={this.props.result.ip}>
        <ResultHeader>Info about host: {this.props.result.ip}</ResultHeader>
          <ResultItem>Name_ripe: {this.props.result.name_ripe}</ResultItem>
          <ResultItem>Name_rus: {this.props.result.name_rus}</ResultItem>
          <ResultItem>Site: {this.props.result.site}</ResultItem>
          <ResultItem>As: {this.props.result.as}</ResultItem>
          <ResultItem>Ip_range_start: {this.props.result.ip_range_start}</ResultItem>
          <ResultItem>Ip_ranges_end: {this.props.result.ip_range_end}</ResultItem>
          <ResultItem>Route: {this.props.result.route}</ResultItem>
          <ResultItem>Mask: {this.props.result.mask}</ResultItem>
      </ResultStyled>
    )
  }
}
