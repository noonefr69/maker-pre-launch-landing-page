import React from 'react'
import blue from '../assets/icon-check-blue.svg'
import green from '../assets/icon-check-green.svg'

export default function Plans() {
  return (
    <div>
        <div className='text-center flex flex-col justify-center items-center mb-[8rem]'>
            <h1 id='kale' className='text-white text-[2.2rem] font-semibold mb-1'>Our Pricing Plans</h1>
            <p className='text-gray text-center max-w-[35rem]'>We only make money when our creators make money. Our plans are always affordable, and it’s completely free to get started.</p>
        </div>
        <div id='cont' className='flex gap-7'>
            <div id='padRemove' className='w-1/2 flex justify-end py-4'>
                <div className='bg-darkBlue px-6 py-8 pb-10 rounded-md'>
                    <h5 id='needback' className='relative text-white text-lg font-semibold'>Dip your toe</h5>
                    <p className='text-gray max-w-[25rem] mt-2'>Just getting started? No problem at all! Our free plan will take you a long way</p>
                    <h2 className='text-white text-4xl font-bold my-4'>Free</h2>
                    <ul id='ull'>
                        <li className='flex items-center gap-2 text-white font-semibold'><img src={green} alt="" />Unlimited products</li>
                        <li className='flex items-center gap-2 text-white font-semibold'><img src={green} alt="" />Basic analytics</li>
                        <li className='flex items-center gap-2 text-white font-semibold'><img src={green} alt="" />Limited marketplace exposure</li>
                        <li className='flex items-center gap-2 text-white font-semibold'><img src={green} alt="" />10% fee per transaction</li>
                    </ul>
                </div>
            </div>
            <div id='padRem' className='w-1/2 flex justify-start'>
                <div className='bg-cyan px-6 py-8 pb-10 rounded-md'>
                    <h5 id='needbacktwo' className='relative text-darkblue text-lg font-semibold'>Dive right in</h5>
                    <p className='text-gray max-w-[25rem] mt-2'>Ready for the big time? Our paid plan will help you take your business to the next level.</p>
                    <h2 className='text-darkblue text-4xl font-extrabold my-4 flex items-center gap-3'>$25.00 <span className='text-gray text-sm'>/month</span></h2>
                    <ul className='space-y-1'>
                        <li className='flex items-center gap-2 text-darkblue font-semibold'><img src={blue} alt="" />Custom domain</li>
                        <li className='flex items-center gap-2 text-darkblue font-semibold'><img src={blue} alt="" />Advanced analytics and reports</li>
                        <li className='flex items-center gap-2 text-darkblue font-semibold'><img src={blue} alt="" />High marketplace visibility</li>
                        <li className='flex items-center gap-2 text-darkblue font-semibold'><img src={blue} alt="" />5% fee per transaction</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
