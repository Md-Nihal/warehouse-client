import React from 'react';

const MyItemDetails = ({items, handleDelate}) => {
    const { _id, name, quantity, price, email} = items;
    
    return (
        <div>
            <p>{name}: {quantity}: {price}: {email} : <button onClick={()=>handleDelate(_id)}>delete</button></p>
            
        </div>
    );
};

export default MyItemDetails;