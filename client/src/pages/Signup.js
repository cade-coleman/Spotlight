import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
// Route Imports
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
// Auth Import
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '', 
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState }
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (

    <div className=' bg-[#335AA6] w-full h-screen'>
        <div
        style={{ backgroundImage: `url(${Logo})`}}
        className='content-div flex justify-center items-center'></div>

        {/*LOGIN BOX */} 
        <div name= 'login box'>
          {data ? (
            <p>
              Success! You may now head{' '}
              <Link to="/">back to the login page.</Link>
            </p>
          ) : (
          <form onSubmit={handleFormSubmit} className='flex flex-col px-12'>
            <input className='rounded-md mb-1'
              placeholder='Username'
              name='username'
              type='text'
              id= 'username'
              value={formState.username}
              onChange={handleChange}
            />
            <input className='rounded-md mb-1'
              placeholder='First Name'
              name='firstName'
              type='text'
              id= 'first'
              value={formState.firstName}
              onChange={handleChange}
            />
            <input className='rounded-md mb-1'
              placeholder='Last Name'
              name='lastName'
              type='text'
              id= 'last'
              value={formState.lastName}
              onChange={handleChange}
            />
            <input className='rounded-md mb-1'
              placeholder='Email'
              name='email'
              type='text'
              id= 'email'
              value={formState.email}
              onChange={handleChange}
            />
            <input className='rounded-md'
              placeholder='Password'
              name='password'
              type='text'
              id= 'password'
              value={formState.password}
              onChange={handleChange}
            />
          
            {/*Creat Acc Btn */}
            <div className='flex flex-col justify-center py-4 px-24'>
              <button className='bg-green-500 rounded-md w-28 text-white' type='submit' >Create account</button>
            </div> 
          </form>
          )}
          {error && (<div>Sign up failed</div>)}
          {/*Go to Login Page */}
          <div className='flex flex-col justify-center py-4 px-24 text-white'>
            <p>Already have an account?</p>
          </div>
          <div className='flex flex-col justify-center text-center py-4 px-28'>
            <Link to='/' className='bg-green-500 rounded-md text-white'  >Go to Login</Link> 
          </div>

        </div>

    </div>
  )

};

export default Signup