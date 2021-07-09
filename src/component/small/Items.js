import React from "react";
import Item from "./Item";
import style from "../../style/restaurant.module.css";
const Items = (props) => {
  return (
    <div className={"EachItems"}>
      <h4>{props.cat}</h4>
      {props.data.map((data,index) => (
        <Item key={index} data={data}  cart_info={props.cart_info} />
      ))}
    </div>
  );
};

export default Items;
