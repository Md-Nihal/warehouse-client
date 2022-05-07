import React from 'react';
import useProducts from '../../Hooks/UseProducts';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products] = useProducts();
    return (
        <div id='product' className='container'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'> Products</h1>
                <div className="products-container">
                    {
                        products.slice(0,7).map(product => <Product
                            key={product._id}
                            product={product}
                        >
                        </Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;