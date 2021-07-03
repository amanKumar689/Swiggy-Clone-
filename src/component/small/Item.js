import React from 'react'
import style from '../../style/restaurant.module.css'
import food from '../../images/food3.jpg'
import {cart_store_handler} from '../../redux/actions'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
const Item = (props) => {
    const history = useHistory()
  function add_cart() {

       props.cart_store_handler(props.data)
  }
    return (
        <div className={style.item}>
        <div className={style.itemData}>
       
          <br />
          <span>
		  {props.data.food_name} <br /> {props.data.price}
          </span>
        </div>
        <div className={style.addBtn}>
          <img src={food} alt=""/>
          <span className="add" onClick={add_cart}>ADD</span>
        </div>
        <hr />
      </div>
    )
}

function mapStateToProps (state) {
	
	return {
		cartState:state.cartReducer
	}
	
}

export default connect(mapStateToProps,{ cart_store_handler})(Item)
