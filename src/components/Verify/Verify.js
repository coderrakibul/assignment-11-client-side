import React, { useState } from 'react';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Verify.css'

const Verify = () => {
    const [email, setEmail] = useState('');
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (sending) {
        return <p>Sending...</p>;
    }


    return (
        <div className="verify-page d-flex flex-column">
            <div>
                <button className='btn btn-primary text-white'
                    onClick={async () => {
                        await sendEmailVerification();
                        alert('Sent email');
                    }}
                >
                    Verify Your Email Address
                </button>
            </div>

            <div className='mt-3'>
                <p>Not Login? <Link className="text-decoration-none fw-bold ms-2" to='/register'>Please Login First</Link> </p>
            </div>


        </div>
    );
};



export default Verify;