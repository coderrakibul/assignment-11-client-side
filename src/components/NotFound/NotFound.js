import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='container text-center notfound-page'>
            <div>
                <h1 className='fw-bold text-danger display-1'>404</h1>
                <h1>Page Not Found</h1>
            </div>
        </div>
    );
};

export default NotFound;