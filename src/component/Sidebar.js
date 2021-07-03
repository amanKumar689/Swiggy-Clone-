import React from "react";
import Signup from "../component/Signup";
import Login from "../component/Login";
import style from "../style/sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import * as actions from "../redux/actions";
const Sidebar = (props) => {
  return (
    <div className={style.sidebar}>
      <span
        id={style.close}
        onClick={() => {
          props.sidebarToggle(false);
        }}
      >
        <FontAwesomeIcon icon={faTimes} />
      </span>
      {props.sidebarState.component == "L" ? <Login /> : <Signup />}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    sidebarState: state.sidebarReducer,
  };
}
export default connect(mapStateToProps, actions)(Sidebar);
