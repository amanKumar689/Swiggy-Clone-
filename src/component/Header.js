import React, { useState, useEffect } from "react";
import { useHistory} from 'react-router-dom'
import style from "../style/header.module.css";
import swiggyLogo from "../images/swiggy.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "../component/Menu";
import {
  faCoffee,
  faSearch,
  faLifeRing,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Effectstyle from "../style/effect.module.css";
import {connect} from 'react-redux'
import * as actions from '../redux/actions'



const Header = (props) => {
  const [menuStatus, setMenuStatus] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const history = useHistory()
  const NavIconColor = {
    marginRight: "4px",
  };

  function menubar_close_open_handler() {
    setMenuOpen(!menuOpen);
  }

  function sidemenu_OR_navmenu() {
    window.innerWidth <= 900 && !menuStatus && setMenuStatus(true);
    window.innerWidth >= 900 && menuStatus && setMenuStatus(false);
  }

  function menuHandler() {
    window.addEventListener("resize", sidemenu_OR_navmenu);
  }
  function sidebarHandler () {
 
    props.sidebarToggle(!props.sidebarState.status,'L')

  }
  useEffect(() => {
    sidemenu_OR_navmenu();
  }, []);

  useEffect(() => {
    menuHandler();
    return menuHandler;
  }, [menuStatus]);

console.log("function",props.history);
  return (
    <div className={style.header + ' ' + props.className}>
      <section className={style.swiggyLogo}>
        <img src={swiggyLogo} alt="swiggy" />
      </section>
      {!menuStatus ? (
        <section className={style.nav}>
          <nav>
            <ul>
              <li className={Effectstyle.Hover_Orange} onClick={()=>{history.push('/search')}}>
                <FontAwesomeIcon icon={faSearch} style={NavIconColor}  /> Search
              </li>
              <li className={Effectstyle.Hover_Orange}>
                <FontAwesomeIcon icon={faCoffee} style={NavIconColor} /> Offers
              </li>
              <li className={Effectstyle.Hover_Orange}>
                <FontAwesomeIcon icon={faLifeRing} style={NavIconColor} /> Help
              </li>
              <li className={Effectstyle.Hover_Orange} onClick={sidebarHandler}>
                <FontAwesomeIcon icon={faUser} style={NavIconColor} /> {props.authState.status ? 'User' : 'Sign In'}
              </li>
              <li className={Effectstyle.Hover_Orange} onClick={()=>{history.push('/checkout')}}>
                <FontAwesomeIcon icon={faShoppingBasket} style={NavIconColor} />
                Cart  {props.cartState.cart.length}
              </li>
            </ul>
          </nav>
        </section>
      ) : (
        <Menu
          toggle={menubar_close_open_handler}
          className={menuOpen ? "openmenu" : "closemenu"}
        />
      )}
    </div>
  );
};

function mapStateToProps(state) {

  return {
    sidebarState:state.sidebarReducer ,
    cartState:state.cartReducer  ,
	authState:state.authReducer
  }

}

export default connect(mapStateToProps,actions)(Header);
