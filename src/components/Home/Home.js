import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import banner from '../banner/banner.png';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://quiet-dawn-78359.herokuapp.com/product")
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


            <div className='container'>
                <Link to="/allproduct" className='btn btn-success mb-5 d-block fw-bold fs-5'>View All Products</Link>
            </div>

        </div>

    );
};

export default Home;