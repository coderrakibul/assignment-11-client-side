import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const Inventory = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId]);


    return (
        <div className='container mt-5 mb-5'>
            <h2 className='text-center'>About This Product</h2>
            <img className='w-50 mx-auto d-block' src={product.image} alt="" />
            <h3>Name: {product.name}</h3>
            <h3>Price: ${product.price}</h3>
            <h3>Available: {product.quantity}</h3>
            <h3>Supplier: {product.supplier}</h3>
            <h5> <h3 className='d-inline-block'>Description:</h3> {product.description}</h5>
           
        </div>
    );
};

export default Inventory;