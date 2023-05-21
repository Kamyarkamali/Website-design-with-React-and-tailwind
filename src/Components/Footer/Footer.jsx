import React from 'react'

const linkdin="https://cdn-icons-png.flaticon.com/128/1377/1377213.png";

const insta="https://cdn-icons-png.flaticon.com/128/174/174855.png";

const gitHub="https://cdn-icons-png.flaticon.com/128/733/733553.png";

function Footer() {
  return (
    <div className='bg-black max-[1240px] h-[200px] px-4'>
        <h1 className='text-green-600 font-bold text-xl my-6'>React.</h1>
        <p className='text-white text-xl'>I am Kamyar Kamali Kamazani, a web designer and developer.</p>
       <p className='text-white text-sm w-[100px] sm:w-full md:w-full'> My skills include <span className='font-bold text-yellow-300 mr-4'>HTML5, CSS3, Tailwind, JavaScript, React.js, Redux, Material UI, and REST API </span></p>

       <div className='flex justify-center items-center gap-10 sm:flex-col'>
        <a href="https://www.linkedin.com/in/kamyar-kamali-671a5822b/">
        <img className='w-[30px] cursor-pointer' src={linkdin} alt="/" />
        </a>
        <a href="https://github.com/Kamyarkamali?tab=repositories">
        <img className='w-[30px] cursor-pointer' src={gitHub} alt="/" />
        </a>
        <a href="https://www.instagram.com/kamyr_02111/">
        <img className='w-[30px] cursor-pointer' src={insta} alt="/" />
        </a>
       </div>
    </div>
  )
}

export default Footer