import React from 'react';
import { Link ,useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'
const Login = () => {
  const { signInUsingGoogle} = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/'

  const handleGoogleLogin =()=>{
 signInUsingGoogle()
 .then(result =>{
  history.push(redirect_uri);
})
  }
  return (
    <div className='login-form'>
      <div className='login' >
        <h2> Login </h2>
        <form  >
          <input className='input' type="email"  placeholder='Your Email'/>
          <br />
          <input className='input'  type="password" name="" id="" placeholder='Your password' />
          <br />
          <input className='input'   id='submit'  type="submit" value="Submit" />
        </form>
        <p> New to ama-zon? <Link to='/register'>Create Account
        </Link></p>

        <div><p>----------------or----------------</p></div>
        <button onClick={handleGoogleLogin} className='button'>Google Sign In</button>


      </div>
    </div>
  );
};

export default Login;