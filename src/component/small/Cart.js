import {useState ,useEffect} from 'react'
import style from "../../style/checkout.module.css";
import {connect } from 'react-redux'
import  * as actions from '../../redux/actions'
import style_2 from "../../style/restaurant.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle} from "@fortawesome/free-solid-svg-icons";
import {useHistory} from 'react-router-dom'
const Cart =(props) =>{
	
  const [cartStatus, setCartStatus] = useState(false);
	  const history = useHistory()
	  useEffect(()=>{
		  console.log('cart is mounted ')
		  return ()=>{
			  console.log('cart is unmounted ')
		  }
		  
	  },[])
	return ( <section className={style.right}>
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
              <button onClick={()=>{history.push('/checkout')}}> Checkout </button>
            )}
          </div>
        </section>)
}
function mapStateToProps(state) {
	
	return {
		cartState:state.cartReducer
		
	}
	
}
export default connect(mapStateToProps,actions)(Cart)