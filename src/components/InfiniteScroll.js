import React, { Component } from 'react';
// import { observer, inject } from "mobx-react";
import styled from 'styled-components';

let InfiniteScrollStyled = styled.div.attrs(props=>({
  id: props.id,
}))`
display: block;
height: auto;
margin: 0;
border: 0;
padding: 0;
text-align: center;
`;

export default class InfiniteScroll extends Component {
  loading = true
  componentDidMount(){
    if (this.props.id) {
        const target = document.getElementById(this.props.id)
        const options = {
          rootMargin: '1px',
          threshold: 0.01
        }
        const callback = function(entries, observer) { 
            alert('ISOB')
            console.log(entries[0].target)
            observer.disconnect()
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(target);
    } else {
      console.log('Error: InfiniteScroll have not Id ...')
    }
  }
  render() {
    // const { settingsStore, themesStore, langStore } = this.props
    return (
      <InfiniteScrollStyled>
        {this.loading && <p>Loading...</p>}
      </InfiniteScrollStyled>
    )
  }
}
