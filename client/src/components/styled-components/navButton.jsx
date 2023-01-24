import React from 'react'
import { NavLink } from 'react-router-dom'

function NavButton({name,to,bgColor,width,activeColor,nonActiveColor,className}) {
  return (
   <>
            <NavLink className={className} style={({ isActive }) => ({
          backgroundColor: isActive ? {activeColor} : {nonActiveColor},
          opacity: isActive ? 1 : "",
          
          width:width
        })} to={to} >{name}</NavLink>
           
   </>
  )
}

export default NavButton