import React, { Component } from "react";
import Card from "./Card";
import food from "../images/food.jpg";
export default class CardList extends Component {
 
  render() {
    return (
      <div className={this.props.parent_class}>
        {this.props.data?.map((data) => {
          return (
            <Card
             key={data.id}
              className={this.props.child_class}
               data={
                this.props.parent_class.includes("restaurant_cardList")
                  &&  data  // Make sure --> dasta is for restaurants_ component
                  
              }
              data_shower_className={this.props.data_shower_className}
            />
          );
        })}
      </div>
    );
  }
}
