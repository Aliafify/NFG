import React,{ useState, useRef,useEffect } from 'react'
import { useDispatch ,useSelector} from "react-redux";
import { logIn } from "../../actions/login&register.js";
import {  useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(mapStateToProps)
  console.log(user)
  useEffect(()=>{
    if(user.auth){
      if(user.role==='admin'){
        navigate('/admin');
        console.log('admin')
      }
      if(user.role==='client'){
        console.log('client')
        navigate('/client');
      }
    }
  },[user])
    const email = useRef();
    const pass = useRef();
    const onSubmit = (e) => {
        e.preventDefault();
        const data = { email: email.current.value, password: pass.current.value };
        dispatch(logIn(data));
      };
  return (
    <form className="login-form" onSubmit={onSubmit}>
              <input
                type="email"
                ref={email}
                className="login-input email"
                placeholder="Email"
              />
              <input
                type="password"
                ref={pass}
                className="login-input pass"
                placeholder="password"
              />
              <input type="submit" className="login-input submit-login" />
            </form>
  )
}
function mapStateToProps({loggedUser}){
  return {...loggedUser.user,auth:loggedUser.auth}
}
export default Login  