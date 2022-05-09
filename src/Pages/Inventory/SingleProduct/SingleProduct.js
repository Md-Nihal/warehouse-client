import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../Hooks/UseProducts';

const SingleProduct = ({product}) => {
    const {_id, quantity, supplier, name, img, description, price} = product;
    const navigate = useNavigate();

    const handleNavigateToProduct = id =>{
        navigate(`/products/${id}`)
    }

    const [products, setProducts] = useProducts()
    const handleDelete = id => {
        const proceed = window.confirm('Are you want to delete?')
        if(proceed){
            const url = `https://morning-meadow-63483.herokuapp.com/products/${id}`
            fetch(url, {
                method: "DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                const remaining = products.filter(service=> service._id !== id)
                setProducts(remaining);
            })
        }
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
            <br />
            <button className='btn btn-success my-2' onClick={()=> handleDelete(_id)}>delete</button>
        </div>
    );
};

export default SingleProduct;