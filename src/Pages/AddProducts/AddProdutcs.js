import React from 'react';
import { useForm } from 'react-hook-form';

const AddProdutcs = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const url = `https://morning-meadow-63483.herokuapp.com/products`
        fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
        })
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a Products</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='name' {...register("name")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Image url' type="text" {...register("img")} />
                <input className='mb-2' placeholder='Quantity' type="text" {...register("quantity")} />
                <input className='mb-2' placeholder='Supplier' type="text" {...register("supplier")} />
                <input className='mb-2' placeholder='Email' type="text" {...register("email")} />
                <input type="submit" value="Add Product"/>
            </form>
        </div>
    );
};

export default AddProdutcs;