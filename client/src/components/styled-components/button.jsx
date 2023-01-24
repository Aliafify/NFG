import React from 'react'

function Button({onClick,name,width,hight,bgColor,icon,perfix}) {
    const styleSheet = {
      backgroundColor:bgColor,
        width:width,
        hight:hight,

    }
  return (
    <button onClick={onClick}  style={{styleSheet}} className={`btn ${perfix}`}>
       {name}
       {icon}
    </button>
  )
}

export default Button