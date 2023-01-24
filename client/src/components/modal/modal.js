import React from "react";
import ReactDOM from "react-dom";
import './modal.css'
import {AiFillCloseSquare} from 'react-icons/ai'
// const portal = ReactDOM.createPortal(document.getElementById('portal'));
// portal.render(<Modal></Modal>)
function Modal({ open, onClose, children, light,width,height }) {


  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay" onClick={()=>open}></div>

      <div className="modal-cont" style={{width:`${width}`,height:`${height}`}}>
        <button id="close" 
          onClick={onClose}>
            <AiFillCloseSquare className="close-icon" color="red" size={'3em'}/>
            </button>
       {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
