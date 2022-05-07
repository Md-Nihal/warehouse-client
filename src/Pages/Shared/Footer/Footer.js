import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 bg-success'>
            <p><small>copyright of © {year} </small></p>
            <p><small>All right reserved to © Nihal</small></p>
        </footer>
    );
};

export default Footer;