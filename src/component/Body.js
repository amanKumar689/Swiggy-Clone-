import React from "react";

// CSS
import style from "../style/body.module.css";
// Component
import Restaurants_ from "./Restaurants_";
import Banner from "./Banner";
const Body = () => {
  return (
    <>
      <div className={style.body}>
        <Banner />
        <Restaurants_ />
      </div>
    </>
  );
};

export default Body;
