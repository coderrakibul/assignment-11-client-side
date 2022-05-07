import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'


const Product = ({ product }) => {
    const { _id, name, description, price, quantity, image, supplier } = product;
    const navigate = useNavigate();

    const navigateToProductDetails = id => {
        navigate(`/product/${id}`);
    };

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
                <button onClick={() => navigateToProductDetails(_id)} className='btn btn-primary py-1'>Manage</button>

            </div>

        </div>
    );
};

export default Product;