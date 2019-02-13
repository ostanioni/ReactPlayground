import React from 'react';
import { observer } from "mobx-react";
import { observable, computed, autorun } from "mobx";


@observer class BackToTop extends React.Component {
  
     @observable scrlY =  window.pageYOffset ;
  //autorun( ('reaction') => { console.log("Age", scrollY) } ); 
  toTop = ()=>{
    window.scrollTo(0,0);
  }
  render() {
    window.onscroll = ()=>{this.scrlY=window.pageYOffset;console.log('SCROLL')};
    return (
    <div onClick={this.toTop}>{this.scrlY}</div>
    )
      
  }
}

export default BackToTop;

