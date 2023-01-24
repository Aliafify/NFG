import { useState,useEffect } from "react";
import {Route,BrowserRouter,Routes} from "react-router-dom"
import About from "./components/About/About";
// import Blog from "./components/blog/blog";
 import Schedual from "./components/admin/schedual.jsx";
import Dashboard from "./components/dashboard";
import Home from "./components/home/Home";
import Admin from "./components/admin/admin.jsx";
import Clients from "./components/admin/clients.jsx"
import {useDispatch,useSelector } from 'react-redux';
import {intializeLogIn} from './actions/login&register'
import {Inetialize_Appointments}from './actions/appointmens';
function App() {
   const dispatch = useDispatch();
   useEffect(()=>{
     dispatch(intializeLogIn())
     dispatch(Inetialize_Appointments())
   },[])
   const {user}= useSelector(mapStateToProps);
  return (
   
      <BrowserRouter>
      <Routes>
    <Route  path="/" element={<Dashboard />}>
      <Route index element={<Home />}/>
      <Route path="home" element={<Home  />}/>
      <Route path="about" element={<About/>}/>

       </Route>
       {
      user.role==='admin'&&
       <Route path="/admin" element={<Admin/>}>
        <Route path="schedual" element={<Schedual/>}/>
       <Route path="clients" element={<Clients/>}/>
       </Route>
       }
       {}
    </Routes>
      </BrowserRouter>
  );
}
function mapStateToProps({loggedUser}) {
  const user = {...loggedUser.user,auth:loggedUser.auth}
  return {user}
}
export default App;
