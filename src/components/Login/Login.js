import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
    }

    if (error) {
        return (
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
        );
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (user || googleUser) {
        navigate('/home')
    }
    return (
        <div className='form-container container d-block mt-5 mb-5 align-items-center'>
            <Form onSubmit={handleSubmit} className='register-form'>
                <h1 className='text-center mb-4 fw-bold mb-5 '>Please Login</h1>


                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" name="email" placeholder="Your Email" onChange={(event) => setEmail(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                </Form.Group>

                <div>
                    <p>Not accout? <Link className="text-decoration-none fw-bold ms-2" to='/register'>Create account</Link> </p>
                </div>

                <div>
                    <p>Forgot password? <Link className="text-decoration-none fw-bold ms-2" to='/reset'>Reset password</Link> </p>
                </div>

                <div className='d-flex justify-content-center'>
                    <Button onClick={() => signInWithEmailAndPassword(email, password)} variant="primary" type="submit" className='me-2'>
                        Login
                    </Button>

                    <Button onClick={() => signInWithGoogle()} variant="primary" type="submit" className='ms-2'>
                        Sign In With Google
                    </Button>
                </div>

            </Form>
        </div>
    );
};

export default Login;