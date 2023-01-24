import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav/Nav'
function Dark() {
  return (
    <>
    <Nav/>

    <Outlet/>
    </>
  )
}

export default Dark