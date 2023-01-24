import React from 'react'

function Card({value, name,light}) {
  return (
    <div className='card-cont'>
        <h1 className='scolor-font card-num'>
            { value}<sup>+</sup>
        </h1>
        <h3 className='card-value'> 
        <sup className={light?"font-sun-mode-low":""}>
            ـــــــــــ
            </sup>&nbsp;
        {name}
        </h3>

    </div>
  )
}

export default Card