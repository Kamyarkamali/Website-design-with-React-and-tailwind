import React from 'react';

const Navbar = () => {
    return (
        <div className='max-w-[1640px] mx-auto flex items-center my-6'>
            <h2 className='mx-7 text-3xl md:text-2xl sm:text-4xl font-bold'>Food</h2>
            <div className='flex justify-center w-full gap-11'>
                    <span className='font-bold text-sm text-gray-600 cursor-pointer'>Home</span>
                    <span className='font-bold text-sm text-gray-600 cursor-pointer'>INTRO</span>
                    <span className='font-bold text-sm text-gray-600 cursor-pointer'>FEATURES</span>
                    <span className='font-bold text-sm text-gray-600 cursor-pointer'>PRICING</span>
                    <span className='font-bold text-sm text-gray-600 cursor-pointer'>FAQS</span>
            </div>
            <div className='w-[200px] flex gap-5 '>
                <button className='border text-orange-700 p-1 rounded-[13px] bg-gray-300 w-[90px]'>Sing Up</button>
                <button className='border text-white p-1 rounded-[13px] bg-orange-600 w-[90px] mr-5'>Sing In</button>
                </div>
        </div>
    );
};

export default Navbar;