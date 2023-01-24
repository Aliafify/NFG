import React from 'react'
import "./section.css";
function Section(props) {
  return (
    <section id='section'>
       {props.children}
    </section>
  )
}

export default Section