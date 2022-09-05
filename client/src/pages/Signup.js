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

    <div className=' bg-[#10133F] w-full h-screen'>
        <div
        style={{ backgroundImage: `url(${Logo})`}}
        className='content-div flex justify-center items-center'></div>

        {/*LOGIN BOX */} 
        <div name= 'login box'>
          {data ? (
            <p>
              Success! You may now head{' '}
              <Link to="/login">back to the login page.</Link>
            </p>
          ) : (
          <form onSubmit={handleFormSubmit} className='flex flex-col px-12'>
            <input className='rounded-md'
              placeholder='Username'
              name='username'
              type='text'
              id= 'username'
              value={formState.username}
              onChange={handleChange}
            />
            <input className='rounded-md'
              placeholder='First Name'
              name='firstName'
              type='text'
              id= 'first'
              value={formState.firstName}
              onChange={handleChange}
            />
            <input className='rounded-md'
              placeholder='Last Name'
              name='lastName'
              type='text'
              id= 'last'
              value={formState.lastName}
              onChange={handleChange}
            />
            <input className='rounded-md'
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
            <div className='flex flex-col justify-center py-4 px-28'>
              <button className='bg-green-500 rounded-md text-white' type='submit' >Create account</button>
            </div> 
          </form>
          )}
          {error && (<div>Sign up failed</div>)}
          {/*Go to Login Page */}
          <div className='flex flex-col justify-center py-4 px-28 text-white'>
            <p>Already have an account?</p>
          </div>
          <div className='flex flex-col justify-center py-4 px-28'>
            <button className='bg-green-500 rounded-md text-white'  >Go to Login</button>
          </div>

        </div>

    </div>
  )

};

export default Signup