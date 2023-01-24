import React from 'react';
import './style.css';
import {useSelector} from 'react-redux';

export const Contain=({children,border,perfix,bgColor,bgImage,height,color}) =>{
     
  const mode = useSelector(mapStateToProps);
 const styleSheet = {
    border:`${border?border:'0'} solid #333`,
    backgroundColor:bgColor,
    backgroundImage:bgImage,
    height:height,
    color:!color?mode.color:color
 }
  return (
    <div className={`stcontainer ${perfix}`}  style={styleSheet}>
        {children}
    </div>
  )
}
function mapStateToProps({mode}){
  return {
    mode
  }
}
