import React, { Component } from "react";
import Header from "./Header";
import style from "../style/restaurant.module.css";
import food5 from "../images/food5.jpg";
import Filter from "./small/Filter";
// import Items from './small/Items'
import Items from "./small/Items";
import { connect } from "react-redux";
import { set_restaurant_id ,remove_from_cart_handler } from "../redux/actions";
import Restaurants_data from "../API/restaurants_data.json";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMinusCircle} from "@fortawesome/free-solid-svg-icons";
import {banner_effect , category_highLighter} from '../function/useScript'


class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant_data: {},
    };
  }

  componentDidMount() {
    banner_effect();
    category_highLighter();
    const id = this.props.match.params.restaurant_id;
    const data = Restaurants_data.data.filter(
      (EachRestaurant) => EachRestaurant.restaurant_id.toString() === id
    );
    console.log("check == ", data);
    this.setState((prevState) => ({
      restaurant_data: data[0],
    }));
    this.props.set_restaurant_id(id);
  }

  remove_from_cart (event) {
	  const id = event.currentTarget.id;
	  this.props.remove_from_cart_handler(id)
  }
  
  render() {
	  console.log("remove --> ",this.props.cartState.cart)
    return (
      <div className="main_2">
        <div className={style.restaurant_desc}>
          <Header className={style.relative} />
          <section className={style.banner}>
            <div className={style.banner_body}>
              <img src={this.state.restaurant_data?.imgSrc} alt="" />
              <div className={style.banner_body_data}>
                <h3>{this.state.restaurant_data?.restaurant_name} </h3>
                <span> Indian ,Biryani , fast Food , veg </span>
                <br /> <span>MG road , Burrabazar </span>
              </div>
            </div>
          </section>
          <section className={style.itemList}>
            <div className={style.itemType}>
              {/*  This is  visible on some break point*/}
              <ul>
                {this.state.restaurant_data.cat?.map((EachCategory,index) => {
                  return index==0 ? <li className={style.highlighter}> {EachCategory.category} </li> : <li> {EachCategory.category} </li>
                })}
              </ul>

              {/*  This is  visible on some break point*/}

              <div className={style.itemType_category}>
                <p>Filter</p>
                <Filter />
              </div>
            </div>
            <div className={style.items}>
              {/* Each itemBar */}

              {this.state.restaurant_data.cat?.map((EachCategory) => {
                return (
                  <Items data={EachCategory.menu} cat={EachCategory.category} />
                );
              })}
            </div>

            <div className={style.cart}>
              <h4>
                Cart
                <small> {this.props.cartState.cart.length} ITEMS </small>
              </h4>
              <ul>
                {this.props.cartState.cart.map(item =>{
					
				return (
                  <li>
                    <span>{item.food_name}</span>
				<span>155 &nbsp; &nbsp; <FontAwesomeIcon icon={faMinusCircle} onClick={this.remove_from_cart.bind(this)} class={style.remove} id={item.food_id}/> </span>
                  </li>
                )
				} 
				)}
              </ul>
              <h6>
                <span> Subtotal </span>
                <span> 810</span>
              </h6>
              <span> CHECKOUT </span>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cartState: state.cartReducer,
  };
}
export default connect(mapStateToProps, { set_restaurant_id ,remove_from_cart_handler })(Restaurant);
