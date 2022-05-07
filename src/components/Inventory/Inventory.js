import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


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
        <div className='container'>
            <h2 className='text-center mt-5'>About This Product</h2>
            <img className='w-50 mx-auto d-block' src={product.image} alt="" />
            <h3>{product.name}</h3>
            <h3>{product.price}</h3>
            <h3>{product.quantity}</h3>
            <h3>{product.supplier}</h3>
            <h5>{product.description}</h5>
        </div>
    );
};

export default Inventory;