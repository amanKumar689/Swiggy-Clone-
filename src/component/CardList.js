import React, { Component } from "react";
import Card from "./Card";
import food from "../images/food.jpg";

import Skeleton from "@material-ui/lab/Skeleton";
export default class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }

  componentDidMount() {
	setTimeout(() => {
      this.setState({ status: true });
    }, 4000);  
  }
  
  render() {
    const component = (
      <div className={this.props.parent_class}>
        {this.props.data?.map((data,index) =>
          this.state.status ? (
            <Card
              key={data.restaurant_id}	
              className={this.props.child_class}
              data={
                this.props.parent_class.includes("restaurant_cardList") && data // Make sure --> dasta is for restaurants_ component
              }
              data_shower_className={this.props.data_shower_className}
            />
          ) : (
            <Skeleton key={index} variant="rect" width={270} height={360} />
          )
        )}
      </div>
    );

    return component;
  }
}
