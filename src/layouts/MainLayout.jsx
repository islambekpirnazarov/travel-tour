import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div className='font-inter'>
        <Header/>
        <Content>
            <Outlet/>
        </Content>
        <Footer/>
    </div>
  )
}

export default MainLayout