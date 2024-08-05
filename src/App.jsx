import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/navbar/Navbar'
import Footer from './Component/footer/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layaut from './Component/Layaut/Layaut.jsx'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import Contact from './Component/contact/Contact.jsx'
import Portfolio from './Component/portfolio/Portfolio.jsx'
import Notfount from './Component/notfound/Notfount.jsx'

function App() {

  let routing =  createBrowserRouter([
    {path:'',element:<Layaut></Layaut>,children:[
      {index:true , element:<Home></Home>},
      {path:'/about', element:<About></About>},
      {path:'/portfolio', element:<Portfolio></Portfolio>},
      {path:'/contact', element:<Contact></Contact>},
      {path:'*', element:<Notfount/>},
    ]}
  ])

  return (
    <>
    <RouterProvider router={routing}/>
    </>
  )
}

export default App
