import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';
import axios from 'axios';
import useToken from '../../../Token/useToken';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user)

    if (loading || sending) {
        return <Loading ></Loading>
    }

    if (token) {
        navigate(from, { replace: true })
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        await signInWithEmailAndPassword(email, password)

       
        // navigate(from, { replace: true });
    }

    const handleRegister = () => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Email sent, check your email')
        }
        else {
            toast('Please enter your email')
        }
    }

    return (
        <div className='w-50 mx-auto'>
           

            {/* adding input */}
            <h1 className='text-primary text-center mt-3'>Please Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="info w-50 d-block mx-auto mb-2" type="submit">
                    Login
                </Button>

            </Form>
            {errorElement}
            <p>New in Digital Supply Co? <Link to={'/register'} className='text-primary pe-auto text-decoration-none' onClick={handleRegister} >Please register</Link></p>
            <p>Forgot password? <button to={'/register'} className=' btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword} >Reset password</button></p>
            <ToastContainer />
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default Login;