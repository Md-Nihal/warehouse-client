import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import useProductDetail from '../../Hooks/useProductDetail';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const SingleInventory = () => {
    const { inventoryId } = useParams();
    const [product, setProduct] = useProductDetail(inventoryId);
    const [isReload,setIsreload] =useState(false)
    useEffect(()=>{
        const url = `https://morning-meadow-63483.herokuapp.com/products/${inventoryId}`
        fetch( url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[isReload])

    const handlePlaceOrder = event => {

        event.preventDefault();
        const quantity = event.target.quantity.value;
        
        const newQuantity = parseInt(quantity)+ parseInt(product?.quantity)
        console.log(newQuantity)
        const updatedQuantity = {newQuantity};

        if(!quantity){
            toast('quantity added successfully')
        }
        else{
            const url = `https://morning-meadow-63483.herokuapp.com/user/${inventoryId}`
            console.log(url)
            fetch(url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(updatedQuantity)

            })
            .then(res=>res.json())
            .then(result=>{
                setIsreload(!isReload)
                event.target.reset()
                setProduct(result)
            })
        }
  
    }
    const delevary = e => {      
        const quantity = product?.quantity
        console.log(quantity);
        const updateItem = {quantity}
        const url = `https://morning-meadow-63483.herokuapp.com/delivery/${inventoryId}`;
        fetch(url,{
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updateItem)
        })
        .then(res => res.json())
        .then (result =>{
            console.log(result)
            setIsreload(!isReload)
        })
    }
    console.log(inventoryId)
    return (
        <div className='w-50 mx-auto'>
            <h1>Update Quantity: {product.name}</h1>
            <div>
                <h1>{product.name}</h1>
                <h1>{product.quantity}</h1>
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
                <button onClick={()=>delevary(product._id)}>delivery</button>
                <form onSubmit={handlePlaceOrder}>
           < input className='w-100 my-2' type="text" name="quantity" placeholder='Input quantity number' />
                <br />
                <input className='btn btn-success' type="submit" value="Update" />

            </form>
            
            
        </div>
    );
};

export default SingleInventory;