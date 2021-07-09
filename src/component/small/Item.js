import React ,{useEffect,useState} from "react";
import style from "../../style/restaurant.module.css";
import food from "../../images/food3.jpg";
import { cart_store_handler } from "../../redux/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import PropagateLoader from "react-spinners/ClipLoader";

const Item = (props) => {
	const [added,setAdded] =useState(false)
  const history = useHistory();
  
  
  useEffect(()=>{
	  	  setTimeout(()=>{
	props.data.food_id == props.cart_info[props.cart_info.length - 1]?.food_id &&  setAdded(false) 
		  
	  },1000)
	  	  
  },[props.cart_info])
  
  function add_cart() {
	  setAdded(true)
    props.cart_store_handler(props.data );
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
        <img src={food} alt="" />
        <span className="add" onClick={!added ? add_cart:undefined}>
			{ !added ? ('ADD') : (<PropagateLoader loading={true} size={25} color={'green'} />) }
        </span>
      </div>
      <hr />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    cartState: state.cartReducer,
  };
}

export default connect(mapStateToProps, { cart_store_handler })(Item);
