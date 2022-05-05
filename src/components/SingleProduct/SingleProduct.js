import React from 'react';
import './SingleProduct.css'

const SingleProduct = (props) => {
    const { name, description, price, quantity, image, supplier } = props.product;
    return (
        <div className='single-product'>

            <div className='p-5 shadow'>
                <div className='d-flex justify-content-center'>
                    <img className='w-75 w-lg-50' src={image} alt="" />
                </div>

                <h3 className='mt-3'>{name}</h3>
                <p><small>{description}.... </small></p>
                <h5>Price: ${price}</h5>
                <h5>Available Products: {quantity} </h5>
                <h6>Supplier: {supplier}</h6>

            </div>

        </div>
    );
};

export default SingleProduct;