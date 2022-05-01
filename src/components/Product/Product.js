import React from 'react';
import './Product.css'


const Product = (props) => {
    const { name, available, image } = props.product;
    return (
        <div className='product'>

            <div className='p-5 shadow'>
                <img className='w-100' src={image} alt="" />

                <h3 className='mt-3'>{name}</h3>
                <p>Available Products: {available}</p>
            </div>

        </div>
    );
};

export default Product;