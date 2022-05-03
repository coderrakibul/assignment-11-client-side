import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <div className='bg-dark p-5'>
            <p className='text-light text-center p-2'>Copyright &copy; All Rights Are Reserved : {year}</p>


        </div>
    );
};

export default Footer; 