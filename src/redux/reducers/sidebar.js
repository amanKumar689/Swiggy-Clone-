import {SIDEBAR } from '../actionsType'
const intialState = {
    status: false,
    component: null
  };
  
function sidebar_handle(state = intialState, action) {
    switch (action.type) {
      case SIDEBAR:
        return {
          ...state,
          status: action.status,
          component:action.component
        };
  
      default:
        return state;
    }
  }
  export default sidebar_handle