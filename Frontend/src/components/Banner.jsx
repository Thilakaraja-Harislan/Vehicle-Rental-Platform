import React from 'react'
import { assets } from '../assets/assets'

export default function Banner() {
  return (
    <div className='flex flex-col md:flex-row md:items-start items-center
    justify-between px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-fuchsia-800 to-fuchsia-300
    max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden my-10'>

        <div className='text-white w-full md:w-1/2 lg:w-3/5 
        text-center md:text-left mb-6 md:mb-0 md:pr-6 lg:pr-10'>

            <h2 className='text-3xl font-medium'>Do you want to drive yourself or relax with a driver?</h2>
            <p className='mt-2'>Choose complete flexibility for your journey. Rent a vehicle and drive on your own, or enjoy a stress-free ride with a professional driver.</p>
            <p className='max-w-130 mt-5'>Travel safely with reliable vehicles, clear pricing, and easy booking — your ride, your rules, anywhere in Sri Lanka.</p>

            <button className='px-6 py-2 bg-fuchsia-500 hover:bg-fuchsia-400 transition-all
            text-primary rounded-lg text-sm mt-4 cursor-pointer mb-2 md:mb-10 lg:mb-10'>
                List your vehicle
            </button>
        </div>
        
        <div className='w-full md:w-1/2 lg:w-2/5 flex justify-center md:justify-end'>
         <img src={assets.banner_vehicle_image} alt="Vehicle"  className='mb-2 md:mt-30 lg:mt-12'/>
        </div>
    </div>
  )
}
