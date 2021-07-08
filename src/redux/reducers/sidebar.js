import {SIDEBAR } from '../actionsType'
const intialState = {
    status: false,
    component: null ,
	redirect_status:true
  };
  
function sidebar_handle(state = intialState, action) {
	console.log('reducer' , action.redirect_status)
    switch (action.type) {
      case SIDEBAR:
        return {
          ...state,
          status: action.status,
          component:action.component ,
		  redirect_status: action.status!=false ? action.redirect_status : state.redirect_status
        };
  
      default:
        return state;
    }
  }
  export default sidebar_handle