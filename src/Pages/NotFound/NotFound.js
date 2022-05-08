import React from 'react';
import error from '../../../src/images/404error1.png'
const NotFound = () => {
    return (
        <div className=' container mx-auto'>
            <h1 className='text-center text-primary'>404!!!</h1>
            <img className='w-100' src={error} alt="" />
        </div>
    );
};

export default NotFound;