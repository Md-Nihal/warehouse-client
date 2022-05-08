import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import useProductDetail from '../../Hooks/useProductDetail';
import auth from '../../../firebase.init';

const SingleInventory = () => {
    const {inventoryId} = useParams()
    const [product] = useProductDetail(inventoryId)
    const [user] = useAuthState(auth);
    const handlePlaceOrder = event =>{
        event.preventDefault();
        // const order = {
        //     email:user.email,
        //     product: product.name,
        //     inventoryId: inventoryId,
        //     address: event.target.address.value,
        //     phone: event.target.phone.value
        // }
        // axios.post('https://fathomless-headland-51917.herokuapp.com/order', order)
        // .then(response=>{
        //     const {data} = response;
        //     console.log(data)
        //     if(data.insertedId){
        //         toast('your order is booked')
        //         event.target.reset();
        //     }
        // })
    }

    return (
        <div className='w-50 mx-auto'>
            {/* <PageTitle title={'Checkout'}></PageTitle> */}
            <h1>Update Quantity: {product.name}</h1>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' value={user?.displayName} type="text" name="name" placeholder='name' required readOnly disabled/>
                <br />
                <input className='w-100 mb-2' value={user?.email} type="text" name="email" placeholder='email' readOnly disabled required/>
                <br />
                <input className='w-100 mb-2' value={product.name} type="text" name="service" placeholder='Product'/>
                <br />
                <input className='w-100 mb-2'  type="text" name="address" placeholder='address' autoComplete='off'/>
                <br />
                <input className='w-100 mb-2'  type="text" name="phone" placeholder='phone'/>
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />

            </form>
        </div>
    );
};

export default SingleInventory;