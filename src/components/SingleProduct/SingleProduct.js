import React from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import './SingleProduct.css'

const SingleProduct = (props) => {
    const { _id, name, description, price, quantity, image, supplier } = props.product;
    const navigate = useNavigate();

    const navigateToProductDetails = id => {
        navigate(`/product/${id}`);
    };
    let loading;

    if (loading) {
        if (loading) {
            return <Loading></Loading>
        }
    };
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
                <button onClick={() => navigateToProductDetails(_id)} className='btn btn-primary py-1'>Manage</button>

            </div>

        </div>
    );
};

export default SingleProduct;