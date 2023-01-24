import React,{useState} from 'react'
import {BsFillCaretDownFill,BsFillCaretUpFill} from "react-icons/bs"
import "./showHide.css"
function ShowHideBtn({icon,element,name,width}) {
  
    const [show, setShow] = useState(false);

  return (<>
          <div className='sh-h-btn' style={{width:width}}>
          <button className = 'cal-button' role='button' onClick={()=>setShow(!show)}>
              <span> {name} </span>
               <span className='icon-1'>
               {icon}
               </span>
           { !show?   <i className='icon-2'>
                <BsFillCaretDownFill/>
                </i>:
                <i className='icon-3'>
                <BsFillCaretUpFill/>
                </i>}
          </button>
          {show?
          <div className='btn-element' >
         {element}
          </div>:null}
          </div>
        </>
        
    )
}

export default ShowHideBtn