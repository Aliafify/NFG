import React from 'react'
import Card from './card'

function Cards({data,light}) {
    
  return (
    <div className='cards-cont'>
        {data.map((d,i)=><Card key={i} value={d.value} name={d.name} light={light}/>)}
      
    </div>
  )
}

export default Cards