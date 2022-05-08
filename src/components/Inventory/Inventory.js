import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Table } from 'react-bootstrap';
import './Inventory.css'


const Inventory = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = `https://quiet-dawn-78359.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId]);

    const handleDelete = () =>{
        const proceed = window.confirm('are you sure?');
        if(proceed){
            const url = `https://quiet-dawn-78359.herokuapp.com/product/${productId}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            
        }
    }


    return (
        <div>
            <div className='mt-3 mb-5 d-flex justify-content-center'>
                <Link className='btn btn-primary' as={Link} to="/additem">Add New Product</Link>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Email</th>
                        <th>Available</th>
                        <th>Price</th>
                        <th>Supplier</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='img-width'><img className='w-50' src={product.image} alt="" /></td>
                        <td className='name-width'>{product.name}</td>
                        <td className='email-width'>{user.email}</td>
                        <td className='quantity-width'>{product.quantity}</td>
                        <td className='price-width'>${product.price}</td>
                        <td className='supplier-width'>{product.supplier}</td>
                        <td className='button-width'><button onClick={handleDelete} className='btn btn-danger'>Delete</button></td>

                    </tr>

                </tbody>
            </Table>
        </div>
    );
};

export default Inventory;