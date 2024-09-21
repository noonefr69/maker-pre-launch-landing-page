import React from 'react'
import Logo from './components/Logo'
import Hero from './components/Hero'
import Options from './components/Options'
import Plans from './components/Plans'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='bg-veryDarkBlue'>
      <div className='max-w-[1920px] min-h-[100vh] bg-veryDarkBlue mx-auto'>
        <nav className='container mx-auto pt-10'>
          <Logo />
        </nav>
        <div id='heroTwos' className=' mt-[5rem]'>
          <Hero />
        </div>
        <div className='mb-[10rem]'>
          <Options />
        </div>
        <div>
          <Plans />
        </div>
        <div id='help' className='relative flex items-center justify-center'>
          <Footer />
        </div>
      </div>
    </div>
  )
}
