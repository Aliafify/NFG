import React from 'react'

function Hr({light}) {
  return (
    <>
    <hr className={light?"hr-sun":"hr-night"}></hr>
    </>
  )
}

export default Hr