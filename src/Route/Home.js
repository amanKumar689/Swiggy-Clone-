import React, { useEffect } from "react";
import style from '../style/home.module.css'
import effect from '../style/effect.module.css'
import * as actions from '../redux/actions'
 import { connect } from "react-redux";   
import swiggyLogo from "../images/swiggy.svg";
import {useHistory} from 'react-router-dom'
import {loadScriptFor_black_background} from '../function/useScript'
const Home = (props) => {
  const history = useHistory()
  useEffect(()=>{
    loadScriptFor_black_background()
  })
  return <div className={style.landing}>
 
  <section>
    <header>
      <div className={style.logo}>
       
       <img src={swiggyLogo} alt='' />
       SWIGGY
       </div>  
      <div className={style.auth}> 
      <button className={effect.Hover_black_background} onClick={()=>{props.sidebarToggle(true,"L")}}>Login</button>
      <button className={effect.Hover_black_background} onClick={()=>{props.sidebarToggle(true,"S")}}>Sign up</button>
      </div>  
    </header>
    <div className={style.landing_body}>
      <h1> Unexpected Guest ?</h1> 
       <span> Order your food from favourate restaurant near you  </span>
      <div className={style.input}>
        <input type="text" placeholder={'Enter Your Location'}/>
        <button onClick={()=>{history.push('/restaurants')}}>
       Find Food
        </button>

      </div>
      <footer></footer>
    </div>
  </section>
  <section>
   
  </section>
  
  </div>;
};

export default connect(null,actions)(Home);
