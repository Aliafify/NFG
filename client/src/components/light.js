import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav/Nav'
import "../style/light.css";
function Light() {
  return (
    <>
    <Nav/>

    <Outlet/>
    </>
  )
}

export default Light;