import {combineReducers} from 'redux'
import reducer_1 from './reducers/sidebar'
import reducer_2 from './reducers/cartStore'
import reducer_3 from './reducers/authStore'
export default combineReducers({
    sidebarReducer:reducer_1,
    cartReducer:reducer_2 ,
	authReducer :reducer_3
})