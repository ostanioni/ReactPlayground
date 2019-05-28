import React, { Component } from 'react';
// import { observer, inject } from "mobx-react";
import styled from 'styled-components';

let InfiniteScrollStyled = styled.div.attrs(props=>({
  id: "InfScroll",
}))`
display: block;
height: auto;
margin: 0;
border: 1px solid red;
padding: 0;
text-align: center;
content: "Hello";
`;

export default class InfiniteScroll extends Component {
  loading = true
  componentDidMount(){
   
        const target = document.getElementById('InfScroll')
        // console.log('INF_OBSERVER: ', this.props.id)
        console.log('TARGET: ', target)
        const options = {
          rootMargin: '1px',
          threshold: 0.01
        }
        const callback = function(entries, observer) { 
          if (window.pageYOffset > 200){
            alert('ISOB')
            console.log(entries[0].target)
           // observer.disconnect()
          }            
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(target);
    // } else {
    //   console.warn('Error: InfiniteScroll have not Id ...')
    // }
  }
  render() {
    // const { settingsStore, themesStore, langStore } = this.props
    // const { children, id } = this.props
    return (
      <InfiniteScrollStyled>
        <p>Loading...</p>
      </InfiniteScrollStyled>
    )
  }
}
