import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import banner from '../banner/banner.png';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/product")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const allProduct = products;
    const firstSix = allProduct.slice(0, 6);

    return (

        <div>
            <div className='w-100 banner-img d-flex justify-content-center'>
                <img className='img-fluid' src={banner} alt="" />
            </div>

            <div className='container mt-5 mb-5'>
                <h2 className='text-center mb-4'>Inventory</h2>
                <div className='products-container'>
                    {
                        firstSix.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>

            </div>

            <div className='text-center mb-5 d-flex justify-content-between container'>
                <Link to="/allproduct" className='btn btn-success'>View All Products</Link>
                <Link to="/" className='btn btn-success'>Manage Inventories</Link>
            </div>
        </div>

    );
};

export default Home;