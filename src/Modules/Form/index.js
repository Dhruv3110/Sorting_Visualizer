import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = ({ isSignInPage = true }) => {
  // const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  const [showPass, setShowPass] = useState(false);


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignInPage) {

      // Handle login logic
    } else {
      // Handle registration logic
    }
  };

  return (
    <div className='form-container'>
      <div className='form-interior'>
        <h1 className='login'>{isSignInPage ? "LOGIN" : "REGISTER"}</h1>
        <div className='user'>
          <h4 className='user-id '>User Name:</h4>
          <input type="text" className="user-text" placeholder='Enter user' />
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-person user-icon" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
          </svg>
        </div>
        {!isSignInPage && (
          <>
            <div className='email'>
              <h4 className='user-email'>Email:</h4>
              <input type="email" className="email-text" placeholder='Enter Email' />
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-envelope email-icon" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
              </svg>
            </div>
          </>
        )}
        <div className='password'>
          <h4 className='user-password'>Password:</h4>
          <input type={showPass ? "text" : "password"} className='password-text' placeholder='Enter password'  />
          <button type="button" className='password-icon' onClick={()=>setShowPass(!showPass)}>
            {showPass ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
              </svg>
            )}
          </button>
        </div>
        <div className='rem-for-box'>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="defaultCheck1" />
            <label className="form-check-label" htmlFor="defaultCheck1">
              Remember me
            </label>
          </div>
          {isSignInPage && (
            <span
            className="forgot-pass"
            onClick={() => navigate(`/users/otp`)}
          >
            Forgot Password?
          </span>
          )}
        </div>
        <button className='login-btn' onClick={handleSubmit}>
          {isSignInPage ? "Login" : "Register"}
        </button>
        <p className='signup'>
          {isSignInPage ? "Don't have an account?" : "Already have an account?"}
          <span
            className="register"
            onClick={() => navigate(`/users/${isSignInPage ? 'sign_up' : 'sign_in'}`)}
          >
            {isSignInPage ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Form;
