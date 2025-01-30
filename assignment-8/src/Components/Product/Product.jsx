import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = ({ datum }) => {
    const { product_id, product_image, product_title, price } = datum;
    return (
        <div className='border  w-auto flex flex-col'>
            <img src={product_image} alt="" className='p-3' />
            <div className='text-start pl-3 flex flex-col flex-grow my-3'>
                <h1 className='text-2xl font-bold mt-2'>{product_title}</h1>
                <p className='text-xl font-semibold text-gray-400'>Price: {price}</p>
            </div>
            <NavLink to={`/viewdetails/${product_id}`} className='text-start ml-3 mb-3'>
            <button className='px-5 py-2 border-2 border-[#9538E2] rounded-full text-[#9538E2]'>View Details</button>
            </NavLink>
        </div>
    );
};

export default Product;