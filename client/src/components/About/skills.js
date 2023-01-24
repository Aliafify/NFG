import React from 'react'
import CircleProgress from './circleProgress'

function Skills({skills,light}) {
  return (<>
    <h3 className='section-header'> MY SKILLS
</h3>
    <section className='skills-section' >
       {skills.map((s,i)=>
        <CircleProgress key={i} value={s.value} name={s.name} light={light}/>)} 
    </section></>
  )
}

export default Skills