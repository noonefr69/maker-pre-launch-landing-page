import React from 'react'
import logo from '../assets/logo.svg'

export default function Logo() {
  return (
    <nav id='logo' className='flex items-center'>
        <img src={logo} alt="logo.svg" />
    </nav>
  )
}
