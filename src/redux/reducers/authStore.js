import {AUTH_TOGGLE} from '../actionsType' 

const  initialState = {
	
	status:null ,
	user: null
}

export default  function  authReducer(state = initialState,action) {
	

	 switch(action.type) {
		 
		 case AUTH_TOGGLE :
		 
		  return {
			  status:action.status ,
			  user:action.user
		  } 
		  default :
		  return state
		 
	 }
	
	
}