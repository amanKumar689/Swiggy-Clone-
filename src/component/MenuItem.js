import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import style from "../style/menubar.module.css";
import * as actions from "../redux/actions";
import { sidebarHandler, logout_handler } from "../function/useScript";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faSearch,
  faLifeRing,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { connect } from "react-redux";

const MenuItem = (props) => {
  const history = useHistory();
  const NavIconColor = {
    marginRight: "4px",
  };

  return (
    <div
      className={
        props.className ? style.menubar + " " + props.className : style.menubar
      }
    >
      <div
        id="nav-icon2"
        className={"open"}
        onClick={props.menubar_close_open_handler}
      >
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
        <li
          onClick={() => {
            !props.authState.status
              ? sidebarHandler(props, props.menubar_close_open_handler)
              : logout_handler(props, props.menubar_close_open_handler);
          }}
        >
          <FontAwesomeIcon icon={faUser} style={NavIconColor} />{" "}
          {!props.authState.status ? "Sign In" : "Log out"}
        </li>
        <li
          onClick={() => {
            history.push("/checkout");
          }}
        >
          <FontAwesomeIcon icon={faShoppingBasket} style={NavIconColor} /> Cart
        </li>
      </ul>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    authState: state.authReducer,
    sidebarState: state.sidebarReducer,
  };
}
export default connect(mapStateToProps, actions)(MenuItem);
