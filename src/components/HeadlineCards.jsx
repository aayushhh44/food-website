import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md: grid-cols-3 gap-6'>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute rounded-xl text-white w-full h-full bg-black/50'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
            <p className='hidden md:block px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4 p-4 hover:bg-gray-600'>Order Now</button>
            </div>

            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        </div>

        {/* Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute rounded-xl text-white w-full h-full bg-black/50'>
            <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
            <p className='hidden md:block px-2'>Added Daily</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4 p-4 hover:bg-gray-600'>Order Now</button>
            </div>

            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        </div>

        {/* Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute rounded-xl text-white w-full h-full bg-black/50'>
            <p className='font-bold text-2xl px-2 pt-4'>We Deliver Deserts Too</p>
            <p className='hidden md:block px-2'>Tasty Treats</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4 p-4 hover:bg-gray-600'>Order Now</button>
            </div>

            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        </div>
    </div>
  )
}

export default HeadlineCards