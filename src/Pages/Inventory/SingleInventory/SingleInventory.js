import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import useProductDetail from '../../Hooks/useProductDetail';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const SingleInventory = () => {
    const navigate = useNavigate()
    const { inventoryId } = useParams();
    const [product, setProduct] = useProductDetail(inventoryId);
    const [isReload, setIsreload] = useState(false)
    useEffect(() => {
        const url = `https://morning-meadow-63483.herokuapp.com/products/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [isReload])

    const handlePlaceOrder = event => {

        event.preventDefault();
        const quantity = event.target.quantity.value;

        const newQuantity = parseInt(quantity) + parseInt(product?.quantity)
        console.log(newQuantity)
        const updatedQuantity = { newQuantity };

        if (!quantity) {
            toast('quantity added successfully')
        }
        else {
            const url = `https://morning-meadow-63483.herokuapp.com/user/${inventoryId}`
            console.log(url)
            fetch(url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(updatedQuantity)

            })
                .then(res => res.json())
                .then(result => {
                    setIsreload(!isReload)
                    event.target.reset()
                    setProduct(result)
                })
        }

    }
    const delevary = e => {
        const quantity = product?.quantity
        console.log(quantity);
        const updateItem = { quantity }
        const url = `https://morning-meadow-63483.herokuapp.com/delivery/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setIsreload(!isReload)
            })
    }
    console.log(inventoryId)
    return (
        <div className='w-50 mx-auto'>
            <h2>Update Quantity of {product.name}</h2>
            <div className='border p-2 m-2'>
                <h3>Name: {product.name}</h3>
                <p>Price: {product.price}</p>
                <p>Supplier: {product.supplier}</p>
                <p>Description: {product.description}</p>
                <h5>Quantity: {product.quantity}</h5>

            </div>
            {/* <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' value={product.name} type="text" name="name" placeholder='name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' value={product.price} type="text" name="price" placeholder='price' readOnly disabled required />
                <br />
                <textarea className='w-100 mb-2' value={product.description} type="text" name="description" placeholder='description' disabled />
                <br />
                <input className='w-100 mb-2' value={product.supplier} type="text" name="supplier" placeholder='supplier' disabled />
                <br />
                <input className='w-100 mb-2' value={product.quantity} type="text" name="quantity" placeholder='quantity' disabled />
                <br />
                <input className='btn btn-success' type="submit" value="Deliver" />
                <br /> */}
            <button className='btn btn-success' onClick={() => delevary(product._id)}>delivery</button>
            <form onSubmit={handlePlaceOrder}>
                < input className='w-100 my-2' type="text" name="quantity" placeholder='Input quantity number' />
                <br />
                <input className='btn btn-success' type="submit" value="Update" />
            </form>
            <button className='btn btn-success my-2' onClick={()=>navigate('/inventory')}>Manage Inventory</button>


        </div>
    );
};

export default SingleInventory;