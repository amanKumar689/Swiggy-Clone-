import React from "react";
import style from "../style/menubar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faSearch,
  faLifeRing,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const MenuItem = (props) => {
  const NavIconColor = {
    marginRight: "4px",
  };
  return (
    <div className={props.className ? style.menubar + ' ' + props.className : style.menubar}>
    
      <div id="nav-icon2" className={'open'} onClick={props.toggle}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul>
        <li>
          <FontAwesomeIcon icon={faSearch} style={NavIconColor} /> Search
        </li>
        <li>
          <FontAwesomeIcon icon={faCoffee} style={NavIconColor} /> Offers
        </li>
        <li>
          <FontAwesomeIcon icon={faLifeRing} style={NavIconColor} /> Help
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} style={NavIconColor} /> Sign In
        </li>
        <li>
          <FontAwesomeIcon icon={faShoppingBasket} style={NavIconColor} /> Cart
        </li>
      </ul>
    </div>
  );
};

export default MenuItem;
