import { async } from '@firebase/util';
import { sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../Token/useToken';
import Loading from '../../Shared/Loading/Loading';
import SocialLogIn from '../SocialLogIn/SocialLogIn';

import './SignUp.css'

const SignUp = () => {
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user);
    
    const handleLogin = () => {
        navigate('/login')
    }
    if (loading || updating) {
        return <Loading></Loading>
    }

    if (token) {
        navigate('/home')
    }

    const handleRegister = async (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });

        navigate('/home')
    }

    console.log(user)
    return (
        <div className='register-form'>

            {/* adding input */}

            <h1 className='text-center text-primary my-2'>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="1" placeholder='Your name' />
                <input type="email" name="email" id="2" placeholder='Enter your email' required />
                <input type="password" name="password" id="3" placeholder='Enter a password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="" />
                {/* <label className={agree ? 'ps-2 text-primary' : ' ps-2 text-danger'} htmlFor="terms"> Accept all my car service terms and conditions</label> */}
                <label className={` ps-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="terms"> Accept all my car service terms and conditions</label>
                <input
                    disabled={!agree}
                    className='btn btn-primary w-50 mx-auto mt-2'
                    type="submit"
                    value="Register" />

            </form>
            <p>Already have an account? <Link to={'/login'} className='text-primary pe-auto text-decoration-none' onClick={handleLogin} >Please Login</Link></p>
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default SignUp;