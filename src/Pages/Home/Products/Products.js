import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../Hooks/UseProducts';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products] = useProducts();
    const navigate = useNavigate();
    return (
        <div id='product' className='container'>
            <div className="row">
                <h1 className='text-black text-center mt-5'> Products</h1>
                <div className="products-container">
                    {
                        products.slice(0, 6).map(product => <Product
                            key={product._id}
                            product={product}
                        >
                        </Product>)
                    }
                </div>
                <div className='mx-auto'>
                    <button className='btn btn-success my-2 mx-auto' onClick={() => navigate('/inventory')}>Add a Product</button>
                </div>
            </div>
        </div>
    );
};

export default Products;