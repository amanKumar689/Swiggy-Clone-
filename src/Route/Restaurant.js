import React, { Component } from "react";


// Component 
 import Header from '../component/Header'
 import Body from '../component/Body'
class Restaurant extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Body />
      </div>
    );
  }
}

export default Restaurant;
