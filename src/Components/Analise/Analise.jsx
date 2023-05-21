import React from 'react'

const image="https://th.bing.com/th/id/OIP.oHCkP0oZWs3HFIQFuaceWgAAAA?w=249&h=176&c=7&r=0&o=5&dpr=1.1&pid=1.7";

function Analise() {
  return (
    <div className='bg-[#eee] h-[100vh] py-16 px-4 '>
        <div className='max-w-[1240px] grid md:grid-cols-2 mx-auto'>
            <img className='w-[500px] mx-auto my-4 rounded-lg' src={image} alt="/" />
            <div className='flex flex-col justify-center gap-3'>
                <p className='text-green-600 font-bold'>DATA ANALYICS DASHBOARD</p>
                <h1 className='text-2xl'>Manage Data Analyrics Centrally</h1>
                <p className='font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint nobis hic laboriosam, nemo sit vero suscipit corrupti porro </p>
            <button className='bg-black w-[200px] text-white rounded-lg p-3 mt-4'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analise