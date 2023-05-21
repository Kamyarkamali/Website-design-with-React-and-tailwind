import React, { useState } from 'react';
import { AiOutlineClose,AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {
    const [open,setOpen]=useState(false);
    return (
        <div className='flex max-w-[1240px] mx-auto px-4 justify-between items-center'>
            <h1 className='text-3xl text-green-500 w-full'>React.</h1>
            <ul className=' hidden sm:flex sm:text-white'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Compony</li>
                <li className='p-4'>Resourse</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={()=>setOpen(!open)} className='sm:hidden md:hidden xl:hidden 2xl:hidden'>
            {!open ?<AiOutlineMenu size={20} className='text-white cursor-pointer'/> : <AiOutlineClose size={20} className='text-white'/>}
            </div>
            <div className={open ? "fixed top-10 w-[60%] h-full rounded-md border-r uppercase left-0 py-8 ease-in duration-300" : "fixed left-[-100%] ease-in duration-500"}>
                <ul className='text-white'>
                <li className='pt-4 border-b'>Home</li>
                <li className='pt-4 border-b'>Compony</li>
                <li className='pt-4 border-b'>Resourse</li>
                <li className='pt-4 border-b'>About</li>
                <li className='pt-4 border-b'>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;