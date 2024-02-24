import { NavLink, useLocation, useNavigate } from "react-router-dom";
import './Login.css';
import useAuth from "../../hooks/useAuth";

function Login() {
  
  const location = useLocation();
  const { signInUsingGoogle } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then(() => {
        navigate(location.state?.from?.pathname || '/shop');
      })
  }

  return (
    <div className="login-register-form">
      <div>
        <h2>Login</h2>
        <form>
          <input type='email' placeholder='Enter your email' /> <br />
          <input type='password' placeholder='Enter your password' /> <br />
          <input type="submit" value="Submit" className="orderNowButton" />
        </form>
        <p>New in ema-john? <NavLink to="/register">Create new account</NavLink></p>
        <p>or, <button onClick={handleGoogleLogin} className="orderNowButton">Sign In With Google</button></p>
      </div>
    </div>
  )
}

export default Login
