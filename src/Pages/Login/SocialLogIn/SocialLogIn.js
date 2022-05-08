import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../Token/useToken';
const SocialLogIn = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [token] = useToken(user || user1)
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    
    if(loading || loading1){
        return <Loading></Loading>
    }

    if (error || error1) {
         errorElement =<p className='text-danger'>Error: {error?.message} {error1?.message}</p>
      }

    if(token){
        navigate(from, { replace: true })
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
               
            </div>
            {errorElement}
            <div>
                <button
                onClick={() => signInWithGoogle()}
                className='btn btn-info d-block mx-auto w-50 my-2'>
                    <img src={google} alt="" />
                    <span className='px-2'>Google sign in</span>
                </button>
                <button className='btn btn-info d-block mx-auto w-50 my-2'>
                    <img style={{width: '30px'}} src={facebook} alt="" />
                    <span className='px-2'>Facebook sign in</span>
                </button>
                <button 
                onClick={() => signInWithGithub()}
                className='btn btn-info d-block mx-auto w-50 my-2'>
                    <img src={github} alt="" />
                    <span className='px-2'>Github sign in</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogIn;