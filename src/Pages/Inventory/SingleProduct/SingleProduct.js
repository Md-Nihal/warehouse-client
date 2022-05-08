import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleProduct = ({product}) => {
    const {_id, quantity, supplier, name, img, description, price} = product;
    const navigate = useNavigate()

    const handleNavigateToProduct = id =>{
        navigate(`/products/${id}`)
    }
    return (
        <div className='border border-dark text-center pb-2'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Supplier: {supplier}</p>
            <p>Quantity: {quantity}</p>
            <p><small>{description}</small></p>
            <button onClick={()=>handleNavigateToProduct(_id)} className='btn btn-success'>update: {name}</button>
        </div>
    );
};

export default SingleProduct;