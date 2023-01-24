import React from 'react'
import {Contain,Col} from '../styled-components/index'
import "./topBar.css";
import LogOut from '../header/logout';
function TopBar(){
  return (
    <>
    <Contain perfix=' zero-margin'><Col fg='1'>
          <div className='container top-bar '>
            <Contain>
                <Col width='30%'>
                </Col>
                <Col width='40%'></Col>
                <Col width='30%'>
                    <LogOut/>
                </Col>
            </Contain>
             </div>
          </Col>
          </Contain>
    </>
  )
}

export default TopBar