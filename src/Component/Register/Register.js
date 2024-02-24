import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import useFirebase from '../../useFirebase/useFirebase'

function Register() {
  const { signInUsingGoogle } = useFirebase();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then(() => {
        navigate('/shop');
      })
  }

  return (
    <div className='login-register-form'>
      <div>
        <h2>Register</h2>
        <form onScroll="">
            <input type='email' placeholder='Enter your email' /> <br/>
            <input type='psd' placeholder='Enter your password' /> <br/>
            <input type='psd' placeholder='Re-enter your password' /> <br/>
            <input type='submit' value="Submit" className='orderNowButton' />
        </form>
        <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
        <p>or, <button onClick={handleGoogleLogin} className="orderNowButton">Sign In With Google</button></p>
      </div>
    </div>
  )
}

export default Register
