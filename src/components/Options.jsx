import React from 'react'
import img1 from '../assets/illustration-passions.svg'
import img2 from '../assets/illustration-financial-freedom.svg'
import img3 from '../assets/illustration-lifestyle.svg'
import img4 from '../assets/illustration-work-anywhere.svg'

export default function Options() {
  return (
    <div id='option' className='flex items-center justify-around gap-2 mt-[10rem] px-20'>
        <div id='box1' className='flex flex-col space-y-6 max-w-[16rem]'>
            <div className='bg-darkBlue rounded-[2.5rem] h-[8rem] w-[8rem] p-6 flex items-center justify-center '>
                <img  src={img1} alt="" />
            </div>
            <div id='box1child' className='space-y-4'>
                <h4 className='text-white font-semibold'>Indulge your passions</h4>
                <p className='text-gray'>Your passions shouldn't be just for the weekend. Earn a living doing what you love.</p>
            </div>
        </div>
        <div id='box2' className='flex flex-col space-y-6  max-w-[16rem] relative top-10'>
            <div className='bg-darkBlue rounded-[2.5rem] h-[8rem] w-[8rem] p-6 flex items-center justify-center '>
                <img  src={img2} alt="" />
            </div> 
            <div id='box2child' className='space-y-4'>
                <h4 className='text-white font-semibold'>Gain financial freedom</h4>
                <p className='text-gray'>Start making money work for you. There’s nothing quite like earning while you sleep.</p>
            </div>
        </div>
        <div id='box3' className='flex flex-col space-y-6  max-w-[16rem]'>
            <div className='bg-darkBlue rounded-[2.5rem] h-[8rem] w-[8rem] p-6 flex items-center justify-center '>
                <img  src={img3} alt="" />
            </div> 
            <div id='box3child' className='space-y-4'>
                <h4 className='text-white font-semibold'>Choose your lifestyle</h4>
                <p className='text-gray'>Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.</p>
            </div>
        </div>
        <div id='box4' className='flex flex-col space-y-6  max-w-[16rem] relative top-10'>
            <div className='bg-darkBlue rounded-[2.5rem] h-[8rem] w-[8rem] p-6 flex items-center justify-center '>
                <img  src={img4} alt="" />
            </div>            <div id='box4child' className='space-y-4'>
                <h4 className='text-white font-semibold'>Work from anywhere</h4>
                <p className='text-gray'>Selling online means not being pinned down. Want to work AND travel? Go for it!.</p>
            </div>
        </div>
    </div>
  )
}
