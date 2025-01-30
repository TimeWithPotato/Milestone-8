import React from 'react';
import { FaDollarSign } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
const CartItems = ({ datum, handleRemoveItem }) => {
    const {product_id,product_image,product_title, price, description} = datum
    // console.log(product_title)
    return (
        <div className='flex border-3 shadow-lg items-center'>
            <img src={product_image} alt="" className='object-contain p-3' />
            <div className='flex flex-col flex-grow text-start ml-5'>
                <h1 className='text-lg font-bold'>{product_title}</h1>
                <p className='text-base font-medium text-gray-400'>{description}</p>
                <h1 className='flex items-center text-lg font-bold'><span>Price:</span>
                    <span><FaDollarSign /></span>
                    <span>{price}</span>
                </h1>
            </div>
            <button className='text-red-600 mr-5' onClick={()=>handleRemoveItem(product_id)}><IoIosCloseCircleOutline size={25} /></button>
        </div>
    );
};

export default CartItems;