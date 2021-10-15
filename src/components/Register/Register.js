import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css'
const Register = () => {
  const { signInUsingGoogle} = useAuth();
  return (
    <div>
      <div  className='register' >
        <form className='form'>
          <h2>Create account</h2>
          <label htmlFor=""> Your name</label> <br />
          <input className='input' type="text" name="" id="" />
          <br />
          <label htmlFor="">Email</label> <br />
           <input className='input' type="email" name="" id="" /><br />

          <label htmlFor="">Password</label> <br />
           <input className='input' type="password" name="" id=""  placeholder='At least 6 characters' /><br />

          <label htmlFor="">Re-enter password</label> <br />
           <input className='input' type="password" name="" id="" /><br />
            <input className=' submit '  type="submit" value="Create your Ama-zon account" />
            <p>Already have an account? <Link to='/login'>Sign-In</Link></p>
            <button onClick={signInUsingGoogle}  className='google-button'>Google Sign In</button>
           
        </form>
           
      </div>
      
    </div>
  );
};

export default Register;