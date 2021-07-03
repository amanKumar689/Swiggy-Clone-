import {ADD_TO_CART} from '../actionsType'
import 	{SET_RESTAURANT_ID} from '../actionsType'
import 	{REMOVE_FROM_CART} from '../actionsType'
const intialState = {
  store: "this contain foods of a specific restaurant",
  current_restaurant_id : null ,
  restaurant_id: null,
  restaurant_name: null,
  cart:[]
};

function cartStore_handler(state= intialState, action ) 
{
// Test 1 --> just add item don't look for specific restaurant

     switch (action.type) {
         case ADD_TO_CART:
         

     return	state.current_restaurant_id === state.restaurant_id  ? {
                ...state ,
				cart:[
                  ...state.cart ,
                   {
                       food_name : action.data.food_name ,
                       count:1 ,
					   food_id:action.data.food_id ,
					   food_price:action.data.food_price || null
                    }
                ] 
             } :
			 {
				 
				 ...state ,
				 restaurant_id :state.current_restaurant_id ,
				   cart:[
				 { 
				       food_name : action.data.food_name ,
                       count: 1   ,
					   food_id: action.data.food_id ,
					    food_price:action.data.food_price || null
			 }
					      ]
			 }
			 case SET_RESTAURANT_ID :
			 return {
				 ...state ,
				 current_restaurant_id:action.id 
				 
			 }
			 case REMOVE_FROM_CART :
			
			 return {
			      ...state ,
                cart: state.cart.filter(item=>item.food_id.toString()!=action.id)				  
			 }
             default : return state
     
}
}



export default cartStore_handler