import React from "react";
import $ from "jquery";
import "../style/menu.css";
import MenuItem from "../component/MenuItem";
const Menu = (props) => {
  return (
    <div className="menu">
      <div id="nav-icon2" onClick={props.toggle}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <MenuItem toggle={props.toggle} className={props.className}/>
    </div>
  );
};

export default Menu;
