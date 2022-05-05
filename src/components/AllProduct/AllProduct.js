import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProduct.css';

const AllProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/product")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (

        <div className='container'>
            <div>
                {
                    products.map(product => <SingleProduct
                        key={product._id}
                        product={product}
                    ></SingleProduct>)
                }
            </div>

        </div>

    );
};

export default AllProducts;