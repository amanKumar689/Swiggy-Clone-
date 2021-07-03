import React from "react";
import style from '../style/checkout.module.css'
import style_2 from '../style/restaurant.module.css'
import {connect} from 'react-redux'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMinusCircle} from "@fortawesome/free-solid-svg-icons";
import {sidebarToggle , remove_from_cart_handler} from '../redux/actions'
const Checkout = (props) => {
  return (
    <div className={style.checkout}>
      <section className={style.left}>
        <div className={style.checkout_auth}>
          <h2>ACCOUNT</h2>
          <span>
            
            To place your order now , log in to your existing account or sign up
          </span>
          <nav>
            <button onClick={()=>{props.sidebarToggle(true,'L')}}>
              Have an account ? <br /> LOGIN IN
            </button>
            <button onClick={()=>{props.sidebarToggle(true,'S')}}>
              New to swiggy ? <br /> SIGN UP
            </button>
          </nav>
        </div>

        {/* <div className={"checkout_address"}></div>
        <div className="checkout_payment"></div> */}
      </section>
      <section className={style.right}>
      
      <div className={style.cart_list}>
      <h5> Restaurant Name </h5>
          <ul>
          {
                props.cartState.cart.map(EachItem=>( 
				<li>
                    <span>{EachItem.food_name}</span>
				<span>155 &nbsp; &nbsp;
				<FontAwesomeIcon 
				   icon={faMinusCircle}
				   onClick={(e) =>{props.remove_from_cart_handler(e.currentTarget.id)} }
				   class={style_2.remove} 
				   id={EachItem.food_id}/> 
				   </span>
                  </li>
				  )
				  )
              }
          </ul>
           <p> <span>Total</span> <span> 1125</span></p>
      </div>
       </section>
    </div>
  );
};
function mapStateToProps (state) {
 
  return {
    cartState:state.cartReducer
  }
   
}
export default connect(mapStateToProps,{sidebarToggle ,remove_from_cart_handler})(Checkout);
