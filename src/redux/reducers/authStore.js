import {AUTH_TOGGLE} from '../actionsType' 

const  initialState = {
	
	status:false ,
	user_name: null
}

export default  function  authReducer(state = initialState,action) {


	 switch(action.type) {
		 
		 case AUTH_TOGGLE :
		 
		  return {
			  status:action.status 
		  } 
		  default :
		  return state
		 
	 }
	
	
}