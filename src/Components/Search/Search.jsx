import React from 'react'

function Search() {
  return (
    <div className='bg-black h-[400px] px-6 flex flex-col justify-center sm:px-[30%]'>
        <h1 className='text-white text-2xl font-bold'>Whant tips & tricks to optimize your flow?</h1>
        <span className='text-white font-bold'>Sing up to our newsletter and stay up to date</span>
        <div className='flex flex-col py-8'>
            <div className='flex items-center gap-5'>
            <input className='w-[400px] h-[40px] rounded-lg placeholder:text-sl outline-none border-none' type="email" placeholder='Enter your Email' />
            <button className='text-white bg-green-500 w-[200px] h-[50px] text-[13px] rounded-lg'>Get Satrted</button>
            </div>
        </div>
            <span className='text-white font-bold'>We care bout the protection of your data.Read<a href='#' className='text-green-500 border-b sm:px-4 '>Privacy Policy</a></span>
    </div>
  )
}

export default Search