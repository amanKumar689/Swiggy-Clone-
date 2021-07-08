// MODULE
import React ,{useEffect}from "react";
import { BrowserRouter as Router, Switch, Route ,useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from './redux/actions'
import axios from 'axios'
//   COMPONENT
import Restaurants from "./Route/Restaurant";
import Home from "./Route/Home";
import Sidebar from './component/Sidebar'
import Restaurant from './component/Restaurant'
import Search from './Route/Search'
import Checkout from './Route/Checkout'
const SwiggyApp = (props) => {
	const history = useHistory(); 
	useEffect(()=>{
		
		
const token = localStorage.getItem('token')
	const url = 'http://localhost:3030/login'
	const options = {
		method:'POST' ,
		headers:{
			'content-type':'text/plain' ,
		'Authorization':token!=null ? `Bearer ${token}` : null
		 }  ,
		url ,
		withCredentials:true
	}
	axios(options).then((res)=>{
		
			 if(!res.data.status) 
			 {
				 console.log("sat",res.data.user)
				 props.auth_handler(false)
				  
			 }
			 else 
			 {
				 console.log("TOKEN -->",res.data.token)
			 
		 props.sidebarToggle(false)
		 props.auth_handler(true)
		history.push('/restaurants')
			 }
	}).catch(err=>{
	console.log('something gone wrong',err)
	})
	},[])
  return (
    <>
        <Switch>
		
		
		
          <Route exact path="/" component={Home} />
          <Route exact path="/restaurants" component={Restaurants} />
          <Route excat path ='/search' component={Search} />
          <Route exact path="/restaurants/:restaurant_id" component={Restaurant} />
          <Route excat path ='/checkout' component={Checkout} />
         </Switch>
     
      { props.sidebarState.status && <Sidebar/> }
    </>
  );
};

function mapStateToProps (state) {
  return {
    sidebarState:state.sidebarReducer,
        cartState:state.cartReducer
  }
} 

export default connect(mapStateToProps,actions)(SwiggyApp);