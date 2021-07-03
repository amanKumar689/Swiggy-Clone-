import {SIDEBAR} from "./actionsType";
import {ADD_TO_CART} from "./actionsType";
import {SET_RESTAURANT_ID} from "./actionsType";
import {REMOVE_FROM_CART} from "./actionsType";
import {AUTH_TOGGLE}  from  "./actionsType"
export const sidebarToggle = (val,prop) => {
  return {
    type: SIDEBAR,
    status: val,
    component :prop || null
    
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

export const auth_handler = (user) =>{  // just like my hand --> just handle trigger 
	
	return  {
		type:AUTH_TOGGLE ,
        status:user==null ? false	:true ,
        user		
	}
	
}