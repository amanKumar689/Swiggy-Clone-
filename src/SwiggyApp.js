// MODULE
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";


//   COMPONENT
import Restaurants from "./Route/Restaurant";
import Home from "./Route/Home";
import Sidebar from './component/Sidebar'
import Restaurant from './component/Restaurant'
import Search from './Route/Search'
import Checkout from './Route/Checkout'
const SwiggyApp = (props) => {
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

export default connect(mapStateToProps,null)(SwiggyApp);