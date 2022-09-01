import React from 'react'
import Logo from '../assets/logo.png'


const Login = () => {
  return (

    <div className=' bg-[#10133F] w-full h-screen'>
        <div
        style={{ backgroundImage: `url(${Logo})`}}
        className='content-div flex justify-center items-center'></div>

        {/*LOGIN BOX */}
        <div name= 'login box'>
          <form className='flex flex-col px-12'>
            <label htmlFor='usename' className='text-gray-300'>Username:</label>
            <input className='rounded-md'
              type='text'
              id= 'username'
            />
            <label htmlFor='password' className='text-gray-300'>Password:</label>
            <input className='rounded-md'
              type='text'
              id= 'password'
            />
          </form>

        {/*LOIN BUTTON */}
          <div className='flex flex-col justify-center py-4 px-40'>
            <button className='bg-green-500 rounded-md text-white' >Log In</button>
          </div>
          
          <div className='flex flex-col justify-center py-4 px-28 text-white'>
           <p>Don't have an account?</p>
          </div>

          {/*CREATE AN ACCOUNT BUTTON */}
          <div className='flex flex-col justify-center py-4 px-28'>
           <button className='bg-green-500 rounded-md text-white'>Create an Account</button>

          </div>
          
          
            


        </div>

    </div>
  )

};

export default Login