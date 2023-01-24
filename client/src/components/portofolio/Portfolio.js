import React, { useState } from 'react'
import Header from '../About/header'
import Gallary from './gallary'
import cover from '../../icons/po.jpeg'
function Portfolio({light}) {

  // Note delete const projects after adding your new projects
  
  const projects = [{cover:cover,client:'Envato', perview:'demo',tools:'html , css,javascript,React.js ',name:"portfolio",type:"website",discription:"norm kladmkl nsl jns sjd sljd lsij "},
  {cover:cover,client:'Envato',perview:'demo',tools:'html , css,javascript,React.js ',name:"portfolio",type:"portfolio",discription:"norm kladmkl nsl jns sjd sljd lsij "},
  {cover:cover,client:'Envato',perview:'demo',tools:'html , css,javascript,React.js ',name:"portfolio",type:"portfolio",discription:"norm kladmkl nsl jns sjd sljd lsij "},
  {cover:cover,client:'Envato',perview:'demo',tools:'html , css,javascript,React.js ',name:"portfolio",type:"portfolio",discription:"norm kladmkl nsl jns sjd sljd lsij "},
  {cover:cover,client:'Envato',perview:'demo',tools:'html , css,javascript,React.js ',name:"portfolio",type:"portfolio",discription:"norm kladmkl nsl jns sjd sljd lsij "},
  {cover:cover,client:'Envato',perview:'demo',tools:'html , css,javascript,React.js ',name:"portfolio",type:"portfolio",discription:"norm kladmkl nsl jns sjd sljd lsij "} 
]
  const [p, setP] =useState([...projects]);
  return (
<>
<Header light={light} header={{word1:"my" ,word2:"portfolio",bgtitle:"portfolio"}}/>
<hr/>
<Gallary light={light} projects={p} />
</>
  )
}

export default Portfolio