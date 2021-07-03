import React ,{useState} from 'react'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import style from '../style/auth.module.css'
import axios from 'axios'
import qs from 'qs'
import * as actions from '../redux/actions'
import {useHistory} from 'react-router-dom'
const Signup = (props) => {
	
	 const [email,setEmail] = useState(null)
	 const [username,setUsername] = useState(null)
	 const [password,setPassword] = useState(null)
	
	const history = useHistory()
	
	function signup_handler() {
		console.log(username, email,password)
     const url = 'http://localhost:3030/signup'		
		 const options = {
			 method:"POST" ,
			 header:{'content-type':'application/x-www-form-encoded'} ,
			 data:qs.stringify({email,username,password}) ,
			 url
		 }
		
		 axios(options)
		 .then((res)=>{
			 console.log("from server --- ",res)
			 props.auth_handler(res.data.data);
			 props.sidebarToggle(false);
			 history.push('/restaurants')
			 
		 })
		 .catch((err)=>{
			 
			 console.log(" error -- >" , err)
			 
		 })
		
	}
    return (
        <div className={style.signup}>
           <header className={style.signupHeader}> 
           SIGN UP <sub>or <span onClick={()=>{props.sidebarToggle(true,'L')}}>  login to your account </span></sub>
           </header>
           <form className={style.signupForm} noValidate autoComplete="off">
  <TextField id="outlined-basic" label="Phone number" variant="outlined" />
  
  <TextField id="outlined-basic" label="Name" variant="outlined"  onChange={(e)=>{ setUsername(e.target.value)}}/>
  <TextField id="outlined-basic" label="Email" type ={"email"} variant="outlined" onChange={(e)=>{ setEmail(e.target.value)}}/>
  <TextField id="outlined-basic" label="password" type={"password"}variant="outlined" onChange={(e)=>{ setPassword(e.target.value)}}/>
  <Button className={style.continue} color={'orange'} variant="contained" onClick={signup_handler} > CONTINUE </Button>
</form>
        </div>
    )
}

export default connect(null,actions)(Signup)
