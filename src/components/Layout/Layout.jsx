import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
        <>
      {/* <Navbar /> */}
      <div className="container h-[75vh] pt-9 mt-10   ">
        <Outlet ></Outlet>
      </div>
      {/* <Footer /> */}
    </>
  )
}
