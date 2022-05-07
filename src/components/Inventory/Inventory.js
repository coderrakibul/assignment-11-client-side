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
    console.log(product)
    console.log(productId)

    return (
        <div className='container'>
            <h2>This is inventory</h2>
            <h2>Bike Name {product.name}</h2>
        </div>
    );
};

export default Inventory;