import React from 'react'
import "./circle.css";
function CircleProgress({value,name,light}) {
  const ratio = (value/100)*380
  return (
    <div className={`box ${light?"font-sun-mode":" "}`}>
        <div className='percent'>
            <svg>
                <circle data-percentag="190" cx="70" cy="70" r="60" >

                </circle>
                <circle style={{strokeDashoffset:ratio}} cx="70"  cy="70"  r="60" >

</circle>
            </svg>
            <div className={`number ${light?"font-sun-mode":" "}`}>
              <h2>{value} <span>%</span></h2> 
            </div>
        </div>
            <h3 className={`test ${light?"font-sun-mode":" "}`} >{name}</h3>
        
    </div>
  )
}

export default CircleProgress