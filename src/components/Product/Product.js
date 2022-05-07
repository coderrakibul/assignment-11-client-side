import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'


const Product = (props) => {
    const { name, description, price, quantity, image, supplier } = props.product;

    let productDesc = description;
    let result = productDesc.slice(0, 100)
    return (
        <div className='product'>

            <div className='p-5 shadow'>
                <img className='w-100' src={image} alt="" />

                <h3 className='mt-3'>{name}</h3>
                <p><small>{result}.... </small></p>
                <h5>Price: ${price}</h5>
                <h5>Available Products: {quantity} </h5>
                <h6>Supplier: {supplier}</h6>
                <button className='btn btn-primary py-1'>Manage</button>

            </div>

        </div>
    );
};

export default Product;