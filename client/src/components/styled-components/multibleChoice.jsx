import React from "react";
import "./multibleChoice.css";
function MultibleChoice({ options = [] ,onChoose,width,name,icon}) {
  return (<>

    <select aria-label='choose-time' name='choose' className='multi-ch' onChange={(event)=>onChoose(event.target.value)} style={{width:width}}>
      <option className='multi-ch-op' value={null}> <span>{name}</span> <span>{icon}</span></option>
      {options.map((option, index) => (
        <option key={index} value={option} className='multi-ch-op'>
          {option}
        </option>
      ))}
    </select></>
  );
}

export default MultibleChoice;
