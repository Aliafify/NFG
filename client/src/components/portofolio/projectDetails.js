import React from 'react'
import {BsBookmarkCheckFill,BsCodeSlash,BsPersonCircle,BsFillCollectionFill} from 'react-icons/bs'
function Details({p}) {
    
  return (
    <div className='details-cont'>
        <span><BsBookmarkCheckFill style={{margin:'0 10px 0 0'}} color='#ffb400'/>Project: {p.type}</span>
        <span><BsCodeSlash style={{margin:'0 10px 0 0'}} color='#ffb400' />Languages: {p.tools}</span>
        <span><BsPersonCircle style={{margin:'0 10px 0 0'}} color='#ffb400' />Client: {p.client}</span>
        <span><BsFillCollectionFill style={{margin:'0 10px 0 0'}} color='#ffb400' />
        Perview: <a href= {p.perview}>{p.perview}</a></span>
    </div>
  )
}

export default Details