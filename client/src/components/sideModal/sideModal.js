import React from "react";
import ReactDOM from "react-dom";
import './modal.css'
import {AiOutlineClose} from 'react-icons/ai'
import {Contain,Col} from "../styled-components/index";
// const portal = ReactDOM.createPortal(document.getElementById('portal'));
// portal.render(<Modal></Modal>)
function SideModal({ open, onClose, children,width,height,icon }) {

  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="side-modal-overlay" onClick={()=>open}></div>

      <div className="side-modal-cont left-motion" style={{width:`${width}`,height:`${height}`}}>
           <Contain height='15vh'>
            <Col width='20%' >

            <AiOutlineClose className="side-close" onClick={onClose} color="#fff" size={'1.1em'}/>
            </Col>
            <Col width='80%' >
               <img src={icon} alt='NFG-logo' width='130px' />
            </Col>
           </Contain>
            
       {children}
      </div>
    </>,
    document.getElementById("side-panel")
  );
}

export default SideModal;
