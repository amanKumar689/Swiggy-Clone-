// MODULE
import React, { useEffect  ,useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./redux/actions";
import axios from "axios";
//   COMPONENT
import Restaurants from "./Route/Restaurant";
import Home from "./Route/Home";
import Sidebar from "./component/Sidebar";
import Restaurant from "./component/Restaurant";
import Search from "./Route/Search";
import Checkout from "./Route/Checkout";
import Cart from "./component/small/Cart";

const Default_width = window.innerWidth;


function Not_Found() {
	console.log('Now found componennt')
	return (<h1>PAGE  NOT FOUND  </h1>) 
}


const SwiggyApp = (props) => {
	
  const [Is_mobile_version,set_Is_mobile_version] = useState(null)
  
  useEffect(()=>{ 
 console.log('inside useEffect')
 let Ismounted = true
	function mobile_or_desktop() {
		
   if(window.innerWidth<=700) 
   {  
    console.log('<--left')
  !Is_mobile_version && set_Is_mobile_version(true)
   }	
    else 
	{
    console.log('right -->')
  Is_mobile_version && set_Is_mobile_version(false)
		
	}
	
	}
   
  window.addEventListener('resize' ,mobile_or_desktop);
  mobile_or_desktop()
  return  ()=>{Ismounted =false;window.removeEventListener('resize',mobile_or_desktop);console.log('swiggy unmounted')}
  
  },[Is_mobile_version])
  
  
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const url = "http://localhost:3030/login";
    const options = {
      method: "POST",
      headers: {
        "content-type": "text/plain",
        Authorization: token != null ? `Bearer ${token}` : null,
      },
      url,
      withCredentials: true,
    };
    axios(options)
      .then((res) => {
        if (!res.data.status) {
          console.log("sat", res.data.user);
          props.auth_handler(false);
        } else {
          console.log("TOKEN -->", res.data.token);

          props.sidebarToggle(false);
          props.auth_handler(true);
          history.push("/restaurants");
        }
      })
      .catch((err) => {
        console.log("something gone wrong", err);
      });
  }, []);
  console.log('Is_mobile_version',Is_mobile_version)
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/restaurants" component={Restaurants} />
        <Route excat path="/search" component={Search} />
        <Route
          exact
          path="/restaurants/:restaurant_id"
          component={Restaurant}
        />

         <Route excat path="/checkout" component={Checkout} />
			<Route exact path="/cart" component={(Is_mobile_version!=null ) && Is_mobile_version ? Cart : Not_Found} /> 	
		
      </Switch>

      {props.sidebarState.status && <Sidebar />}
    </>
  );
};

function mapStateToProps(state) {
  return {
    sidebarState: state.sidebarReducer,
    cartState: state.cartReducer,
  };
}

export default connect(mapStateToProps, actions)(SwiggyApp);
