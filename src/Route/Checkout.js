import React, { useState, useEffect } from "react";
import style from "../style/checkout.module.css";
import style_2 from "../style/restaurant.module.css";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle ,faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { sidebarToggle, remove_from_cart_handler } from "../redux/actions";
import Auth_checkout from "../component/small/Auth_checkout";
import Address_checkout from "../component/small/Address_checkout";
import Payment_checkout from "../component/small/Payment_checkout";
import { Steps } from "antd";
import {useHistory} from 'react-router-dom'



const Checkout = (props) => {
  const [cartStatus, setCartStatus] = useState(false);
  const [stepStatus, setStepStatus] = useState({
    first: "process",
    second: "wait",
    third: "wait",
  });
  const history = useHistory()
const { Step } = Steps;

  function next_handler() {
    setStepStatus((prevState) => ({
      ...prevState,
      second: "finish",
      third: "process",
    }));
  }

  useEffect(() => {
    if (props.authState.status) {
      setStepStatus((prevState) => ({
        ...prevState,
        first: "finish",
        second: "process",
      }));
    }
  }, [props.authState, props.sidebarState]);

  useEffect(() => {
	  let Ismounted =true
    if (window.innerWidth <= 700) {
      cartStatus && setCartStatus(false);
    } else {
      !cartStatus && setCartStatus(true);
    }

	 
	 window.addEventListener('resize',() => {
      if(Ismounted)
	  {
		  
	  if (window.innerWidth <= 700) {

        cartStatus && setCartStatus(false);
      } else {
        !cartStatus && setCartStatus(true);
      }
	  }
    })
	return () =>{Ismounted =false}
  }, [cartStatus]);


  return (
    <div className={style.checkout}>
      <section className={style.left}>
		  { window.innerWidth<=700 && (< div className={style.cart_navigator}>
		<button onClick={()=>{history.push('/cart')}}> 
		<FontAwesomeIcon icon={faShoppingBasket}  /> Cart 
		  </button></div>)}
        <Steps direction="vertical" current={1}>
          {!props.authState.status ? (
            <Step
              title="Login or Sign up"
              description={<Auth_checkout {...props} />}
              status={stepStatus.first}
            />
          ) : (
            props.sidebarState.redirect_status === false &&
            props.authState.status && (
              <Step
                title="Login or Sign up"
                description={
                  <div>
                    {" "}
                    <br /> <br />{" "}
                  </div>
                }
                status={stepStatus.first}
              />
            )
          )}
          {(stepStatus.second === "wait" || stepStatus.second === "process") &&
          stepStatus.first === "finish" ? (
            <Step
              title="Address"
              description={<Address_checkout next={next_handler} />}
              status={stepStatus.second}
            />
          ) : (
            <Step
              title="Address"
              description={
                <div>
                  {" "}
                  <br /> <br />{" "}
                </div>
              }
              status={stepStatus.second}
            />
          )}
          {
            <Step
              title="payment"
              description={
                stepStatus.second == "finish" && <Payment_checkout />
              }
              status={stepStatus.third}
            />
          }
        </Steps>
      </section>
      {(cartStatus ) && (
        <section className={style.right}>
          <div className={style.cart_list}>
            <h5> Restaurant Name </h5>
            <ul>
              {props.cartState.cart.map((EachItem) => (
                <li>
                  <span>{EachItem.food_name}</span>
                  <span>
                    155 &nbsp; &nbsp;
                    <FontAwesomeIcon
                      icon={faMinusCircle}
                      onClick={(e) => {
                        props.remove_from_cart_handler(e.currentTarget.id);
                      }}
                      class={style_2.remove}
                      id={EachItem.food_id}
                    />
                  </span>
                </li>
              ))}
            </ul>
            <p>
              {" "}
              <span>Total</span> <span> 1125</span>
            </p>
            {cartStatus ? (
              <button> Order </button>
            ) : (
              <button> continue </button>
            )}
          </div>
        </section>
      )}
    </div>
  );
};
function mapStateToProps(state) {
  return {
    cartState: state.cartReducer,
    authState: state.authReducer,
    sidebarState: state.sidebarReducer,
  };
}
export default connect(mapStateToProps, {
  sidebarToggle,
  remove_from_cart_handler,
})(Checkout);

/*
	(<div className={style.Empty} > 

		   <img src={empty} />
		   <h2> Cart is Empty  </h2>
 		 </div>)
		 */
