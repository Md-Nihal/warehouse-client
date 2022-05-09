import React from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../../Home/Product/Product';
import useProducts from '../../Hooks/UseProducts';
import SingleProduct from '../SingleProduct/SingleProduct';
import './InventoryProduct.css'
const InventoryProduct = () => {
    const [products] = useProducts()
    const navigate = useNavigate();
    return (
        <div >
            <div id='product' className='container'>
            <div className="row">
                <h1 className='text-black text-center mt-5'>All Products</h1>
                <div className="products-container">
                    {
                        products.map(product=> <SingleProduct
                            key={product._id}
                            product={product}
                        ></SingleProduct>)
                    }
                </div>
            </div>
        </div>
        <div className='mx-auto'>
        <button  className='btn btn-success my-2 mx-auto' onClick={()=>navigate('/addproduct')}>Add a Product</button>
        </div>
        </div>
    );
};

export default InventoryProduct;