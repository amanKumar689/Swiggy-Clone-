import {SIDEBAR} from "./actionsType";
import {ADD_TO_CART} from "./actionsType";
import {SET_RESTAURANT_ID} from "./actionsType";
import {REMOVE_FROM_CART} from "./actionsType";
import {AUTH_TOGGLE}  from  "./actionsType"



export const sidebarToggle = (val,prop ,bool) => {
	console.log('trigger == ',bool)
  return {
    type: SIDEBAR,
    status: val,
    component :prop || null ,
	redirect_status:bool!=null ? bool : true
    
  };
};

export const cart_store_handler = (data) =>{
return {
    type:ADD_TO_CART,
    data 
  }

}

export const set_restaurant_id = (id) =>{
	
return {
	type:SET_RESTAURANT_ID ,
	id
}	
	
}
export const remove_from_cart_handler = (id)=> {
	
	
	
	return {
		type:REMOVE_FROM_CART ,
		id
	}
	
}

export const auth_handler = (status) =>{  // just like my hand --> just handle trigger 
	
	 console.log(" called me bro ",status)
	
	return  {
		type:AUTH_TOGGLE ,
        status
	}
	
}