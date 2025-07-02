import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Blog from "./components/BLog/Blog.jsx";
import { Toaster } from "react-hot-toast";
function App() {

  let routers = createBrowserRouter([
{
path:"",
element:<Layout/>,
children: [
        {
          path: "blog",
          element: (
              <Blog />
          )
        }

]

}


  ])
  return (
    <>
    <RouterProvider router={routers}></RouterProvider>
    <Toaster/>
    


    </>
  )
}

export default App
