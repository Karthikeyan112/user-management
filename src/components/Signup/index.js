import React, { useState } from 'react';
import './Signup.scss';
import '../../styles/form.scss';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNo, setMobileNo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, password, firstName, lastName, mobileNo);
    setUserName('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setMobileNo('');
  }
  return (
    <div className='signup'>
      <div className="signup__container">
        <h1 className='signup__header'>Create An Account</h1>
        <form className='signup__form'>
          <input
            className='formInput'
            placeholder='First Name'
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className='formInput'
            placeholder='Last Name'
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className='formInput'
            placeholder='Enter Email'
            type='email'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className='formInput'
            placeholder='Mobile no..'
            type='tel'
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
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
            Create an Account
          </button>
        </form>
        <div className='signup__login'>
          <p>Already have an account? <Link to='/signin'>Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Signup;