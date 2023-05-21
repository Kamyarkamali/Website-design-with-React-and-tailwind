import React from 'react'
import Typed from 'react-typed';

function Hero() {
  return (
    <div className='text-white'>
    <div className='max-w-[800px] text-center mx-auto mt-[300px] w-full h-screen flex flex-col gap-5'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, iusto.</p>
        <h1 className='text-green-500 font-bold text-2xl sm:text-4xl'>Grow White Data</h1>
        <div className='text-2xl sm:text-3xl md:text-5xl'>
        <Typed strings={["React,Redux,Tilwind"]} typeSpeed={40} backSpeed={50} loop>
        </Typed>
        </div>
        <button className='bg-white text-center mx-auto text-[#000] py-4 rounded-xl font-bold w-[200px]'>Get Started</button>
    </div>
    </div>
  )
}

export default Hero