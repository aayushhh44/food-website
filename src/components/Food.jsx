import React, { useState } from 'react'
import { data } from '../data/data'

const Food = () => {

    const [foods, setFoods] = useState(data)

//Filter Type burgers/pizza/etc


    const filterType = (aayush) =>{
        setFoods(
            data.filter((item) =>{
                return item.category === aayush
            })
        );
    };

//Filter by price

    const filterPrice = (price) =>{
        setFoods(
            data.filter((item) =>{
                return item.price === price;
            })
        )
    }

    console.log(data)
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12 '>
        <h1 className='text-orange-600 font-bold text-center text-4xl'>Top Rated Menu Items</h1>

        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>

            {/* Filter type */}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={() => setFoods(data)} className='border-orange-600 text-white bg-red-400 p-4 m-1 hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={() => filterType('burger')} className='border-orange-600 text-white bg-red-400 p-4 m-1 hover:bg-orange-600 hover:text-white'>Burgers</button>
                    <button onClick={() => filterType('pizza')} className='border-orange-600 text-white bg-red-400 p-4 m-1 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={() => filterType('salad')} className='border-orange-600 text-white bg-red-400 p-4 m-1 hover:bg-orange-600 hover:text-white'>Salads</button>
                    <button onClick={() => filterType('chicken')} className='border-orange-600 text-white bg-red-400 p-4 m-1 hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>
            </div>

            {/* Filter Price */}

            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={() => filterPrice('$')} className='border-orange-600 text-white bg-red-400 p-4 m-1 hover:bg-orange-600 hover:text-white'>$</button>
                    <button onClick={() => filterPrice('$$')} className='border-orange-600 text-white bg-red-400 p-4 m-1 hover:bg-orange-600 hover:text-white'>$$</button>
                    <button onClick={() => filterPrice('$$$')} className='border-orange-600 text-white bg-red-400 p-4 m-1 hover:bg-orange-600 hover:text-white'>$$$</button>
                    <button onClick={() => filterPrice('$$$$')} className='border-orange-600 text-white bg-red-400 p-4 m-1 hover:bg-orange-600 hover:text-white'>$$$$</button>
                </div>
            </div>
        </div>

        {/* Display Foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((fd, index) => (
                <div key={index} className="border shadow-lg hover:scale-105 duration-500 rounded-t-lg rounded-b-lg">
                    <img src={fd.image} alt={fd.name} className="w-full h-[200px] object-cover rounded-lg"/>
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold text-yellow-800'>{fd.name}</p>
                        <p>
                            <span className='rounded p-1 bg-yellow-300'>{fd.price}</span>
                        </p>
                    </div>
                </div>
            ) )}
        </div>
    </div>
  )
}

export default Food