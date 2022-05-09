import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useProducts from '../Hooks/UseProducts';
import MyItemDetails from '../MyItemDetails/MyItemDetails';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        fetch('https://morning-meadow-63483.herokuapp.com/products')
        .then(res=>res.json())
        .then(result=> setProduct(result))
    },[])
    const email = user.email;
    const rest = product.filter(item=> item.email === email)

    const handleDelate = id =>{
        const proceed = window.confirm('Are You Sure Delate This ???')
        if(proceed){
            const url = `https://morning-meadow-63483.herokuapp.com/products/${id}`
            fetch(url, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = product.filter(product => product._id !== id);
                setProduct(remaining);
    
            })
        }
    }
    return (
        <div>
            {rest.map(items=> <MyItemDetails
            key={items._id}
            items={items}
            handleDelate={handleDelate}
            ></MyItemDetails>)}
        </div>
    );
};

export default MyItems;