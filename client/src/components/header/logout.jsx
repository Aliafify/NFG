import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Log_Out } from '../../actions/login&register'
import {FiLogOut} from 'react-icons/fi';
import "./logout.css";
function LogOut() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onClick = ()=>{
        dispatch(Log_Out())
        navigate('/')
    }
  return (
    <>
    <button className='logout-btn' onClick={()=>onClick()}>logout <i><FiLogOut /></i></button>
    </>
  )
}

export default LogOut