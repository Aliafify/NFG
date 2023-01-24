import React,{useState} from 'react'
import SidNav from './sideNav'
import "./admin.css"
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Inetialize_Products } from '../../actions/product'
import {Contain,Col} from '../styled-components/index'
import TopBar from './topBar';
// import {Inetialize_Appointments} from "../../actions/booking.js";
function Admin() {
  const dispatch = useDispatch();
   useEffect(()=>{
     dispatch(Inetialize_Products())
    //  dispatch(Inetialize_Appointments())
   },[])

   const [openNav,setOpenNav] = useState(true);

  return (
    <Contain height={'100vh'} perfix='admin-cont'>
      <Col dir='column' width={openNav?'20%':'7%'} perfix='open-side-menu'>
      
      <SidNav setOpen={setOpenNav} open={openNav}/>
      
      </Col>
      <Col width={'80%'}  align='flex-start' justify='center' fg='1' dir='column' >
        <div className='container'>
      <TopBar/> 
      <Outlet/>
      </div>
      </Col>
    </Contain>
  )
}

export default Admin