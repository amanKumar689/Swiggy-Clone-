import React ,{useState} from "react";
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import style from "../style/auth.module.css";
import * as actions from '../redux/actions'
import axios from 'axios'
import qs from 'qs'
const Login = (props) => {
	const [ email , setEmail] = useState(null)
	const [password,setPassword] = useState(null);
	const history = useHistory()
function loginHandler() {

	const url = 'http://localhost:3030/login'
	const options = {
		method:'POST' ,
		headers:{'content-type':'application/x-www-form-urlencoded'} ,
		data: qs.stringify({email , password} ),
		url
	}
	axios(options).then((res)=>{
		
			 if(!res.data.token) 
			 {
				 console.log(res.data.message)
			 }
			 else 
			 {
			 
		 props.sidebarToggle(false)   // closing time 
		 	 localStorage.setItem('token',res.data.token)   
		
		 props.auth_handler(true)
	props.sidebarState.redirect_status &&	history.push('/restaurants')
			 }
	}).catch(err=>{
	console.log('something gone wrong',err)
	})
} 	
	
  return (
    <div className={style.login}>
      <header className={style.loginHeader}>
        LOGIN{" "}
        <sub>
          or <span onClick={()=>{ props.sidebarToggle(true,'S')}}> create new account !</span>
        </sub>
      </header>
      <form className={style.loginForm} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
		  onChange={(e)=>{ setEmail(e.target.value) } }
        />
        <TextField
          id="outlined-basic"
          label="password"
          type={"password"}
          variant="outlined"
		   onChange={(e)=>{ setPassword(e.target.value) } }
        />
        <Button
 		   className={style.continue} 
	       color={"orange"}
		   variant="contained"
		   onClick={loginHandler} 
		    >
           
          CONTINUE 
        </Button>
      </form>
    </div>
  );
};
function mapStateToProps (state) {
	
	return { 
	  sidebarState:state.sidebarReducer
	 }
}
export default connect(mapStateToProps,actions)(Login);
