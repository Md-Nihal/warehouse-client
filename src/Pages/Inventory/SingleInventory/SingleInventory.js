import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import useProductDetail from '../../Hooks/useProductDetail';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const SingleInventory = () => {
    const { inventoryId } = useParams();
    const [product] = useProductDetail(inventoryId);
    const [user, setUser] = useState({product});

    const handlePlaceOrder = event => {
        event.preventDefault();
        const update = {
            name: product.name,
            price: product.price,
            description: product.description,
            supplier: product.supplier,
            // quantity: event.target.quantity.value,
            quantity: product.quantity,
            img: product.img,
        }
        axios.post(`http://localhost:5000/products/${inventoryId}`, update)
            .then(response => {
                const { data } = response;
                console.log(data)
                if (data.insertedId) {
                    toast('your quantity is updated')
                    event.target.reset();
                }
            })
    }
    const handlequantitychange = event =>{
        event.preventDefault();
        const {quantity, ...rest} = user;
        const previousquantity = parseInt(quantity)
        const newQuantity = parseInt(event.target.newQuantity.value);
        const updatequantity = previousquantity + newQuantity
        const newUser = {quantity: updatequantity, ...rest}
        setUser(newUser);
    }

    return (
        <div className='w-50 mx-auto'>
            <h1>Update Quantity: {product.name}</h1>
            <form onSubmit={handlePlaceOrder}>
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
                <br />
                <form onSubmit={handlequantitychange}>
           < input className='w-100 my-2' type="number" name="newQuantity" placeholder='Input quantity number' />
                <br />
                <input className='btn btn-success' type="submit" value="Update" />
            </form>
            </form>
            
        </div>
    );
};

export default SingleInventory;