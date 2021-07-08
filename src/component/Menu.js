import React from "react";
import $ from "jquery";
import "../style/menu.css";
import MenuItem from "../component/MenuItem";
const Menu = (props) => {
  return (
    <div className="menu">
      <div id="nav-icon2" onClick={props.menubar_close_open_handler}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <MenuItem  menubar_close_open_handler={props.menubar_close_open_handler} className={props.className}/>
    </div>
  );
};

export default Menu;
