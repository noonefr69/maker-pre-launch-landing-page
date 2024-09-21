import React from 'react'
import img from '../assets/icon-scroll.svg'
import bg from '../assets/illustration-hero-mobile.png'

export default function Hero() {
  return (
    <div id='heroBack' className='container mx-auto'>
        <div id='komak' className='flex flex-col items-center justify-center gap-6 p-[6rem]'>
            <h1 id='kos' className='z-20 text-white text-4xl font-semibold text-center max-w-[22rem] '>Get paid for the work you <span className='text-cyan'>love</span> to do.</h1>
            <p id='kos2' className='z-20 text-lg text-gray text-center max-w-[34rem]'>The 9-5 grind is so last century. We believe in living life on your own terms. Whether you’re looking to escape the rat race or set up a side hustle, we’ve got you covered.</p>
            <img src={img} alt="nothing matter" className='z-20 mt-5'/>
        </div>
    </div>
  )
}
