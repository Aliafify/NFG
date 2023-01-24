import React from 'react'

function Header({header,light}) {
  return (
    <section>
    <div className='aboute-header'>

    <h1 className={`header scolor-font ${light?"header-title-top":""}`}>
   <span className={light?"font-sun-mode":""}>
  {header.word1} &nbsp;
   </span>
    {header.word2}

   </h1>
        <h1 className={`title-bg  ${light?"header-title-bg-sun":"header-title-bg-night"}`}>{header.bgtitle}</h1>
   </div>
   </section>
  )
}

export default Header