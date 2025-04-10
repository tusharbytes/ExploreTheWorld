"use client"
import React from 'react'
import Topbar from '../components/Topbar/Topbr'
import Container from '../common/Container'
import { usePathname } from 'next/navigation'

function layout({children}) {
  const   pathName = usePathname()
  const ShowTopBar = [
    '/about','/contact' , '/destination'
  ]

  return (
    
    // <Container>
    <div>
      {ShowTopBar.includes(pathName) && <Topbar/> }
       {children}
       </div>
    // </Container>
  )
}

export default layout