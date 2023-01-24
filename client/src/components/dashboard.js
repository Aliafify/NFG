import React from 'react'
import { Outlet } from 'react-router-dom'
import LoginBar from "./home/loginBar.jsx"
// import {useDispatch} from 'react-redux';
import Footer from "./footer/footer.jsx"
function Dashboard({light,setLight}) {
  // const dispatch = useDispatch();

  return (
    <div className='glopal-routes'>
      
   <LoginBar />
    
    <Outlet/>

    <Footer/>
    </div>
  )
}

export default Dashboard;