import React from 'react'
import Header from '../components/Header'
import {Outlet} from 'react-router-dom'
import ResponsiveTemplates from '../util/ResponsiveTemplates'
import ButonTabComponent from '../components/ButonTabComponent'
import ContainerComponent from '../components/ContainerComponent'

function Footer() {
   <footer className='fs-3 text-center text-white p-3 bg-light text-dark'>
          FOOTER
    </footer>
}
export default function HomeTemplates() {
  return (
    <div>
        <Header></Header>
        <div className="content" style={{minHeight: 650}}>
            <Outlet></Outlet>
        </div>
        <ResponsiveTemplates component={Footer} mobileComponent={ButonTabComponent}></ResponsiveTemplates>
        <Footer></Footer>
    </div>
  )
}

