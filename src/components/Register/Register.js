import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

import './Register.css';

const Register = () => {
    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }

    const handleSubmit = event => {
        event.preventDefault();
    }

    if (user || googleUser) {
        navigate('/login')
    }

    return (
        <div className='form-container container d-block mt-5 mb-5 align-items-center'>
            <Form onSubmit={handleSubmit} className='register-form'>
                <h1 className='text-center mb-5 fw-bold '>Please Register</h1>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="text" name="name" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" name="email" placeholder="Your Email"
                        onChange={(event) => setEmail(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                </Form.Group>
                <div>
                    <p>Already have an accout? <Link className="text-decoration-none fw-bold ms-2" to='/login'>Login</Link> </p>
                </div>

                <div className='d-flex justify-content-center'>
                    <Button onClick={() => createUserWithEmailAndPassword(email, password)} variant="primary" type="submit" className='me-2'>
                        Register
                    </Button>

                    <Button onClick={() => signInWithGoogle()} variant="primary" type="submit" className='ms-2'>
                        Sign In With Google
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Register;