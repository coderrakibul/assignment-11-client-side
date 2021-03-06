import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://quiet-dawn-78359.herokuapp.com/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json)
            .then(result => {
                console.log(result)
            })

    };

    return (
        <div className='container w-75 mx-auto mt-5 mb-5'>
            <h2 className='text-center'>Add Your Item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 py-2' placeholder='Product Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2 py-2' placeholder='Product Description' {...register("description")} />
                <input className='mb-2 py-2' placeholder='Product Price' type="number" {...register("price")} />
                <input className='mb-2 py-2' placeholder='Product Quantity' type="number" {...register("quantity")} />
                <input className='mb-2 py-2' placeholder='Supplier Name' type="text" {...register("supplier")} />
                <input className='mb-2 py-2' placeholder='Photo URL' type="text" {...register("image")} />
                <input className='btn btn-primary fw-bold fs-5 mb-2 py-2' type="submit" />
            </form>
        </div>
    );
};

export default AddItem;