import React from "react";
import "./nav.css";
import NavItem from "./NavItem";
import {BsHouseDoorFill,BsFillPersonFill,BsBriefcaseFill,BsFillChatDotsFill} from 'react-icons/bs'
import {FaRegClone} from 'react-icons/fa'


function Nav() {
  const menuItems = [
    { name: "home", path: <BsHouseDoorFill color="#fff"/> ,to:"/home" },
    { name: "about", path: <BsFillPersonFill color="#fff"/>,to:"/about" },
    { name: "portfolio", path: <BsBriefcaseFill color="#fff"/> ,to:"/portfolio"},
    { name: "contact", path: <BsFillChatDotsFill color="#fff"/> ,to:"/contact"},
    { name: "blog", path: <FaRegClone color="#fff"/> ,to :"/blog" },
  ];
  return <>
  
  <div className="nav" >

    {menuItems.map((m,i)=>
    <NavItem 
      key={i} 
      data={m}
       /> 
    )}
  
  </div>
  </>
}

export default Nav;
