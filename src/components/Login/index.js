import React, { useState } from 'react';
import './Login.scss';
import '../../styles/form.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, password);
    setUserName('');
    setPassword('');
  }
  return (
    <div className='login'>
      <div className="login__container">
        <h1 className='login__header'>Sign in</h1>
        <form className='login__form'>
          <input
            className='formInput'
            placeholder='Enter Email or Mobile no..'
            type='text'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className='formInput'
            placeholder='Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className='formBtn'
            type='submit'
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
        <div className='login__singnup'>
          <p>Do not have an account? <Link to='/signup'>Create New Account</Link></p>
        </div>
      </div> 
    </div>
  )
}

export default Login;