import React from 'react'

const image="https://th.bing.com/th?q=User+Management&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.1&pid=InlineBlock&mkt=en-WW&cc=IR&setlang=en&adlt=strict&t=1&mw=247";

function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full border flex flex-col justify-center items-center shadow-xl rounded hover:scale-105 duration-500'>
                <img src={image} alt="/" className='w-20 mx-auto mt-[3rem] bg-white'/>
                <h2 className='text-2xl font-bold text-center py-8'>Sibgel User</h2>
                <p className='py-4 font-bold'>$149</p>
                <div>
                    <p className='py-4 font-bold'>500 GB Storage</p>
                    <h1 className='py-4 font-bold'>1 Standard Users</h1>
                    <p className='py-4 font-bold'>Send Up 2 GB</p>
                </div>
                <button className='bg-green-600 w-[130px] p-2 rounded-xl text-white'>Send</button>
            </div>
            <div className='w-full border flex flex-col justify-center items-center shadow-xl rounded hover:scale-105 duration-500'>
                <img src={image} alt="/" className='w-20 mx-auto mt-[3rem] bg-white'/>
                <h2 className='text-2xl font-bold text-center py-8'>Sibgel User</h2>
                <p className='py-4 font-bold'>$149</p>
                <div>
                    <p className='py-4 font-bold'>500 GB Storage</p>
                    <h1 className='py-4 font-bold'>1 Standard Users</h1>
                    <p className='py-4 font-bold'>Send Up 2 GB</p>
                </div>
                <button className='bg-green-600 w-[130px] p-2 rounded-xl text-white'>Send</button>
            </div>
            <div className='w-full border flex flex-col justify-center items-center shadow-xl rounded hover:scale-105 duration-500'>
                <img src={image} alt="/" className='w-20 mx-auto mt-[3rem] bg-white'/>
                <h2 className='text-2xl font-bold text-center py-8'>Sibgel User</h2>
                <p className='py-4 font-bold'>$149</p>
                <div>
                    <p className='py-4 font-bold'>500 GB Storage</p>
                    <h1 className='py-4 font-bold'>1 Standard Users</h1>
                    <p className='py-4 font-bold'>Send Up 2 GB</p>
                </div>
                <button className='bg-green-600 w-[130px] p-2 rounded-xl text-white'>Send</button>
            </div>
        </div>
    </div>
  )
}

export default Cards