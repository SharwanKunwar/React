import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Fotter/Fotter'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
