import React,{useState} from "react";
import "./sidNav.css";
import Logo from "../../icons/Logo.png";
import {  NavLink } from "react-router-dom";
import {Contain,Col} from "../styled-components/index.js";
import {IoSettingsOutline} from "react-icons/io5"
import {AiOutlineMenuFold,AiOutlineMenuUnfold,AiOutlineFieldTime} from "react-icons/ai"
import {MdOutlineSupervisorAccount,MdTimeline} from "react-icons/md";
import {FaFileSignature} from 'react-icons/fa';
const onChoose =(e,p,c)=>{ //
    let arr = document.querySelectorAll(`.${c}`);
    arr.forEach(a=>{
      a.classList.remove(p);    
    });
    if(e.target.className.includes(p)){
      e.target.classList.remove(p);     
    }
    if(!e.target.className.includes(p)){    
      e.target.classList.add(p);   
    } 
}

const SidNav = ({setOpen,open})=> {
    const taps = [
      {name:"Schedual",
      path:"schedual",icon:<AiOutlineFieldTime/>},
      {name:"Appointments",path:"appointments",icon:<MdTimeline/>},
      {name:'certifications',path:'cetifications',icon:<FaFileSignature/>},
      {name:"clients",path:"clients",icon:<MdOutlineSupervisorAccount/>},
      {name:"settinge",path:"settinge",icon:<IoSettingsOutline />},
    ];
    
    
    return(
        <>
        <div className="sidnav ">
           
          <Contain>
            {open&&<Col fg='1'>
        <img src={Logo} width='70px' className="admin-nav-logo" /> 
        </Col>}

            <Col width='50px' perfix='quench-icon'><i onClick={()=>setOpen(!open)}>{open?<AiOutlineMenuFold/>:<AiOutlineMenuUnfold/>}</i></Col>
        </Contain>

        <ul className="side-menu">
           {taps.map((t,index)=>
               <li key={index}  className="menu-item">
                   <NavLink className="side-link"   to={t.path}><i>{t.icon}</i> {open?t.name:null}</NavLink>
               </li>
              
)}
        </ul>
        </div>
        </>
    )
}
export default SidNav;