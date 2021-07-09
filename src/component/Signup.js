import React, { useState } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import style from "../style/auth.module.css";
import axios from "axios";
import qs from "qs";
import * as actions from "../redux/actions";
import { useHistory } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";


const Signup = (props) => {
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
 const [Loader,setLoader] = useState(false)
  const history = useHistory();

  function signup_handler() {
	  setLoader(true)
    console.log(username, email, password);
    const url = "http://localhost:3030/signup";
    const options = {
      method: "POST",
      header: { "content-type": "application/x-www-form-encoded" },
      data: qs.stringify({ email, username, password }),
      url,
    };

    axios(options)
      .then((res) => {
        if (!res.data.token) {
          console.log(res.data.message);
        } else {
          console.log("TOKEN --> ", res.data.token);
          localStorage.setItem("token", res.data.token); //  Token store to localstorage
          props.auth_handler(true);

          props.sidebarToggle(false);
          props.sidebarState.redirect_status && history.push("/restaurants");
        }
      })
      .catch((err) => {
        console.log(" error -- >", err);
      });
  }
  return (
    <div className={style.signup}>
      <header className={style.signupHeader}>
        SIGN UP{" "}
        <sub>
          or{" "}
          <span
            onClick={() => {
              props.sidebarToggle(true, "L");
            }}
          >
            {" "}
            login to your account{" "}
          </span>
        </sub>
      </header>
      <form className={style.signupForm} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Phone number"
          variant="outlined"
        />

        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          type={"email"}
          variant="outlined"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="password"
          type={"password"}
          variant="outlined"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          className={style.continue}
          color={"orange"}
          variant="contained"
          onClick={!Loader && signup_handler}
        >{Loader ?  (<PropagateLoader loading={true} color={'white'} css={{marginBottom:"10px"}}/>) : 'Continue'}
       
        </Button>
      </form>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    sidebarState: state.sidebarReducer,
  };
}
export default connect(mapStateToProps, actions)(Signup);
