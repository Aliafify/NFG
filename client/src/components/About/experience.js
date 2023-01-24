import React from 'react'
import "./experience.css";
import Bag from "../../icons/bagG.svg";

const Ex = ({data})=>{
    return(
        <>
        <div className="ex-card">
        <img width="40px" height="40" style={{background:"#ffb400" , borderRadius:"20px" ,padding:"3px"}} src={Bag}></img>
           <span className='ex-date'>
           {data.date}
           </span>
           <h3 className='ex-header'> {data.title}  < span>- {data.subTitle}</span></h3>
           <p className='ex-content'>
           {data.content}
           </p>
        </div>
        </>
    )
}
function Experience({exp}) {
  return (<>
        <h3 className='section-header'> EXPERIENCE & EDUCATION
</h3>
    <section  className='ex-cont'>
{exp.map((e,i)=><Ex key={i} data={e}/>)}
     
    </section></>
  )
}

export default Experience