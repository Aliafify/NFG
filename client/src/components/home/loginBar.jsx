import React, { useState} from "react";
import {Contain,Col} from '../styled-components/index.js'
import "./loginBar.css";
import Modal from "../modal/modal";
import Appointment from "./Appointment";
import Header from "../header/header"
import Logo from "../../icons/Logo.png"
import Login from "./login";
import SideNave from "./sideNave";

function LoginBar() {
  const [open, setOpen] = useState(false);//
  const [signup, setSignUp] = useState(false);//
  const [openSide, setOpenSide] = useState(false);//
  const onClickMenu=()=>{
     setOpenSide(true);
  }
  return (
    <>
      <SideNave open={openSide} onClose={()=>{setOpenSide(false)}} logo={Logo}/>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          setSignUp(false);
        }}
        width="80%"
        height="80%"
      >  
        <Contain border="0px" height="90%">
          <Col width="90%" fg="1" align="center" border='0px' justify="center">
            {!signup ? (
              <Login />
            ) : (
              <Contain border="0px" >
                <Col
                  fg="0"
                  align="center"
                  justify="center"
                  dir="column"
                  width='80%'
                >
                  <Appointment />
                </Col>
              </Contain>
            )}
          </Col>
        </Contain>
      </Modal>

      <Contain perfix='loginbar-cont'>
        <Col
          width="100%"
          perfix="login-btn-cont"
          border="0px"
          justify="space-around"
        >
          <Header 
             logo={Logo} 
             onClickMenu={onClickMenu}
             login={() => {
              console.log('Logged in')
              setOpen(true);
            }}
            signup={()=>{
              console.log('Signup completed')
              setOpen(true);
              setSignUp(true);
            }}
          />
        </Col>
        
      </Contain>
    </>
  );
}

export default LoginBar;
