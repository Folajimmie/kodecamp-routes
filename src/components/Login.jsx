import React, { useRef } from "react";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import './Loginstyles.css';
import LoginImage from '../assest/LoginImage.svg';
import { Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';


function Login() {

const emailRef = useRef();
const passwordRef = useRef();

  const navigate =useNavigate();
  const SignInWithGoogleFunc = (e) =>{
    e.preventDefault();
    signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res);
      navigate('/Dashboard')
    })
  .catch((error) => {
    console.log(error);
  });

  };
  return (
    <div className='login-container'>
      <div className='login-formPage'>
            <div className='login-image'>
        <div className='logo'>
              <Link to='/'><h1>Kodecamp</h1></Link>
      </div>
                <img src={LoginImage} alt="" />
            </div>
            <div className='login-content'>
              <form>
                <h2>Welcome to Kodecamp</h2>
                <p>Kindly fill in your login details</p>
                <div className="g-input-field">
                  <h1>SIGN IN</h1>
                  <div className='input-field'>
                    <input type="text" ref={emailRef} name="username" placeholder='Username/Student ID' /><FaUser className="icon"/>
                  </div>
                  <div className='input-field'>
                    <input type="password" ref={passwordRef} name="password" placeholder='Password' /><FaLock className="icon"/>
                  </div>
                </div>
                <div className="login-action">
                  <div className="forgot-password">
                    <p>Forgot Password?</p>
                  </div>
                  <div className="register">
                    <p>Register</p>
                  </div>
                </div>
                <div className="submit">
                  <button>Login</button>
                </div>
                <div className="or">
                  <p>You can also sign in with</p>
                </div>
                <div className="google">
                  <button type="submit" onClick={(e) => SignInWithGoogleFunc(e)}>
                    <FaGoogle className="g-icon"/>Login with Google
                  </button>
                </div>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Login