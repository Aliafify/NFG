import React from 'react'

export function Col({perfix,width,fg,border,align,justify,dir,children}) {

  const styleSheet = {
    width:width,
    flexGrow:fg, 
    border:`${border?border:'0'} solid #333`,   
    alignItems: align,
    justifyContent:justify ,
    flexDirection:dir,
    
}
  return (
   <div className={`col ${perfix}`} style={styleSheet}>
{children}

   </div>
  )
}

export default Col